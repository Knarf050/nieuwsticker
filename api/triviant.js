// Vercel Serverless Function — genereert Triviant-vragen (meerkeuze) uit de tekst
// van een krant-editie (PDF of EPUB). De browser haalt zelf de tekst uit het bestand
// en stuurt die hierheen; deze functie laat Claude er quizvragen van maken.
//
// Benodigde omgevingsvariabele (Vercel → Settings → Environment Variables):
//   ANTHROPIC_API_KEY   je Claude API-sleutel (zie TRIVIANT.md)
// Optioneel:
//   TRIVIANT_MODEL       model-id (standaard claude-opus-4-8; bijv. claude-haiku-4-5 = goedkoper)
import Anthropic from '@anthropic-ai/sdk';

const MAX_TEKST = 240000; // tekens; ruim genoeg voor een hele krant, binnen de body-limiet

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Gebruik POST' });
  }
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(503).json({ error: 'ANTHROPIC_API_KEY ontbreekt op de server. Zie TRIVIANT.md.' });
  }

  let body;
  try {
    body = await leesBody(req);
  } catch (e) {
    return res.status(400).json({ error: 'Ongeldige aanvraag', details: e.message });
  }

  const tekst = String(body.tekst || '').slice(0, MAX_TEKST).trim();
  const aantal = Math.min(Math.max(parseInt(body.aantal, 10) || 18, 1), 40);
  const categorieen = Array.isArray(body.categorieen) && body.categorieen.length
    ? body.categorieen.filter(c => c && c.id && c.naam)
    : [{ id: 'overig', naam: 'Overig' }];
  const categorieIds = categorieen.map(c => c.id);

  if (tekst.length < 200) {
    return res.status(400).json({ error: 'Te weinig leesbare tekst uit de krant gehaald.' });
  }

  const schema = {
    type: 'object',
    additionalProperties: false,
    properties: {
      vragen: {
        type: 'array',
        items: {
          type: 'object',
          additionalProperties: false,
          properties: {
            vraag: { type: 'string', description: 'Concrete, toetsbare quizvraag' },
            opties: {
              type: 'array', items: { type: 'string' }, minItems: 4, maxItems: 4,
              description: 'Precies 4 antwoordopties, in willekeurige volgorde',
            },
            antwoordIndex: { type: 'integer', minimum: 0, maximum: 3, description: 'Index (0-3) van het juiste antwoord in opties' },
            categorie: { type: 'string', enum: categorieIds, description: 'Een van de toegestane categorie-ids' },
            moeilijkheid: { type: 'string', enum: ['makkelijk', 'gemiddeld', 'moeilijk'] },
            uitleg: { type: 'string', description: 'Eén zin die het antwoord toelicht, te tonen ná het beantwoorden' },
            bron: { type: 'string', description: 'Titel of onderwerp van het artikel waar de vraag op gebaseerd is' },
          },
          required: ['vraag', 'opties', 'antwoordIndex', 'categorie', 'moeilijkheid', 'uitleg', 'bron'],
        },
      },
    },
    required: ['vragen'],
  };

  const catLijst = categorieen.map(c => `- ${c.id}: ${c.naam}`).join('\n');
  const systemPrompt =
    'Je maakt een Triviant-achtige meerkeuzequiz (net als Trivial Pursuit) op basis van de aangeleverde ' +
    'kranttekst van NRC. Regels:\n' +
    `- Maak precies ${aantal} vragen, verdeeld over de 6 categorieën hieronder — probeer ze ongeveer gelijk te spreiden.\n` +
    '- Gebruik uitsluitend feiten die letterlijk in de tekst staan (namen, cijfers, plaatsen, uitspraken). Verzin niets.\n' +
    '- Elke vraag heeft precies 4 opties, met precies 1 duidelijk juist antwoord. De 3 afleiders moeten aannemelijk ' +
    '  zijn (bijv. andere namen/cijfers die in de krant voorkomen of vergelijkbaar plausibel zijn), niet absurd.\n' +
    '- Varieer de moeilijkheidsgraad (makkelijk/gemiddeld/moeilijk) en het soort vraag (wie/wat/waar/hoeveel/welk jaar).\n' +
    '- Kies per vraag het best passende id uit deze categorieën:\n' + catLijst + '\n' +
    '- "uitleg" is één korte zin die het antwoord onderbouwt met een extra feit uit het artikel — leuk om te lezen ' +
    '  nadat je hebt geantwoord.\n' +
    '- "bron" is de titel (of een korte omschrijving) van het artikel.\n' +
    '- Negeer advertenties, kolofon, tv-gids, weerbericht, puzzels en pure opmaak/ruis uit de tekst.\n' +
    '- Schrijf in het Nederlands.';

  try {
    const client = new Anthropic({ apiKey });
    const model = process.env.TRIVIANT_MODEL || process.env.KAARTEN_MODEL || 'claude-opus-4-8';

    const message = await client.messages.create({
      model,
      max_tokens: 8000,
      output_config: { effort: 'low', format: { type: 'json_schema', schema } },
      system: systemPrompt,
      messages: [{
        role: 'user',
        content:
          `Hieronder staat de (ruwe) tekst van een NRC-editie. Maak er ${aantal} Triviant-vragen van.\n\n` +
          '=== KRANTTEKST ===\n' + tekst,
      }],
    });

    const txt = (message.content.find(b => b.type === 'text') || {}).text || '{}';
    let data;
    try { data = JSON.parse(txt); } catch { data = { vragen: [] }; }

    const vragen = (Array.isArray(data.vragen) ? data.vragen : [])
      .filter(v => v && v.vraag && Array.isArray(v.opties) && v.opties.length === 4
        && Number.isInteger(v.antwoordIndex) && v.antwoordIndex >= 0 && v.antwoordIndex <= 3)
      .map(v => ({
        vraag: String(v.vraag).trim(),
        opties: v.opties.map(o => String(o).trim()),
        antwoordIndex: v.antwoordIndex,
        categorie: categorieIds.includes(v.categorie) ? v.categorie : categorieIds[0],
        moeilijkheid: ['makkelijk', 'gemiddeld', 'moeilijk'].includes(v.moeilijkheid) ? v.moeilijkheid : 'gemiddeld',
        uitleg: String(v.uitleg || '').trim(),
        bron: String(v.bron || 'NRC').trim(),
      }));

    return res.status(200).json({ vragen, model });
  } catch (error) {
    console.error('triviant error:', error);
    const status = error && error.status === 401 ? 401 : 500;
    const melding = status === 401
      ? 'Claude API-sleutel ongeldig of geen toegang.'
      : 'Vragen genereren mislukt.';
    return res.status(status).json({ error: melding, details: error && error.message });
  }
}

// Leest de JSON-body, of die nu door Vercel is geparset of als stream binnenkomt.
async function leesBody(req) {
  if (req.body) {
    return typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  }
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString('utf8');
  return raw ? JSON.parse(raw) : {};
}

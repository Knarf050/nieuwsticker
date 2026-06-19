// Vercel Serverless Function — genereert flashcards uit de tekst van de dagelijkse
// krant (PDF). De browser haalt de tekst uit de PDF (pdf.js) en stuurt die hierheen;
// deze functie laat Claude er kaartjes van maken en geeft ze als JSON terug.
//
// Benodigde omgevingsvariabele (Vercel → Settings → Environment Variables):
//   ANTHROPIC_API_KEY   je Claude API-sleutel (zie KAARTEN.md)
// Optioneel:
//   KAARTEN_MODEL       model-id (standaard claude-opus-4-8; bijv. claude-haiku-4-5 = goedkoper)
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
    return res.status(503).json({ error: 'ANTHROPIC_API_KEY ontbreekt op de server. Zie KAARTEN.md.' });
  }

  let body;
  try {
    body = await leesBody(req);
  } catch (e) {
    return res.status(400).json({ error: 'Ongeldige aanvraag', details: e.message });
  }

  const tekst = String(body.tekst || '').slice(0, MAX_TEKST).trim();
  const aantal = Math.min(Math.max(parseInt(body.aantal, 10) || 8, 1), 20);
  const themas = Array.isArray(body.themas) && body.themas.length
    ? body.themas.filter(t => t && t.id && t.naam)
    : [{ id: 'overig', naam: 'Overig' }];
  const themaIds = themas.map(t => t.id);

  if (tekst.length < 200) {
    return res.status(400).json({ error: 'Te weinig leesbare tekst uit de PDF gehaald.' });
  }

  const schema = {
    type: 'object',
    additionalProperties: false,
    properties: {
      kaarten: {
        type: 'array',
        items: {
          type: 'object',
          additionalProperties: false,
          properties: {
            vraag: { type: 'string', description: 'Korte, concrete vraag (voorkant)' },
            antwoord: { type: 'string', description: 'Bondig antwoord in eigen woorden (achterkant)' },
            thema: { type: 'string', enum: themaIds, description: 'Een van de toegestane thema-ids' },
            bron: { type: 'string', description: 'Korte bronverwijzing, bijv. "NRC" + onderwerp' },
          },
          required: ['vraag', 'antwoord', 'thema', 'bron'],
        },
      },
    },
    required: ['kaarten'],
  };

  const themaLijst = themas.map(t => `- ${t.id}: ${t.naam}`).join('\n');
  const systemPrompt =
    'Je helpt een lezer van NRC om het belangrijkste uit de krant op de lange termijn te onthouden. ' +
    'Je maakt flashcards (vraag/antwoord) op basis van de aangeleverde kranttekst. Regels:\n' +
    `- Maak precies ${aantal} kaarten, gespreid over de belangrijkste onderwerpen in de krant (nieuws, politiek, economie, buitenland, opinie, wetenschap).\n` +
    '- Eén feit of kernidee per kaart. Kies wat over een maand nog de moeite waard is om te weten.\n' +
    '- Schrijf het antwoord in je eigen woorden en bondig (max ~2 zinnen). Geen letterlijke citaten.\n' +
    '- De vraag is concreet en toetsbaar (wie/wat/waarom/hoeveel), niet "Wat stond er over X?".\n' +
    '- Kies per kaart het best passende thema uit deze lijst (gebruik exact het id):\n' + themaLijst + '\n' +
    '- Negeer advertenties, kolofon, tv-gids, weerbericht en pure opmaak/ruis uit de PDF-tekst.\n' +
    '- Schrijf in het Nederlands.';

  try {
    const client = new Anthropic({ apiKey });
    const model = process.env.KAARTEN_MODEL || 'claude-opus-4-8';

    const message = await client.messages.create({
      model,
      max_tokens: 8000,
      // effort 'low' houdt het snel en goedkoop; structured outputs garandeert geldige JSON.
      output_config: { effort: 'low', format: { type: 'json_schema', schema } },
      system: systemPrompt,
      messages: [{
        role: 'user',
        content:
          `Hieronder staat de (ruwe) tekst van de NRC-editie van vandaag. Maak er ${aantal} flashcards van.\n\n` +
          '=== KRANTTEKST ===\n' + tekst,
      }],
    });

    const txt = (message.content.find(b => b.type === 'text') || {}).text || '{}';
    let data;
    try { data = JSON.parse(txt); } catch { data = { kaarten: [] }; }

    const kaarten = (Array.isArray(data.kaarten) ? data.kaarten : [])
      .filter(k => k && k.vraag && k.antwoord)
      .map(k => ({
        vraag: String(k.vraag).trim(),
        antwoord: String(k.antwoord).trim(),
        thema: themaIds.includes(k.thema) ? k.thema : (themaIds[0] || 'overig'),
        bron: String(k.bron || 'NRC').trim(),
      }));

    return res.status(200).json({ kaarten, model });
  } catch (error) {
    console.error('kaarten error:', error);
    const status = error && error.status === 401 ? 401 : 500;
    const melding = status === 401
      ? 'Claude API-sleutel ongeldig of geen toegang.'
      : 'Kaarten genereren mislukt.';
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

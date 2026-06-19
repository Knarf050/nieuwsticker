// Vercel Serverless Function — genereert flashcards uit de tekst van de dagelijkse
// krant (PDF). De browser haalt de tekst uit de PDF (pdf.js) en stuurt die hierheen;
// deze functie laat Google Gemini er kaartjes van maken en geeft ze als JSON terug.
//
// Waarom Gemini: Google AI Studio heeft een GRATIS tier voor de flash-modellen,
// dus dit onderdeel kost (binnen de gratis limieten) niets.
//
// Benodigde omgevingsvariabele (Vercel → Settings → Environment Variables):
//   GEMINI_API_KEY   je gratis sleutel van https://aistudio.google.com/apikey
// Optioneel:
//   GEMINI_MODEL     model-id (standaard gemini-2.0-flash; bijv. gemini-2.5-flash)

const MAX_TEKST = 240000; // tekens; ruim genoeg voor een hele krant, binnen de body-limiet

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Gebruik POST' });
  }
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(503).json({ error: 'GEMINI_API_KEY ontbreekt op de server. Zie KAARTEN.md.' });
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

  // Gemini-schema (OpenAPI-subset, types in HOOFDLETTERS) — garandeert geldige JSON.
  const schema = {
    type: 'OBJECT',
    properties: {
      kaarten: {
        type: 'ARRAY',
        items: {
          type: 'OBJECT',
          properties: {
            vraag: { type: 'STRING' },
            antwoord: { type: 'STRING' },
            thema: { type: 'STRING', enum: themaIds },
            bron: { type: 'STRING' },
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

  const userPrompt =
    `Hieronder staat de (ruwe) tekst van de NRC-editie van vandaag. Maak er ${aantal} flashcards van.\n\n` +
    '=== KRANTTEKST ===\n' + tekst;

  try {
    const model = process.env.GEMINI_MODEL || 'gemini-2.0-flash';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`;

    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: systemPrompt }] },
        contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
        generationConfig: {
          responseMimeType: 'application/json',
          responseSchema: schema,
          temperature: 0.4,
          maxOutputTokens: 8192,
        },
      }),
    });

    const data = await r.json().catch(() => ({}));
    if (!r.ok) {
      const melding = (data && data.error && data.error.message) || ('Gemini HTTP ' + r.status);
      const status = r.status === 400 || r.status === 403 ? 401 : 502;
      return res.status(status).json({ error: 'Kaarten genereren mislukt.', details: melding });
    }

    // Met responseMimeType application/json is de tekst zuivere JSON.
    const cand = (data.candidates && data.candidates[0]) || {};
    const parts = (cand.content && cand.content.parts) || [];
    const txt = parts.map(p => p.text || '').join('') || '{}';
    let parsed;
    try { parsed = JSON.parse(txt); } catch { parsed = { kaarten: [] }; }

    const kaarten = (Array.isArray(parsed.kaarten) ? parsed.kaarten : [])
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
    return res.status(500).json({ error: 'Kaarten genereren mislukt.', details: error && error.message });
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

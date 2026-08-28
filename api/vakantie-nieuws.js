// Vercel Serverless Function — nieuws per vakantieplek.
// Aanroep: /api/vakantie-nieuws?plekken=Lille,Texel,Kreta
// Geeft { "Lille": [...artikelen], "Texel": [...] } terug.
import { fetchNewsForPlekken } from '../lib/vakantie.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Content-Type', 'application/json');
  // Edge-cache: 15 min vers, daarna max 30 min verouderd tonen terwijl ververst wordt.
  // Vakantieplekken veranderen niet elke minuut, dus dit spaart onnodige verzoeken.
  res.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate=1800');

  try {
    const raw = (req.query && req.query.plekken) || '';
    const plekken = String(raw).split(',').map(s => s.trim()).filter(Boolean);
    if (plekken.length === 0) {
      res.status(200).json({});
      return;
    }
    const byPlek = await fetchNewsForPlekken(plekken);
    res.status(200).json(byPlek);
  } catch (error) {
    console.error('Vakantienieuws-fout:', error);
    res.status(500).json({ error: 'Failed to fetch vacation news', details: error.message });
  }
}

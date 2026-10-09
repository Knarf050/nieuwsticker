// Vercel Serverless Function — bewaart de voortgang van de oefen-app Sterre.
//
// Waarom dit bestaat: iOS wist opslag die JavaScript zelf zet (localStorage,
// IndexedDB, cache) als een site alleen in een browsertabblad wordt gebruikt.
// Een cookie die de SERVER zet valt niet onder die regel en blijft wel staan.
//
// Er wordt niets op de server opgeslagen: de voortgang zit in de cookie zelf,
// die alleen naar dit ene pad wordt meegestuurd. Geen account, geen database.
const NAAM = 'sterre';
const PAD = '/api/sterre';
const MAX_AGE = 400 * 24 * 60 * 60; // 400 dagen is het maximum dat browsers accepteren
const MAX_BYTES = 3800;             // cookies mogen in totaal ~4096 bytes zijn

function leesCookie(req, naam) {
  const ruw = req.headers.cookie || '';
  for (const deel of ruw.split(';')) {
    const i = deel.indexOf('=');
    if (i < 0) continue;
    if (deel.slice(0, i).trim() === naam) return deel.slice(i + 1).trim();
  }
  return '';
}

function zetCookie(res, waarde) {
  res.setHeader('Set-Cookie',
    `${NAAM}=${waarde}; Max-Age=${MAX_AGE}; Path=${PAD}; Secure; SameSite=Lax`);
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method === 'GET') {
    return res.status(200).json({ data: leesCookie(req, NAAM) || null });
  }

  if (req.method === 'POST') {
    let body = req.body;
    if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = null; } }
    let data = body && typeof body.data === 'string' ? body.data.trim() : '';

    if (!data) {
      res.setHeader('Set-Cookie', `${NAAM}=; Max-Age=0; Path=${PAD}; Secure; SameSite=Lax`);
      return res.status(200).json({ ok: true, gewist: true });
    }
    if (!/^[A-Za-z0-9+/=_-]+$/.test(data)) {
      return res.status(400).json({ error: 'Onverwachte inhoud' });
    }
    if (data.length > MAX_BYTES) {
      // Te groot voor een cookie: de afzender hoort dan een kortere versie te sturen.
      return res.status(413).json({ error: 'Te groot', max: MAX_BYTES });
    }
    zetCookie(res, data);
    return res.status(200).json({ ok: true, bytes: data.length });
  }

  res.setHeader('Allow', 'GET, POST');
  return res.status(405).json({ error: 'Methode niet toegestaan' });
}

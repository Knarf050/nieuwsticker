// Vercel Serverless Function — stuurt mobiele meldingen voor nieuw 'breaking'/
// belangrijk nieuws. Bedoeld om periodiek aangeroepen te worden (Vercel Cron of
// een externe cron-dienst). Ondersteunt ntfy en Pushover.
//
// Benodigde omgevingsvariabelen (Vercel → Settings → Environment Variables):
//   Kanaal ntfy:     NTFY_TOPIC   (bijv. een lange, geheime topicnaam)
//                    NTFY_SERVER  (optioneel, standaard https://ntfy.sh)
//                    NTFY_TOKEN   (optioneel, bij beveiligde server)
//   Kanaal Pushover: PUSHOVER_TOKEN + PUSHOVER_USER
//   Beveiliging:     CRON_SECRET  (Vercel stuurt dit als Bearer-header bij cron)
//   Optioneel:       NOTIFY_KEYWORDS         (extra trefwoorden, kommagescheiden)
//                    NOTIFY_LOOKBACK_MINUTES (terugkijkvenster, standaard 16)
import { fetchArticles, isBreaking, truncate } from '../lib/feeds.js';

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  // Beveiliging: als CRON_SECRET is gezet, eis een geldige Bearer-header of ?key=.
  const secret = process.env.CRON_SECRET;
  if (secret) {
    const auth = req.headers['authorization'] || '';
    const key = (req.query && req.query.key) || '';
    if (auth !== `Bearer ${secret}` && key !== secret) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  }

  const lookbackMin = parseInt(process.env.NOTIFY_LOOKBACK_MINUTES || '16', 10);
  const cutoff = Date.now() - lookbackMin * 60 * 1000;
  const extra = (process.env.NOTIFY_KEYWORDS || '')
    .split(',').map(s => s.trim()).filter(Boolean);

  // Testmodus: stuur één testmelding om de ntfy/Pushover-koppeling te verifiëren.
  if (req.query && (req.query.test === '1' || req.query.test === 'true')) {
    try {
      await sendNotification({
        source: 'Nieuwsticker',
        title: 'Testmelding — meldingen werken',
        summary: 'Als je dit op je telefoon ziet, is de koppeling met ntfy/Pushover in orde.',
        link: 'https://nieuwsticker.vercel.app/',
      });
      return res.status(200).json({ test: true, sent: 1 });
    } catch (e) {
      return res.status(500).json({ test: true, error: e.message });
    }
  }

  let articles;
  try {
    articles = await fetchArticles();
  } catch (e) {
    return res.status(500).json({ error: 'fetch failed', details: e.message });
  }

  // Nieuw (binnen terugkijkvenster) én belangrijk.
  const toNotify = articles.filter(a => {
    const t = new Date(a.pubDate).getTime();
    if (!isNaN(t) && t < cutoff) return false;
    return isBreaking(a, extra);
  });

  const results = [];
  for (const a of toNotify) {
    try {
      await sendNotification(a);
      results.push({ ok: true, title: a.title });
    } catch (e) {
      results.push({ ok: false, title: a.title, error: e.message });
    }
  }

  res.status(200).json({
    checked: articles.length,
    lookbackMin,
    matched: toNotify.length,
    sent: results.filter(r => r.ok).length,
    results,
  });
}

async function sendNotification(a) {
  const headline = a.title;
  const summary = a.summary || a.title;
  const url = a.link && a.link !== '#' ? a.link : undefined;

  // Pushover heeft voorrang als het geconfigureerd is.
  if (process.env.PUSHOVER_TOKEN && process.env.PUSHOVER_USER) {
    const body = new URLSearchParams({
      token: process.env.PUSHOVER_TOKEN,
      user: process.env.PUSHOVER_USER,
      title: truncate(`${a.source} · ${headline}`, 250),
      message: truncate(summary, 1000),
      priority: '1',
    });
    if (url) { body.set('url', url); body.set('url_title', 'Lees verder'); }
    const r = await fetch('https://api.pushover.net/1/messages.json', { method: 'POST', body });
    if (!r.ok) throw new Error('Pushover HTTP ' + r.status);
    return;
  }

  if (process.env.NTFY_TOPIC) {
    const server = (process.env.NTFY_SERVER || 'https://ntfy.sh').replace(/\/$/, '');
    // Let op: HTTP-headers zijn niet UTF-8-veilig, dus de (mogelijk accent-)kop
    // gaat in de body. De ASCII-bronnaam gebruiken we als Title-header.
    const headers = {
      'Title': a.source,
      'Tags': 'rotating_light',
      'Priority': 'high',
      'Content-Type': 'text/plain; charset=utf-8',
    };
    if (url) headers['Click'] = url;
    if (process.env.NTFY_TOKEN) headers['Authorization'] = 'Bearer ' + process.env.NTFY_TOKEN;
    const body = truncate(headline + (summary && summary !== headline ? '\n\n' + summary : ''), 1000);
    const r = await fetch(server + '/' + process.env.NTFY_TOPIC, { method: 'POST', headers, body });
    if (!r.ok) throw new Error('ntfy HTTP ' + r.status);
    return;
  }

  throw new Error('Geen notificatiekanaal geconfigureerd (zet NTFY_TOPIC of PUSHOVER_TOKEN+PUSHOVER_USER)');
}

// Vercel Serverless Function — RSS 2.0-feed van Nederlandse/Haagse denktanks.
// Onderwerpen: geopolitiek, veiligheid, AI-beleid, OVSE, NAVO, EU.
// Endpoint: /api/denktanks-rss
// Optioneel filteren op bron: /api/denktanks-rss?source=HCSS
import { fetchDenktankArticles } from '../lib/denktanks.js';

const SITE = 'https://nieuwsticker.vercel.app';

function xmlEscape(s) {
  return (s == null ? '' : String(s))
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export default async function handler(req, res) {
  try {
    let articles = await fetchDenktankArticles();

    const source = req.query && req.query.source;
    if (source) {
      const want = String(source).toLowerCase();
      articles = articles.filter(a => (a.source || '').toLowerCase() === want);
    }
    articles = articles.slice(0, 60);

    const now = new Date().toUTCString();
    const items = articles.map(a => {
      const d = new Date(a.pubDate);
      const pub = isNaN(d.getTime()) ? now : d.toUTCString();
      const link = xmlEscape(a.link);
      const titled = a.source ? a.source + ' · ' + a.title : a.title;
      return [
        '    <item>',
        '      <title>' + xmlEscape(titled) + '</title>',
        '      <link>' + link + '</link>',
        '      <guid isPermaLink="true">' + link + '</guid>',
        '      <pubDate>' + pub + '</pubDate>',
        '      <dc:creator>' + xmlEscape(a.source) + '</dc:creator>',
        '      <category>' + xmlEscape(a.source) + '</category>',
        '      <description>' + xmlEscape(a.summary || a.title) + '</description>',
        '    </item>',
      ].join('\n');
    }).join('\n');

    const feedTitle = source
      ? 'Denktanks Geopolitiek — ' + xmlEscape(source)
      : 'Denktanks Geopolitiek — HCSS · Clingendael · Atlcom · WRR · Rathenau · PAX · Asser · AIV · NIOD · OSCE · Crisis Group · ELN';
    const selfUrl = SITE + '/api/denktanks-rss' + (source ? '?source=' + encodeURIComponent(source) : '');

    const xml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
      '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">\n' +
      '  <channel>\n' +
      '    <title>' + feedTitle + '</title>\n' +
      '    <link>' + SITE + '/</link>\n' +
      '    <atom:link href="' + xmlEscape(selfUrl) + '" rel="self" type="application/rss+xml" />\n' +
      '    <description>Publicaties en analyses van Nederlandse en Haagse denktanks over geopolitiek, veiligheid, AI-beleid, OVSE en NAVO.</description>\n' +
      '    <language>nl</language>\n' +
      '    <lastBuildDate>' + now + '</lastBuildDate>\n' +
      items + '\n' +
      '  </channel>\n' +
      '</rss>\n';

    res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8');
    res.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate=1800');
    res.status(200).send(xml);
  } catch (error) {
    console.error('Denktanks RSS error:', error);
    res.status(500).json({ error: 'Failed to build feed', details: error.message });
  }
}

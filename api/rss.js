// Vercel Serverless Function — levert een RSS 2.0-feed van het samengevoegde,
// ontdubbelde en opgeschoonde nieuws (NOS + NU.nl + NRC).
// Optioneel filteren op bron: /api/rss?source=NOS
import { fetchArticles } from '../lib/feeds.js';

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
    let articles = await fetchArticles();

    const source = req.query && req.query.source;
    if (source) {
      const want = String(source).toLowerCase();
      articles = articles.filter(a => (a.source || '').toLowerCase() === want);
    }
    articles = articles.slice(0, 50);

    const now = new Date().toUTCString();
    const items = articles.map(a => {
      const d = new Date(a.pubDate);
      const pub = isNaN(d.getTime()) ? now : d.toUTCString();
      const link = xmlEscape(a.link);
      return [
        '    <item>',
        '      <title>' + xmlEscape(a.title) + '</title>',
        '      <link>' + link + '</link>',
        '      <guid isPermaLink="true">' + link + '</guid>',
        '      <pubDate>' + pub + '</pubDate>',
        '      <category>' + xmlEscape(a.source) + '</category>',
        '      <description>' + xmlEscape(a.summary || a.title) + '</description>',
        '    </item>',
      ].join('\n');
    }).join('\n');

    const title = source ? 'Nederlandse Nieuwsticker — ' + xmlEscape(source) : 'Nederlandse Nieuwsticker';
    const selfUrl = SITE + '/api/rss' + (source ? '?source=' + encodeURIComponent(source) : '');

    const xml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
      '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n' +
      '  <channel>\n' +
      '    <title>' + title + '</title>\n' +
      '    <link>' + SITE + '/</link>\n' +
      '    <atom:link href="' + xmlEscape(selfUrl) + '" rel="self" type="application/rss+xml" />\n' +
      '    <description>Samengevoegd, ontdubbeld en opgeschoond nieuws van NOS, NU.nl en NRC.</description>\n' +
      '    <language>nl-nl</language>\n' +
      '    <lastBuildDate>' + now + '</lastBuildDate>\n' +
      items + '\n' +
      '  </channel>\n' +
      '</rss>\n';

    res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8');
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    res.status(200).send(xml);
  } catch (error) {
    console.error('RSS error:', error);
    res.status(500).json({ error: 'Failed to build feed', details: error.message });
  }
}

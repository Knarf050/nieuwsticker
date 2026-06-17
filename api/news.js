// Vercel Serverless Function — levert het nieuws voor de site.
import { fetchArticles } from '../lib/feeds.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Content-Type', 'application/json');
  // Edge-cache: 5 min vers, daarna max 10 min verouderd tonen terwijl ververst wordt.
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');

  try {
    let articles = await fetchArticles();

    // Versheidsfilter: alleen berichten van de laatste 24 uur. Veiligheidsklep:
    // als dat te weinig oplevert (trage/oude feeds), tonen we toch de hele lijst.
    const cutoff = Date.now() - 24 * 60 * 60 * 1000;
    const fresh = articles.filter(a => {
      const t = new Date(a.pubDate).getTime();
      return isNaN(t) || t >= cutoff;
    });
    if (fresh.length >= 8) articles = fresh;

    // rawTitle is alleen voor interne breaking-detectie; niet meesturen naar de site.
    const out = articles.map(({ rawTitle, ...rest }) => rest);
    res.status(200).json(out);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to fetch news', details: error.message });
  }
}

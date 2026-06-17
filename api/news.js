// Vercel Serverless Function - geen require() nodig
export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Content-Type', 'application/json');
  
  const SOURCES = [
    { name: 'NOS', url: 'https://feeds.nos.nl/nosnieuwsalgemeen', color: '#FF6B00' },
    // NU.nl: alleen hard nieuws (categoriefeeds), dus zonder sport en entertainment
    { name: 'NU.nl', url: 'https://www.nu.nl/rss/Binnenland', color: '#00A0DC' },
    { name: 'NU.nl', url: 'https://www.nu.nl/rss/Buitenland', color: '#00A0DC' },
    { name: 'NU.nl', url: 'https://www.nu.nl/rss/Economie', color: '#00A0DC' },
    { name: 'NU.nl', url: 'https://www.nu.nl/rss/Politiek', color: '#00A0DC' },
    { name: 'NU.nl', url: 'https://www.nu.nl/rss/Tech', color: '#00A0DC' },
    { name: 'NRC', url: 'https://www.nrc.nl/rss/', color: '#000000' },
  ];

  try {
    const allArticles = [];

    // Fetch RSS feeds zonder externe library
    const feedPromises = SOURCES.map(async (source) => {
      try {
        // Time-out per feed: één trage bron mag de hele response niet laten hangen
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 6000);
        let text;
        try {
          const response = await fetch(source.url, {
            signal: controller.signal,
            headers: { 'User-Agent': 'NieuwstickerBot/1.0 (+https://nieuwsticker.vercel.app)' },
          });
          text = await response.text();
        } finally {
          clearTimeout(timer);
        }
        
        // Parse XML manually
        const items = text.match(/<item>[\s\S]*?<\/item>/g) || [];
        
        return items.slice(0, 10).map(item => {
          const title = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/) || 
                       item.match(/<title>(.*?)<\/title>/);
          const link = item.match(/<link>(.*?)<\/link>/);
          const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/) ||
                         item.match(/<dc:date>(.*?)<\/dc:date>/);
          
          return {
            title: title ? title[1] : 'Geen titel',
            link: link ? link[1] : '#',
            pubDate: pubDate ? pubDate[1] : new Date().toISOString(),
            source: source.name,
            color: source.color
          };
        });
      } catch (error) {
        console.error(`Error fetching ${source.name}:`, error);
        return [];
      }
    });

    const results = await Promise.all(feedPromises);
    results.forEach(items => allArticles.push(...items));

    // Sort by date
    allArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

    res.status(200).json(allArticles);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to fetch news', details: error.message });
  }
}

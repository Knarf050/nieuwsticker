const Parser = require('rss-parser');
const parser = new Parser();

const SOURCES = [
  { name: 'NOS', url: 'https://feeds.nos.nl/nosnieuwsalgemeen', color: '#FF6B00' },
  { name: 'AD', url: 'https://www.ad.nl/rss.xml', color: '#E30613' },
  { name: 'Telegraaf', url: 'https://www.telegraaf.nl/rss', color: '#003DA5' },
  { name: 'NU.nl', url: 'https://www.nu.nl/rss/Algemeen', color: '#00A0DC' },
  { name: 'NRC', url: 'https://www.nrc.nl/rss/', color: '#000000' },
  { name: 'RTL Nieuws', url: 'https://www.rtlnieuws.nl/rss.xml', color: '#FF6600' }
];

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
  try {
    const allArticles = [];
    
    const feedPromises = SOURCES.map(async (source) => {
      try {
        const feed = await parser.parseURL(source.url);
        return feed.items.slice(0, 10).map(item => ({
          title: item.title,
          link: item.link,
          pubDate: item.pubDate || item.isoDate || new Date().toISOString(),
          source: source.name,
          color: source.color
        }));
      } catch (error) {
        console.error(`Error fetching ${source.name}:`, error);
        return [];
      }
    });
    
    const results = await Promise.all(feedPromises);
    results.forEach(items => allArticles.push(...items));
    
    allArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
    
    res.status(200).json(allArticles);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
};

// Vercel Serverless Function - geen require() nodig

// Strip HTML-tags, decodeer veelvoorkomende entities en normaliseer witruimte.
function cleanText(s) {
  if (!s) return '';
  return s
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&#x27;|&apos;/g, "'")
    .replace(/&hellip;/g, '…')
    .replace(/\s+/g, ' ')
    .trim();
}

// Kort tekst af op een woordgrens met een beletselteken.
function truncate(s, max) {
  if (!s || s.length <= max) return s;
  const cut = s.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trim() + '…';
}

// Maak een kop feitelijker: haal sensatie-/formaatlabels, emoji en overdreven
// leestekens weg. Bewust conservatief — bij twijfel blijft de originele kop staan.
// Eerlijke labels als 'Opinie' en 'Analyse' worden met rust gelaten.
function factualHeadline(s) {
  if (!s) return s;
  let t = s;

  // Format-/sensatielabels vooraan (evt. meerdere): "LIVE | ", "VIDEO: ", "KIJK – "
  const label = /^\s*(?:live(?:blog)?|video|kijk|bekijk|beeld|foto(?:'s)?|podcast|luister|premium|breaking)\b\s*[:|–—-]*\s*/i;
  while (label.test(t)) t = t.replace(label, '');

  // Emoji en pictogrammen weg (laat normale leestekens, € en dashes met rust)
  t = t.replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2190}-\u{21FF}\u{2B00}-\u{2BFF}\u{FE0F}]/gu, '');

  // Overdreven leestekens normaliseren
  t = t.replace(/!+/g, '');             // sensatie-uitroeptekens weg
  t = t.replace(/\?{2,}/g, '?');        // "??" -> "?"
  t = t.replace(/\s*[.…]{2,}\s*$/g, ''); // suspense-puntjes aan het eind weg

  // Bron-suffix aan het eind: " | NU.nl", " - NOS", " | NRC"
  t = t.replace(/\s*[|–—-]\s*(?:nu\.nl|nos|nrc)\s*$/i, '');

  // Restjes opschonen
  t = t.replace(/\s{2,}/g, ' ').replace(/^[\s:|–—-]+/, '').trim();

  return t.length >= 3 ? t : s; // te agressief resultaat? origineel terug
}

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
          const title = item.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/) ||
                       item.match(/<title>([\s\S]*?)<\/title>/);
          const link = item.match(/<link>(.*?)<\/link>/);
          const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/) ||
                         item.match(/<dc:date>(.*?)<\/dc:date>/);
          // Korte samenvatting uit de RSS-description (NOS/NU.nl/NRC leveren die mee)
          const desc = item.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/) ||
                       item.match(/<description>([\s\S]*?)<\/description>/);

          return {
            title: title ? factualHeadline(cleanText(title[1])) : 'Geen titel',
            link: link ? link[1].trim() : '#',
            pubDate: pubDate ? pubDate[1] : new Date().toISOString(),
            summary: desc ? truncate(cleanText(desc[1]), 280) : '',
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

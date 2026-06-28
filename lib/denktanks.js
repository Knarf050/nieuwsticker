// RSS-bronnen van Nederlandse/Haagse denktanks rondom geopolitiek, veiligheid,
// AI-beleid en multilaterale vraagstukken (OVSE, NAVO, EU).
import { cleanText, truncate, factualHeadline, normTitle } from './feeds.js';

export const DENKTANK_SOURCES = [
  // HCSS — The Hague Centre for Strategic Studies
  { name: 'HCSS', url: 'https://hcss.nl/feed/', color: '#003082' },

  // Clingendael — Nederlands Instituut voor Internationale Betrekkingen
  { name: 'Clingendael', url: 'https://www.clingendael.org/rss', color: '#C8002D' },

  // Atlantische Commissie — Nederlandse Atlantische Vereniging
  { name: 'Atlcom', url: 'https://www.atlcom.nl/feed/', color: '#0072CE' },

  // WRR — Wetenschappelijke Raad voor het Regeringsbeleid
  { name: 'WRR', url: 'https://www.wrr.nl/rss/publications', color: '#154273' },

  // Rathenau Instituut — technologie & samenleving, AI-beleid
  { name: 'Rathenau', url: 'https://www.rathenau.nl/nl/rss', color: '#00A499' },

  // PAX — Nederlandse vredesorganisatie, veiligheid & conflictpreventie
  { name: 'PAX', url: 'https://paxforpeace.nl/feed/', color: '#E8461E' },

  // T.M.C. Asser Instituut — internationaal recht, Den Haag
  { name: 'Asser', url: 'https://www.asser.nl/rss', color: '#6D2077' },

  // AIV — Adviesraad Internationale Vraagstukken
  { name: 'AIV', url: 'https://www.aiv-advies.nl/?feed=rss2', color: '#154273' },

  // NIOD — Instituut voor Oorlogs-, Holocaust- en Genocidestudies
  { name: 'NIOD', url: 'https://www.niod.nl/rss', color: '#333333' },

  // OVSE/OSCE — officiële publicaties en verklaringen
  { name: 'OSCE', url: 'https://www.osce.org/feeds/all', color: '#009EE0' },

  // International Crisis Group — conflictanalyse, NL relevant
  { name: 'Crisis Group', url: 'https://www.crisisgroup.org/rss', color: '#E30613' },

  // European Leadership Network — nucleaire veiligheid, NAVO
  { name: 'ELN', url: 'https://www.europeanleadershipnetwork.org/feed/', color: '#003399' },

  // RAND Europe — beleidsonderzoek veiligheid, defensie, AI (Cambridge/Brussel)
  { name: 'RAND Europe', url: 'https://www.rand.org/randeurope/research.xml', color: '#003DA5' },

  // TNO — toegepast onderzoek defensie, veiligheid en AI
  { name: 'TNO', url: 'https://www.tno.nl/nl/rss/', color: '#00A0E3' },
];

// Jaccard-overlap voor fuzzy dedup binnen de denktank-feed.
function jaccard(a, b) {
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  const union = a.size + b.size - inter;
  return union === 0 ? 0 : inter / union;
}

export function dedupeDenktanks(list) {
  const seen = new Set();
  const out = [];
  const tokenSets = [];
  for (const a of list) {
    const key = normTitle(a.title);
    const linkKey = (a.link || '').trim();
    if (!key) { out.push(a); tokenSets.push(new Set()); continue; }
    if (seen.has(key) || (linkKey && seen.has(linkKey))) continue;
    const tokens = new Set(key.split(' ').filter(w => w.length > 2));
    if (tokens.size >= 5) {
      let near = false;
      for (const ts of tokenSets) {
        if (ts.size >= 5 && jaccard(tokens, ts) >= 0.8) { near = true; break; }
      }
      if (near) continue;
    }
    seen.add(key);
    if (linkKey) seen.add(linkKey);
    out.push(a);
    tokenSets.push(tokens);
  }
  return out;
}

export async function fetchDenktankArticles() {
  const feedPromises = DENKTANK_SOURCES.map(async (source) => {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 8000);
      let text;
      try {
        const response = await fetch(source.url, {
          signal: controller.signal,
          headers: { 'User-Agent': 'NieuwstickerBot/1.0 (+https://nieuwsticker.vercel.app)' },
        });
        if (!response.ok) return [];
        text = await response.text();
      } finally {
        clearTimeout(timer);
      }

      // Ondersteun zowel RSS (<item>) als Atom (<entry>).
      const rssItems = text.match(/<item>[\s\S]*?<\/item>/g) || [];
      const atomItems = text.match(/<entry>[\s\S]*?<\/entry>/g) || [];
      const items = rssItems.length ? rssItems : atomItems;
      const isAtom = rssItems.length === 0 && atomItems.length > 0;

      return items.slice(0, 15).map(item => {
        let title, link, pubDate, desc;

        if (isAtom) {
          title = item.match(/<title[^>]*><!\[CDATA\[([\s\S]*?)\]\]><\/title>/) ||
                  item.match(/<title[^>]*>([\s\S]*?)<\/title>/);
          const linkTag = item.match(/<link[^>]+href=["']([^"']+)["'][^>]*\/?>/);
          link = linkTag ? [null, linkTag[1]] : null;
          pubDate = item.match(/<updated>(.*?)<\/updated>/) ||
                    item.match(/<published>(.*?)<\/published>/);
          desc = item.match(/<summary[^>]*><!\[CDATA\[([\s\S]*?)\]\]><\/summary>/) ||
                 item.match(/<summary[^>]*>([\s\S]*?)<\/summary>/) ||
                 item.match(/<content[^>]*>([\s\S]*?)<\/content>/);
        } else {
          title = item.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/) ||
                  item.match(/<title>([\s\S]*?)<\/title>/);
          link = item.match(/<link>(.*?)<\/link>/) ||
                 item.match(/<link[^>]+href=["']([^"']+)["'][^>]*\/?>/);
          pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/) ||
                    item.match(/<dc:date>(.*?)<\/dc:date>/);
          desc = item.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/) ||
                 item.match(/<description>([\s\S]*?)<\/description>/);
        }

        const rawTitle = title ? cleanText(title[1]) : 'Geen titel';
        return {
          title: factualHeadline(rawTitle),
          rawTitle,
          link: link ? link[1].trim() : '#',
          pubDate: pubDate ? pubDate[1] : new Date().toISOString(),
          summary: desc ? truncate(cleanText(desc[1]), 300) : '',
          source: source.name,
          color: source.color,
        };
      });
    } catch (error) {
      console.error(`Error fetching ${source.name} (${source.url}):`, error.message);
      return [];
    }
  });

  const results = await Promise.all(feedPromises);
  const all = [];
  results.forEach(items => all.push(...items));
  all.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
  return dedupeDenktanks(all);
}

// Gedeelde logica voor het ophalen en opschonen van RSS-nieuws.
// Wordt gebruikt door zowel api/news.js (de site) als api/notify.js (meldingen).

export const SOURCES = [
  // NOS: hard nieuws via categoriefeeds (sport en cultuur/media zitten apart en blijven eruit)
  { name: 'NOS', url: 'https://feeds.nos.nl/nosnieuwsbinnenland', color: '#FF6B00' },
  { name: 'NOS', url: 'https://feeds.nos.nl/nosnieuwsbuitenland', color: '#FF6B00' },
  { name: 'NOS', url: 'https://feeds.nos.nl/nosnieuwspolitiek', color: '#FF6B00' },
  { name: 'NOS', url: 'https://feeds.nos.nl/nosnieuwseconomie', color: '#FF6B00' },
  { name: 'NOS', url: 'https://feeds.nos.nl/nosnieuwstech', color: '#FF6B00' },
  // NU.nl: alleen hard nieuws (categoriefeeds), dus zonder sport en entertainment
  { name: 'NU.nl', url: 'https://www.nu.nl/rss/Binnenland', color: '#00A0DC' },
  { name: 'NU.nl', url: 'https://www.nu.nl/rss/Buitenland', color: '#00A0DC' },
  { name: 'NU.nl', url: 'https://www.nu.nl/rss/Economie', color: '#00A0DC' },
  { name: 'NU.nl', url: 'https://www.nu.nl/rss/Politiek', color: '#00A0DC' },
  { name: 'NU.nl', url: 'https://www.nu.nl/rss/Tech', color: '#00A0DC' },
  { name: 'NRC', url: 'https://www.nrc.nl/rss/', color: '#000000' },
];

// Onderwerpen die niet in de 'serieuze' selectie horen (sport, entertainment,
// lifestyle). Vangt vooral berichten op uit algemene feeds zoals die van NRC.
const EXCLUDE_URL = /\/(sport|voetbal|wielrennen|schaatsen|tennis|formule-?1|darts|golf|hockey|wielersport|cultuur|media|muziek|film|films|boeken|kunst|entertainment|achterklap|lifestyle|koken|recept|reizen|wonen|relatie|dieren|royalty|koningshuis|opmerkelijk|puzzel|spelletjes|denksport|opinie|column|columns|commentaar|recensie|nieuwsbrief|podcast)\b/i;
const EXCLUDE_TITLE = /\b(doelpunt|topscorer|eredivisie|champions league|europa league|conference league|bondscoach|rode kaart|gele kaart|transfervrij|landstitel|wereldtitel|pole position|grand prix|lezersoproep|lezersvraag)\b/i;
// Categorie-labels (uit de RSS-items zelf) die op opinie/rubriek/amusement wijzen.
const EXCLUDE_CATEGORY = /\b(opinie|column|columns|commentaar|betoog|essay|recensie|cultuur|kunst|media|boeken|film|muziek|theater|sport|lifestyle|reizen|koken|podcast|nieuwsbrief|puzzel|achterklap|royalty|koningshuis|wonen)\b/i;
// Vaste NRC-rubrieken/puzzels (geen nieuws). Exact-match op de genormaliseerde
// titel, zodat een echt nieuwsbericht met zo'n woord niet per ongeluk sneuvelt.
const RUBRIEK_TITLES = new Set([
  'koprol', 'cijferblok', 'woordzoeker', 'cinco', 'precies vier', 'vorto',
  'ranglijsten', 'sudoku', 'kruiswoord', 'kruiswoordpuzzel', 'filippine',
  'denksport', 'spelregels', 'het kruiswoord', 'aan zet',
]);

// Programma-aankondigingen/opsommingen (bijv. "23/6 in Nieuwsuur: ... • ...").
const EXCLUDE_ANNOUNCE = /(\b\d{1,2}\/\d{1,2}\s+in\s+\S)|(\bin\s+(nieuwsuur|het journaal|nos journaal|het oog op morgen|de uitzending)\b)|(\b(vanavond|vandaag|vanmiddag|vanochtend|deze week|komende week|morgen)\s+in\s+)/i;
// NOS-podcasts/programma's herkend aan een vaste titel-prefix ("De Dag: ...").
const PROGRAM_PREFIX = /^(de dag|met het oog op morgen|oog op morgen|nos op 3|langs de lijn|de tafel van|nieuwsuur|nos journaal|het journaal|jeugdjournaal|nos jeugdjournaal)\s*[:.]/i;

// Bepaal of een artikel uit de selectie gefilterd moet worden.
export function isExcluded(a) {
  if (!a) return false;
  const t = a.rawTitle || a.title || '';
  if (EXCLUDE_URL.test(a.link || '')) return true;
  if (EXCLUDE_TITLE.test(t)) return true;
  if (RUBRIEK_TITLES.has(normTitle(a.title))) return true;
  if (a.categories && a.categories.some(c => EXCLUDE_CATEGORY.test(c))) return true;
  if (t.includes('•')) return true;   // opsomming met bullets (programma-line-up)
  if (EXCLUDE_ANNOUNCE.test(t)) return true; // programma-aankondiging
  if (PROGRAM_PREFIX.test(t.trim())) return true; // podcast/programma-aflevering
  return false;
}

// Strip HTML-tags, decodeer veelvoorkomende entities en normaliseer witruimte.
export function cleanText(s) {
  if (!s) return '';
  return s
    .replace(/<!\[CDATA\[/g, '')
    .replace(/\]\]>/g, '')
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
export function truncate(s, max) {
  if (!s || s.length <= max) return s;
  const cut = s.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trim() + '…';
}

// Maak een kop feitelijker: haal sensatie-/formaatlabels, emoji en overdreven
// leestekens weg. Bewust conservatief — bij twijfel blijft de originele kop staan.
export function factualHeadline(s) {
  if (!s) return s;
  let t = s;

  const label = /^\s*(?:live(?:blog)?|video|kijk|bekijk|beeld|foto(?:'s)?|podcast|luister|premium|breaking)\b\s*[:|–—-]*\s*/i;
  while (label.test(t)) t = t.replace(label, '');

  t = t.replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2190}-\u{21FF}\u{2B00}-\u{2BFF}\u{FE0F}]/gu, '');

  t = t.replace(/!+/g, '');
  t = t.replace(/\?{2,}/g, '?');
  t = t.replace(/\s*[.…]{2,}\s*$/g, '');

  t = t.replace(/\s*[|–—-]\s*(?:nu\.nl|nos|nrc)\s*$/i, '');

  t = t.replace(/\s{2,}/g, ' ').replace(/^[\s:|–—-]+/, '').trim();

  return t.length >= 3 ? t : s;
}

// Normaliseer een titel voor dedup: kleine letters, diacrieten en leestekens weg.
export function normTitle(s) {
  return (s || '')
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9 ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Jaccard-overlap tussen twee woordverzamelingen (0–1).
function jaccard(a, b) {
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  const union = a.size + b.size - inter;
  return union === 0 ? 0 : inter / union;
}

// Verwijder dubbele berichten (zelfde verhaal bij meerdere bronnen/feeds).
// Verwacht een op datum gesorteerde lijst, zodat de nieuwste versie behouden blijft.
// Naast exacte titel/link wordt ook op bijna-gelijke titels ontdubbeld (bijv.
// "start zaak tegen Meta" vs "start rechtszaak tegen Meta").
export function dedupe(list) {
  const seen = new Set();
  const out = [];
  const tokenSets = []; // parallel aan out, voor fuzzy vergelijking
  for (const a of list) {
    const key = normTitle(a.title);
    const linkKey = (a.link || '').trim();
    if (!key) { out.push(a); tokenSets.push(new Set()); continue; }
    if (seen.has(key) || (linkKey && seen.has(linkKey))) continue;

    // Fuzzy: titels met genoeg woorden en ≥80% woordoverlap zijn hetzelfde verhaal.
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

// Urgentie-trefwoorden waarmee we 'breaking'/belangrijk nieuws herkennen.
// Bewust een vaste, leesbare lijst; uit te breiden via env NOTIFY_KEYWORDS.
const BREAKING_KEYWORDS = [
  'overleden', 'overlijdt', 'omgekomen', 'dodelijk', 'doden', 'gedood', 'gewonden',
  'aanslag', 'aanval', 'explosie', 'ontploffing', 'schietpartij', 'schietincident',
  'neergeschoten', 'steekpartij', 'gegijzeld', 'gijzeling', 'terreur', 'terrorisme',
  'ramp', 'noodtoestand', 'evacuatie', 'evacueren', 'aardbeving', 'overstroming',
  'crash', 'neergestort', 'vermist', 'code rood', 'amber alert', 'grootschalige',
  'oorlog', 'invasie', 'aftreden', 'afgetreden', 'opgestapt', 'kabinet valt',
  'kabinet gevallen', 'gevallen', 'breaking', 'persconferentie',
];

// Bepaal of een artikel 'breaking'/belangrijk is op basis van trefwoorden.
// Kijkt naar de ruwe (niet-opgeschoonde) titel zodat ook 'LIVE'/'BREAKING' meetelt.
export function isBreaking(article, extraKeywords = []) {
  const hay = ' ' + ((article.rawTitle || article.title || '') + ' ' + (article.summary || '')).toLowerCase() + ' ';
  const words = BREAKING_KEYWORDS.concat(extraKeywords);
  return words.some(w => w && hay.includes(w.toLowerCase()));
}

// Haal alle feeds op, parse ze, en geef een op datum gesorteerde, ontdubbelde
// lijst terug. Elk artikel bevat ook rawTitle (voor breaking-detectie).
export async function fetchArticles() {
  const feedPromises = SOURCES.map(async (source) => {
    try {
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

      const items = text.match(/<item>[\s\S]*?<\/item>/g) || [];

      return items.slice(0, 10).map(item => {
        const title = item.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/) ||
                     item.match(/<title>([\s\S]*?)<\/title>/);
        const link = item.match(/<link>(.*?)<\/link>/);
        const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/) ||
                       item.match(/<dc:date>(.*?)<\/dc:date>/);
        const desc = item.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/) ||
                     item.match(/<description>([\s\S]*?)<\/description>/);
        // Categorie-labels uit het item (kan er meerdere zijn) voor sectie-filtering.
        const categories = (item.match(/<category[^>]*>([\s\S]*?)<\/category>/g) || [])
          .map(c => cleanText(c.replace(/<\/?category[^>]*>/g, '')).toLowerCase())
          .filter(Boolean);

        const rawTitle = title ? cleanText(title[1]) : 'Geen titel';
        return {
          title: factualHeadline(rawTitle),
          rawTitle,
          link: link ? link[1].trim() : '#',
          pubDate: pubDate ? pubDate[1] : new Date().toISOString(),
          summary: desc ? truncate(cleanText(desc[1]), 280) : '',
          categories,
          source: source.name,
          color: source.color,
        };
      });
    } catch (error) {
      console.error(`Error fetching ${source.name}:`, error);
      return [];
    }
  });

  const results = await Promise.all(feedPromises);
  const all = [];
  results.forEach(items => all.push(...items));
  const serious = all.filter(a => !isExcluded(a)); // sport/entertainment eruit
  serious.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
  return dedupe(serious);
}

// Gedeelde logica voor het ophalen van nieuws per vakantieplek.
// Gebruikt Google News (RSS, geen API-sleutel nodig) omdat vakantieplekken
// zelden in het landelijke NOS/NU-nieuws voorkomen — deze feed dekt zowel
// lokaal/regionaal als internationaal nieuws per zoekterm.
import { cleanText, truncate } from './feeds.js';

const MAX_PER_PLEK = 6;
// Alleen relatief vers nieuws; oudere achtergrondartikelen zijn minder
// interessant voor "blijf op de hoogte" en overspoelen anders de lijst.
const WINDOW = 'when:30d';
// Hard plafond op het aantal plekken per verzoek, zodat één trage/foute
// zoekopdracht de rest niet blokkeert en de functie binnen de tijdslimiet blijft.
const MAX_PLEKKEN = 12;

// Google News plakt vaak " - Bronnaam" achter de titel; dat halen we eraf
// zodra we de bron al apart hebben (uit het <source>-element of dit suffix).
function parseSource(rawTitle, sourceTag) {
  if (sourceTag) return cleanText(sourceTag);
  const m = rawTitle.match(/ - ([^-]+)$/);
  return m ? m[1].trim() : '';
}

function stripSourceSuffix(title, source) {
  if (!source) return title;
  const suffix = ' - ' + source;
  return title.endsWith(suffix) ? title.slice(0, -suffix.length).trim() : title;
}

// Haal nieuws op voor één plek. Faalt een feed (timeout, netwerkfout), dan
// geven we netjes een lege lijst terug in plaats van de hele opdracht te laten mislukken.
export async function fetchNewsForPlek(plek) {
  const q = encodeURIComponent(`${plek} ${WINDOW}`);
  const url = `https://news.google.com/rss/search?q=${q}&hl=nl&gl=NL&ceid=NL:nl`;

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 7000);
    let text;
    try {
      const response = await fetch(url, {
        signal: controller.signal,
        headers: { 'User-Agent': 'NieuwstickerBot/1.0 (+https://nieuwsticker.vercel.app)' },
      });
      text = await response.text();
    } finally {
      clearTimeout(timer);
    }

    const items = text.match(/<item>[\s\S]*?<\/item>/g) || [];
    const parsed = items.slice(0, MAX_PER_PLEK * 2).map(item => {
      const title = item.match(/<title>([\s\S]*?)<\/title>/);
      const link = item.match(/<link>([\s\S]*?)<\/link>/);
      const pubDate = item.match(/<pubDate>([\s\S]*?)<\/pubDate>/);
      const sourceTag = item.match(/<source[^>]*>([\s\S]*?)<\/source>/);

      const rawTitle = title ? cleanText(title[1]) : '';
      const source = parseSource(rawTitle, sourceTag && sourceTag[1]);

      return {
        plek,
        title: truncate(stripSourceSuffix(rawTitle, source), 140),
        link: link ? cleanText(link[1]) : '',
        pubDate: pubDate ? pubDate[1] : new Date().toISOString(),
        source: source || 'Google News',
      };
    }).filter(a => a.title && a.link);

    parsed.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
    return parsed.slice(0, MAX_PER_PLEK);
  } catch (error) {
    console.error(`Fout bij ophalen nieuws voor "${plek}":`, error);
    return [];
  }
}

// Haal nieuws op voor meerdere plekken tegelijk (parallel). Geeft een object
// { pleknaam: [artikelen] } terug, in dezelfde volgorde als de invoer.
export async function fetchNewsForPlekken(plekken) {
  const unique = [...new Set(plekken.map(p => String(p).trim()).filter(Boolean))].slice(0, MAX_PLEKKEN);
  const results = await Promise.all(unique.map(fetchNewsForPlek));
  const byPlek = {};
  unique.forEach((plek, i) => { byPlek[plek] = results[i]; });
  return byPlek;
}

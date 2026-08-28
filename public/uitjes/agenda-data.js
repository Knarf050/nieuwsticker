/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Vrijdag 28 augustus 2026',
  updatedAt: '28-08-2026, 07:08',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '19:30', title: 'Zuiderpark Live: Danny Vera', loc: 'Zuiderparktheater', tag: 'Muziek', highlight: true },
        { time: 'laatste dag', title: 'Rondleidingen Eerste & Tweede Kamer', loc: 'Politiek Den Haag', tag: 'Familie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '11:00–17:00', title: 'Strand in de stad', loc: 'Museum Rotterdam', tag: 'Familie', highlight: true },
        { time: 'laatste avond', title: 'Avond(t)uren', loc: 'Diergaarde Blijdorp — 19:00–22:30', tag: 'Familie' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'nieuw', title: '"Kemet" (tentoonstelling)', loc: 'Rijksmuseum van Oudheden, Leiden', tag: 'Expo', highlight: true },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};

/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Vrijdag 2 oktober 2026',
  updatedAt: '02-10-2026, 07:15',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '2–11 okt (start vandaag)', title: 'The Hague Cocktail Week', loc: 'Diverse locaties', tag: 'Cultuur', highlight: true },
        { time: '20:00', title: 'Rewire x Korzo #25', loc: 'Korzo Theater', tag: 'Muziek' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '19:00', title: 'Harlem Globetrotters — 100 Year Tour', loc: 'RTM Stage, Ahoy', tag: 'Sport', highlight: true },
        { time: 'vandaag', title: 'Republica — 30 jaar debuutalbum', loc: 'Rotown', tag: 'Muziek' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: '2–3 okt (start vandaag)', title: 'Leidens Ontzet', loc: 'Traditioneel feest in Leiden', tag: 'Festival', highlight: true },
        { time: 't/m 4 okt', title: '"Vol van Vogels"', loc: 'Art Centre Schiedam — 13:00–17:00', tag: 'Expo' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};

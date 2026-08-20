/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Donderdag 20 augustus 2026',
  updatedAt: '20-08-2026, 07:06',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '20:00', title: 'Muziekevenement', loc: 'Grand Hotel Amrâth Kurhaus', tag: 'Muziek', highlight: true },
        { time: 't/m 28 aug', title: 'Courage of a Nation (foto)', loc: 'Atrium Den Haag', tag: 'Expo' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '10:00–15:00', title: 'Workshop — Stichting Lokaal', loc: 'Rotterdam', tag: 'Workshop', highlight: true },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend', title: 'Bowlen in een metrotunnel, lasergamen & minigolf', loc: "The City, 's-Gravenzande", tag: 'Actief', highlight: true },
        { time: 'doorlopend', title: 'GlowGolf — 3D-golf in onderwaterwereld', loc: 'Capelle aan den IJssel', tag: 'Actief' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};

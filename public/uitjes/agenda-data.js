/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Maandag 21 september 2026',
  updatedAt: '21-09-2026, 07:14',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '12:30', title: 'Klassiek concert', loc: 'Nieuwe Kerk', tag: 'Muziek', highlight: true },
        { time: '17:00–18:30', title: 'Cultureel evenement', loc: 'Amare', tag: 'Cultuur' },
        { time: '19:30', title: 'Stand-up comedy', loc: "O'Casey's Irish Pub & Restaurant", tag: 'Comedy' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'vandaag', title: 'Blokarts (zeilwagens)', loc: 'Ouddorp — met Natural High', tag: 'Actief', highlight: true },
        { time: 'doorlopend', title: 'GlowGolf', loc: 'Capelle aan den IJssel — 3D-minigolf', tag: 'Familie' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};

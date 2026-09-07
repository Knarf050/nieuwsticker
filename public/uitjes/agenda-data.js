/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Maandag 7 september 2026',
  updatedAt: '07-09-2026, 07:06',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '11:00–16:00', title: 'Make It Art Worthy', loc: 'Noordwal 18', tag: 'Expo', highlight: true },
        { time: '19:30', title: 'Stand-up comedy', loc: "O'Casey's Irish Pub & Restaurant", tag: 'Comedy' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '6–13 sep', title: 'ALL CAPS 2026', loc: 'Streetart-festival — murals in Afrikaanderwijk en Feijenoord', tag: 'Expo', highlight: true },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend', title: 'Kinderdijk (UNESCO Werelderfgoed)', loc: '19 historische molens', tag: 'Natuur', highlight: true },
        { time: 'doorlopend', title: 'Funmax', loc: 'Capelle aan den IJssel — 3D-onderwaterwereld', tag: 'Familie' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Rotterdam Centrum — evenementen september', url: 'https://www.rotterdamcentrum.nl/en/plan-your-visit/travel-inspiration/fun-event-september-rotterdam' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};

/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Zaterdag 29 augustus 2026',
  updatedAt: '29-08-2026, 07:07',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '19:30', title: 'Zuiderpark Live: Someone Like Her', loc: 'Zuiderparktheater', tag: 'Muziek', highlight: true },
        { time: 'laatste dag', title: 'Familierondleiding Tweede Kamer', loc: 'Voor kinderen 6–12 jaar', tag: 'Familie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '29–30 aug (start vandaag)', title: 'Kaapse Kunstroute & Kunstmarkt 2026', loc: '12:00–17:00', tag: 'Expo', highlight: true },
        { time: '11:00–16:00', title: 'Gezellig Oogstfeest', loc: 'Live muziek, roofvogelshow en oud-Hollandse spellen', tag: 'Familie' },
        { time: '13:00–23:00', title: 'Rotterdam Rave Festival 2026', loc: 'Rotterdam', tag: 'Festival' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'vandaag', title: 'Donckse Kermis', loc: 'Cultuurmarkt en familiedag op Buitenplaats', tag: 'Familie', highlight: true },
        { time: 'vandaag', title: 'Gezellige kunstmarkt', loc: 'Centrum Oud-Beijerland', tag: 'Markt' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};

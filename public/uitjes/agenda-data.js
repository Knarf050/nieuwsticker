/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Zondag 27 september 2026',
  updatedAt: '27-09-2026, 07:14',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'laatste dag', title: 'Scheveningen Beach Resort Festival', loc: '11:00–17:00', tag: 'Festival', highlight: true },
        { time: 'laatste dag', title: 'Cirque Mania', loc: 'Korzo', tag: 'Theater' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'vandaag', title: 'Urban Trail Rotterdam 2026', loc: 'Rotterdam', tag: 'Sport', highlight: true },
        { time: '17:00–20:00', title: 'Surinaamse roti-dinercruise', loc: 'Over de Rotterdamse wateren', tag: 'Eten' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'laatste dag', title: 'Kunstroute Leiden', loc: '165 ateliers en galeries, gratis — 11:00–17:00', tag: 'Expo', highlight: true },
        { time: 'laatste dag', title: 'Evenement historische stadskern', loc: 'Schiedam', tag: 'Cultuur' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};

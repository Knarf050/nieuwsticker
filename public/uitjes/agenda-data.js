/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Zaterdag 26 september 2026',
  updatedAt: '26-09-2026, 07:15',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '26–27 sep (start vandaag)', title: 'Scheveningen Beach Resort Festival', loc: '11:00–17:00', tag: 'Festival', highlight: true },
        { time: '20:30', title: 'Prime Time Saturday Comedy', loc: 'ComedyCity The Hague — met Chris van der Ende en Mino van Nassau', tag: 'Comedy' },
        { time: '12:00', title: 'Grote Markt Festival', loc: 'Grote Markt', tag: 'Festival' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'vandaag', title: 'Burendag', loc: 'Rotterdam', tag: 'Familie', highlight: true },
        { time: 'vanaf 16:00', title: 'Boiler Room Rotterdam 2026', loc: 'Maassilo', tag: 'Muziek' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'laatste dag', title: 'Antiek- en curiosamarkt', loc: 'Delft — 120 kramen', tag: 'Markt', highlight: true },
        { time: 'laatste dag', title: 'Dahliapluktuin', loc: 'Pluk je eigen boeket uit 500 soorten', tag: 'Natuur' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};

/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Woensdag 16 september 2026',
  updatedAt: '16-09-2026, 07:05',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'vandaag', title: 'Vrolijke poppenkastvoorstelling', loc: "Kooman's Poppentheater — over een regendans", tag: 'Familie', highlight: true },
        { time: 'vandaag', title: 'Miljoenenontbijt MKB Den Haag', loc: 'Den Haag', tag: 'Cultuur' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '09:30', title: 'Recharge Earth', loc: 'RACC', tag: 'Expo', highlight: true },
        { time: 'vandaag', title: 'Veiligheidsdag', loc: 'Nesselande', tag: 'Familie' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend', title: 'Kinderdijk (UNESCO Werelderfgoed)', loc: '19 historische molens', tag: 'Natuur', highlight: true },
      ],
    },
  ],
  sources: [
    { label: 'Kidsproof Den Haag — uitagenda', url: 'https://www.kidsproof.nl/denhaag/uitjes/uitagenda/' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};

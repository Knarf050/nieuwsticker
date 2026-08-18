/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Dinsdag 18 augustus 2026',
  updatedAt: '18-08-2026, 07:07',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '10:30–15:30', title: 'Kinderprogramma', loc: 'Laaktheater', tag: 'Familie', highlight: true },
        { time: 't/m 28 aug', title: 'Courage of a Nation (foto)', loc: 'Atrium Den Haag', tag: 'Expo' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '17:30–19:00', title: 'Eten en drinken', loc: 'Fenixplein', tag: 'Eten', highlight: true },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: '11:00–21:00', title: 'Markt', loc: 'Katwijk aan Zee', tag: 'Markt', highlight: true },
        { time: 'doorlopend', title: 'Roofvogel-workshops', loc: 'Valkerij Manege Birds@Work, Berkel en Rodenrijs', tag: 'Actief' },
      ],
    },
  ],
  sources: [
    { label: 'Sociale Kaart Den Haag — evenementen', url: 'https://socialekaartdenhaag.nl/evenementen-agenda/' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};

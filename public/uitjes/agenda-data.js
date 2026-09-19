/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Zaterdag 19 september 2026',
  updatedAt: '19-09-2026, 07:05',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '20:30', title: 'Prime Time Saturday Comedy', loc: 'ComedyCity The Hague', tag: 'Comedy', highlight: true },
        { time: 'vandaag', title: 'Vrolijke voorstelling', loc: "Kooman's Poppentheater", tag: 'Familie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '19:20', title: 'Junior Songfestival 2026 — finale', loc: 'RTM Stage', tag: 'Festival', highlight: true },
        { time: '19–20 sep (start vandaag)', title: 'Old but Gold Festival 2026', loc: 'Maassilo', tag: 'Festival' },
        { time: '17:00–20:00', title: 'Surinaamse roti-dinercruise', loc: 'Over de Rotterdamse wateren', tag: 'Eten' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend', title: 'GPS-tours met Renzy', loc: 'Noordwijk aan Zee — elektrische Twizy langs molens en bollenvelden', tag: 'Actief', highlight: true },
        { time: 'doorlopend', title: 'Royal Delft Museum', loc: 'Delft — Delfts Blauw en streetart', tag: 'Expo' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};

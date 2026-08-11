/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Dinsdag 11 augustus 2026',
  updatedAt: '11-08-2026, 07:08',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '19:30', title: 'Zuiderpark Live: Cory Henry & The Funk Apostles', loc: 'Zuiderparktheater', tag: 'Muziek', highlight: true },
        { time: '10:30–19:00', title: 'Taal aan Zee', loc: 'Bibliotheken Laakkwartier, Segbroek, Escamp & Scheveningen', tag: 'Familie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '11–28 aug (start vandaag)', title: 'Pleinbioscoop Rotterdam', loc: 'Wilhelminapier — openluchtbioscoop', tag: 'Film', highlight: true },
        { time: '17:30–19:00', title: 'Eten en drinken', loc: 'Fenixplein', tag: 'Eten' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'deze zomer', title: 'Noordzee Zomer Festival', loc: 'Strandboulevard Katwijk', tag: 'Festival', highlight: true },
        { time: 'doorlopend', title: 'Bowlen in een metrotunnel & lasergamen', loc: "'s-Gravenzande (Westland)", tag: 'Actief' },
      ],
    },
  ],
  sources: [
    { label: 'De Grote Markt — agenda 11-19 aug', url: 'https://gmdh.nl/agenda/' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};

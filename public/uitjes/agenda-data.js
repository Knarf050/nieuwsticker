/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Maandag 17 augustus 2026',
  updatedAt: '17-08-2026, 07:14',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '10:30–15:30', title: 'Kinderevenement Spoorwijk', loc: 'Bij-1, Circaso & Laaktheater', tag: 'Familie', highlight: true },
        { time: '10:00–16:00', title: 'Fietsevenement', loc: 'Den Haag Fietst!', tag: 'Sport' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 't/m 23 aug', title: 'Openluchtfilmfestival', loc: 'Wilhelminapier — 20:00–23:59', tag: 'Film', highlight: true },
        { time: 't/m 24 aug', title: 'Openluchtbioscoop', loc: "Binnentuin H'ART Museum — 20:00–23:45", tag: 'Film' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend', title: 'Citroën 2CV huren', loc: 'Hellevoetsluis — Zuid-Hollandse eilanden en Zeeland verkennen', tag: 'Actief', highlight: true },
        { time: 't/m 23 aug', title: 'Delfts Blauw x streetart', loc: 'Royal Delft Museum, Delft — 09:30–17:00', tag: 'Expo' },
      ],
    },
  ],
  sources: [
    { label: 'De Grote Markt — agenda 17-22 aug', url: 'https://gmdh.nl/agenda/' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};

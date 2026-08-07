/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Vrijdag 7 augustus 2026',
  updatedAt: '07-08-2026, 07:07',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '7–9 aug', title: 'Zomerspelen 2026', loc: 'Oud-Hollandse spelen voor het hele gezin — 09:00–18:00', tag: 'Familie', highlight: true },
        { time: '10:00–12:00', title: 'Roeiactiviteiten', loc: 'Den Haag', tag: 'Sport' },
        { time: 'doorlopend', title: 'Madurodam', loc: 'Nederland in het klein', tag: 'Familie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '17:00', title: 'Zomeravond-havenrondvaart', loc: 'Verse fish & chips en havenverhalen aan boord', tag: 'Actief', highlight: true },
        { time: '19:00–20:00', title: 'Gratis expo-avond', loc: 'Kunstinstituut Melly', tag: 'Expo' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: '2–15 aug', title: '27ste Internationaal Romeins Festival', loc: 'Archeon, Alphen aan den Rijn — legioenskamp, gladiatorenshows', tag: 'Festival', highlight: true },
        { time: 't/m 23 aug', title: 'Delfts Blauw x streetart', loc: 'Royal Delft Museum, Delft — 09:30–17:00', tag: 'Expo' },
      ],
    },
  ],
  sources: [
    { label: 'Evenementen Den Haag', url: 'https://evenementen.denhaag.nl/events/' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Archeon — evenementen', url: 'https://www.archeon.nl/nl/evenementen.html' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};

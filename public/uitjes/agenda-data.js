/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Dinsdag 4 augustus 2026',
  updatedAt: '04-08-2026, 07:07',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'vandaag geopend', title: 'Nieuwe tentoonstellingen', loc: 'Kunstmuseum, Panorama Mesdag & Louwman Museum — t/m 31 dec', tag: 'Expo', highlight: true },
        { time: 't/m 14 sep', title: 'Walk of Fame (gratis)', loc: 'Scheveningen boulevard', tag: 'Familie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '19:00–23:00', title: 'Dansevenement', loc: 'Stadhuisplein', tag: 'Muziek', highlight: true },
        { time: '11:00–17:00', title: 'Strand in de stad', loc: 'Museum Rotterdam', tag: 'Familie' },
        { time: 'vanavond', title: 'Orgelpauzeconcert — Jan Wisse', loc: 'Laurenskerk', tag: 'Muziek' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: '2–15 aug', title: '27ste Internationaal Romeins Festival', loc: 'Archeon, Alphen aan den Rijn — legioenskamp, gladiatorenshows', tag: 'Festival', highlight: true },
        { time: 'deze zomer', title: 'Delfts blauw x streetart', loc: 'Royal Delft Museum, Delft', tag: 'Expo' },
        { time: 'deze zomer', title: 'Galleria — mini-tentoonstellingen', loc: 'Rijksmuseum van Oudheden, Leiden', tag: 'Expo' },
      ],
    },
  ],
  sources: [
    { label: 'Evenementen Den Haag', url: 'https://evenementen.denhaag.nl/events/' },
    { label: 'Muziekladder — Rotterdam agenda', url: 'https://muziekladder.nl/nl/muziek/8-Rotterdam/agenda-9.html' },
    { label: 'Archeon — evenementen', url: 'https://www.archeon.nl/nl/evenementen.html' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};

/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Woensdag 9 september 2026',
  updatedAt: '09-09-2026, 07:07',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '9 sep–25 okt (start vandaag)', title: '"Make It Art Worthy"', loc: 'Noordwal 18 — 10:00–17:00', tag: 'Expo', highlight: true },
        { time: 't/m 21 sep', title: 'Haagse Sportzomer Festivals', loc: 'Gratis sportactiviteiten in de wijken', tag: 'Sport' },
        { time: 'doorlopend', title: 'SEA LIFE Scheveningen', loc: 'Vernieuwde onderwaterwereld', tag: 'Familie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '11:00–11:50', title: '400e Marktconcert Open Hof', loc: 'Codarts Koperensemble, Willem Blonk en Isabelle Roelofs', tag: 'Muziek', highlight: true },
        { time: 'vandaag', title: 'ARCHITECT@WORK Rotterdam', loc: 'Ahoy, Hal 1 — vanaf 10:00', tag: 'Expo' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: '7–12 sep', title: 'Kinderdijk verlicht', loc: 'Molens \'s avonds in het licht', tag: 'Natuur', highlight: true },
        { time: 'doorlopend', title: 'Royal Delft Museum', loc: 'Delft — Delfts Blauw en streetart', tag: 'Expo' },
      ],
    },
  ],
  sources: [
    { label: 'Kidsproof Den Haag — uitagenda', url: 'https://www.kidsproof.nl/denhaag/uitjes/uitagenda/' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};

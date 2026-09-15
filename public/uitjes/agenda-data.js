/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Dinsdag 15 september 2026',
  updatedAt: '15-09-2026, 07:06',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '12:45–14:00', title: 'Prinsjesdag — Glazen Koets & Troonrede', loc: 'Van Paleis Noordeinde naar de Koninklijke Schouwburg', tag: 'Cultuur', highlight: true },
        { time: '12:00–15:00', title: 'Prinsjesvaart', loc: 'Vanaf Piet Heinplein — zicht op de Glazen Koets bij het Lange Voorhout', tag: 'Actief' },
        { time: '20:15', title: 'Prinsjescabaret', loc: 'Diligentia', tag: 'Comedy' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '12:45–13:15', title: 'Gratis orgelconcert', loc: 'Laurenskerk', tag: 'Muziek', highlight: true },
        { time: '19:45–20:45', title: 'Avondyoga', loc: 'Landje', tag: 'Sport' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend', title: 'Royal Delft Museum', loc: 'Delft — Delfts Blauw en streetart, 09:30–17:00', tag: 'Expo', highlight: true },
      ],
    },
  ],
  sources: [
    { label: 'Omroep West — Prinsjesdag', url: 'https://www.omroepwest.nl/cultuur/5147516/prinsjesdag-in-den-haag-alles-over-het-programma-afgesloten-wegen-en-parkeren' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};

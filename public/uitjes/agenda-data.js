/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Woensdag 26 augustus 2026',
  updatedAt: '26-08-2026, 07:11',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '19:30', title: 'Zuiderpark Live: Orchestra Baobab', loc: 'Zuiderparktheater', tag: 'Muziek', highlight: true },
        { time: 'vandaag', title: 'Murder mystery familietocht', loc: 'Rijksmuseum de Gevangenpoort', tag: 'Familie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '20:00', title: 'CeCe Winans & Charity Gayle', loc: 'Ahoy Arena', tag: 'Muziek', highlight: true },
        { time: '11:00–16:00', title: 'Portlantis', loc: 'Maasvlakte — interactieve havenbeleving', tag: 'Familie' },
        { time: '19:00–21:30', title: 'Rollerdam', loc: 'Museumpark', tag: 'Actief' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};

/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Dinsdag 22 september 2026',
  updatedAt: '22-09-2026, 07:14',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'vandaag', title: 'Gratis avond met het beste van Nederlandse livemuziek', loc: 'PAARD', tag: 'Muziek', highlight: true },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'vandaag', title: 'Cesar Zuiderwijk', loc: 'De Doelen', tag: 'Muziek', highlight: true },
        { time: '16:00–17:00', title: 'Kinderyoga (eerste les gratis)', loc: 'Huis van de Wijk De Focus', tag: 'Familie' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend', title: 'CORPUS', loc: 'Oegstgeest — reis door het menselijk lichaam', tag: 'Familie', highlight: true },
        { time: 'doorlopend', title: 'Rijksmuseum van Oudheden', loc: 'Leiden — mummies en farao\'s', tag: 'Expo' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};

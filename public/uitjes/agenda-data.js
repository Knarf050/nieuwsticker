/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Donderdag 27 augustus 2026',
  updatedAt: '27-08-2026, 07:08',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '27–29 aug (start vandaag)', title: 'Jazz-evenement', loc: 'Haagse binnenstad — 16:00–23:00', tag: 'Muziek', highlight: true },
        { time: '14:30', title: 'Circus-evenement', loc: 'Zuiderparktheater', tag: 'Familie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '20:00', title: 'For King & Country & Josh Baldwin', loc: 'Ahoy Arena', tag: 'Muziek', highlight: true },
        { time: '10:00–16:15', title: 'Circus Rotjeknor — workshop voor kids', loc: 'Rotterdam', tag: 'Familie' },
        { time: '11:00–17:00', title: 'Strand in de stad', loc: 'Museum Rotterdam', tag: 'Familie' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend', title: 'Escape room — research lab / detective room', loc: 'Capelle aan den IJssel', tag: 'Actief', highlight: true },
        { time: 't/m 30 aug', title: 'Speurtocht', loc: 'Rijksmuseum van Oudheden, Leiden', tag: 'Familie' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};

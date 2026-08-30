/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Zondag 30 augustus 2026',
  updatedAt: '30-08-2026, 07:06',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'laatste dag', title: 'Beasts of Bugatti', loc: 'Louwman Museum — 10:00–17:00', tag: 'Expo', highlight: true },
        { time: 'doorlopend', title: 'SEA LIFE Scheveningen', loc: 'Onderwaterwereld met bijzondere dieren', tag: 'Familie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'laatste dag', title: 'Klassiek in Het Park', loc: '12:00–23:00 — sluit de zomer af', tag: 'Muziek', highlight: true },
        { time: 'laatste dag', title: 'Kaapse Kunstroute & Kunstmarkt', loc: 'Katendrecht en Wilhelminapier — 12:00–17:00', tag: 'Expo' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'laatste dag', title: 'Speurtocht', loc: 'Rijksmuseum van Oudheden, Leiden', tag: 'Familie', highlight: true },
        { time: 'doorlopend', title: 'Escape room — research lab / detective room', loc: 'Capelle aan den IJssel', tag: 'Actief' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};

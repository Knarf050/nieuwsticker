/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Dinsdag 25 augustus 2026',
  updatedAt: '25-08-2026, 07:10',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '19:30', title: 'Workshop', loc: 'Zeeheldentheater', tag: 'Workshop', highlight: true },
        { time: '25–30 aug', title: 'Filmhuis Den Haag programma', loc: '21:00', tag: 'Film' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '14:00', title: 'Film (Kids)', loc: 'LantarenVenster', tag: 'Film', highlight: true },
        { time: '19:00–23:00', title: 'Theatervoorstellingen', loc: 'Nieuwe Luxor Theater & Café Dox', tag: 'Theater' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend', title: 'Portlantis', loc: 'Maasvlakte — interactieve haven­beleving en panoramisch uitzicht', tag: 'Familie', highlight: true },
        { time: 'doorlopend', title: 'Bowlen in een metrotunnel, lasergamen & minigolf', loc: "The City, 's-Gravenzande", tag: 'Actief' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};

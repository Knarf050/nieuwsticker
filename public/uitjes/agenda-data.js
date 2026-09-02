/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Woensdag 2 september 2026',
  updatedAt: '02-09-2026, 07:06',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '2–13 sep (start vandaag)', title: '"The Hague Creates" expositie', loc: 'Kunstbar', tag: 'Expo', highlight: true },
        { time: '22:00', title: 'Gratis Salsa', loc: 'Boterwaag', tag: 'Muziek' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '15:00–16:20', title: 'Familiefilm "Splish Splash Forever!"', loc: 'Cinema Islemunda — 12,5 jaar jubileum & Wereldhavendagen', tag: 'Familie', highlight: true },
        { time: '13:00', title: 'Evenement', loc: 'Natuurhistorisch Museum Rotterdam', tag: 'Expo' },
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

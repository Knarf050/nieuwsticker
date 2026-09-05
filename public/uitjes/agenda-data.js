/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Zaterdag 5 september 2026',
  updatedAt: '05-09-2026, 07:06',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '19:00–23:00', title: 'Culture Night', loc: 'Centrum Den Haag', tag: 'Cultuur', highlight: true },
        { time: 'vandaag', title: 'Market Mayhem', loc: 'Grote Markt omgetoverd tot skatepark', tag: 'Sport' },
        { time: 'laatste dag', title: 'Spotlight Festival', loc: 'Gratis podiumkunsten bij deelnemende locaties', tag: 'Cultuur' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '4–6 sep', title: 'Wereldhavendagen / Havendag', loc: 'Vanaf 10:00', tag: 'Festival', highlight: true },
        { time: '11:00–17:00', title: 'Maritiem Museum Rotterdam', loc: 'Openingsweekend', tag: 'Familie' },
        { time: '18:00', title: 'GLORY 109', loc: 'RTM Stage, Ahoy', tag: 'Sport' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'vandaag', title: 'Arenddag', loc: 'Biesbosch — vissen en zeearenden', tag: 'Natuur', highlight: true },
        { time: '13:00–16:00', title: 'Open dag Voedselbos de VliereLier', loc: 'Westland', tag: 'Familie' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};

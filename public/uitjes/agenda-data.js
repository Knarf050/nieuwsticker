/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Donderdag 24 september 2026',
  updatedAt: '24-09-2026, 07:15',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '20:00', title: 'Burgers & Comedy (NL)', loc: 'ComedyCity The Hague', tag: 'Comedy', highlight: true },
        { time: '18:30–22:00', title: 'Evenement', loc: 'The Grey Space in the Middle', tag: 'Cultuur' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'vandaag', title: 'KOKO (NL), Loveth Besamoh e.a.', loc: 'Baroeg', tag: 'Muziek', highlight: true },
        { time: 't/m 27 sep', title: '"Art She Crafted"', loc: '10:00–17:00', tag: 'Expo' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend', title: 'Kinderdijk (UNESCO Werelderfgoed)', loc: '19 historische molens', tag: 'Natuur', highlight: true },
        { time: 'vandaag', title: 'Ed Struijlaart', loc: 'Cultureel Centrum Cascade, Hendrik-Ido-Ambacht', tag: 'Muziek' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};

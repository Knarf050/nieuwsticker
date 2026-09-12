/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Zaterdag 12 september 2026',
  updatedAt: '12-09-2026, 07:05',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '12–13 sep (start vandaag)', title: 'Open Monumentendag', loc: 'Gratis — monumenten in Den Haag open', tag: 'Cultuur', highlight: true },
        { time: '20:30', title: 'Zuiderpark Live: Pink Project', loc: 'Zuiderparktheater', tag: 'Muziek' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '12–13 sep (start vandaag)', title: 'Baroeg Open Air', loc: 'Zuiderpark — rock, metal, punk, electronic en drum \'n bass', tag: 'Festival', highlight: true },
        { time: '12–13 sep', title: 'Koude Oorlog-bunker', loc: 'Schiebroekselaan — open voor bezoek, 10:00–17:00', tag: 'Expo' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: '12–13 sep', title: 'Open Monumentendag Delft', loc: 'Ruim 40 monumenten open — za 10:00–17:00', tag: 'Cultuur', highlight: true },
        { time: '12–13 sep', title: 'Open Monumentendag Westland', loc: '44 monumenten, van kerken tot molens', tag: 'Cultuur' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Open Monumentendag', url: 'https://www.openmonumentendag.nl/' },
  ],
};

/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Vrijdag 4 september 2026',
  updatedAt: '04-09-2026, 07:07',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'vandaag', title: 'Americana band', loc: 'PAARD — eerste en oudste Americana-band van Nederland', tag: 'Muziek', highlight: true },
        { time: 'vandaag', title: 'Prime Time Friday Comedy', loc: 'ComedyCity The Hague', tag: 'Comedy' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'dit weekend (start vandaag)', title: 'Wereldhavendagen', loc: 'Ontdek de Rotterdamse haven', tag: 'Festival', highlight: true },
        { time: 'vandaag', title: 'ZuiderWoord (11e editie)', loc: 'Podium voor woordkunstenaars in Zuid-Rotterdam', tag: 'Cultuur' },
        { time: '4–5 sep', title: 'TAPT Festival Rotterdam 2026', loc: 'Museumpark', tag: 'Festival' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'deze zomer', title: 'Galleria — mini-tentoonstellingen', loc: 'Rijksmuseum van Oudheden, Leiden', tag: 'Expo', highlight: true },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};

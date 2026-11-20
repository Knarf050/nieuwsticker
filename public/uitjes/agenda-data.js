/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Vrijdag 20 november 2026',
  updatedAt: '20-11-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '20:00–21:15', title: 'Mystery Ensemble — muziek uit The Lord of the Rings', loc: 'Grote Kerk', tag: 'Muziek', highlight: true },
        { time: 'opent vandaag (t/m 22 nov)', title: '5-jarig bestaan Amare', loc: 'Amare', tag: 'Festival' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'vandaag', title: 'CHARLOT', loc: 'Rotown', tag: 'Muziek', highlight: true },
        { time: '18:15', title: 'Dan Pulzello — Comedy Club', loc: 'Haug Podiumkunsten', tag: 'Comedy' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend (t/m 31 dec)', title: 'Mini Expo: The Trophy Collection', loc: 'Royal Delft Museum, Delft', tag: 'Expositie', highlight: true },
        { time: 'doorlopend', title: 'CORPUS', loc: 'Oegstgeest — interactieve reis door het menselijk lichaam', tag: 'Familie' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'rotown.nl — agenda', url: 'https://www.rotown.nl/' },
    { label: 'dagjeweg.nl — Zuid-Holland', url: 'https://www.dagjeweg.nl/kalender/zuid-holland/kerstmarkten' },
  ],
};

/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Zondag 1 november 2026',
  updatedAt: '01-11-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'doorlopend (t/m 7 nov)', title: 'Holland Gnawa Festival', loc: 'Diverse locaties', tag: 'Muziek', highlight: true },
        { time: 'koopzondag, 12:00–17:00', title: 'Winkels open', loc: 'Binnenstad', tag: 'Markt' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'opent vandaag (t/m 1 mrt)', title: 'Winterwijck', loc: 'Rotterdam', tag: 'Familie', highlight: true },
        { time: '17:00–20:00', title: 'RotiCruise — dinner cruise', loc: 'Vanaf de haven', tag: 'Culinair' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: '09:00–17:30, laatste dag', title: 'Kinderdijk', loc: 'Molens en rondvaarten — UNESCO-werelderfgoed', tag: 'Natuur', highlight: true },
        { time: '10:00–17:00, laatste dag', title: 'Neuzelbeurs', loc: 'De Broodfabriek, Rijswijk', tag: 'Markt' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'dagjeweg.nl — Rotterdam', url: 'https://www.dagjeweg.nl/kalender/rotterdam/evenementen' },
    { label: 'dagjeweg.nl — Zuid-Holland', url: 'https://www.dagjeweg.nl/kalender/zuid-holland' },
  ],
};

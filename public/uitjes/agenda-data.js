/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Maandag 31 augustus 2026',
  updatedAt: '31-08-2026, 07:07',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 't/m 14 sep', title: 'Walk of Fame (gratis)', loc: 'Scheveningen boulevard', tag: 'Familie', highlight: true },
        { time: 'doorlopend', title: 'Drievliet', loc: 'Familiepark — Formule X, Jungle River, Kopermijn', tag: 'Familie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'vandaag', title: '"A Taste of Home" — Ketoprak', loc: 'OASE Strandtent — gerecht van Lisa Smith', tag: 'Eten', highlight: true },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend', title: 'Museumpark Archeon', loc: 'Alphen aan den Rijn — zwaardvechten en boogschieten', tag: 'Familie', highlight: true },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'OASE Rotterdam — programma', url: 'https://www.oaserotterdam.nl/programma' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};

/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Zondag 15 november 2026',
  updatedAt: '15-11-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '16:00', title: 'Ballet of Lights: Doornroosje', loc: 'Diligentia, Lange Voorhout', tag: 'Familie', highlight: true },
        { time: 'doorlopend', title: 'Muziektentoonstelling — zelf muziek maken', loc: 'Museon-Omniversum', tag: 'Familie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'opent vandaag', title: 'Schaatsseizoen start', loc: 'Plaswijckpark', tag: 'Familie', highlight: true },
        { time: '10:15–13:15', title: 'Fossielenexpeditie', loc: 'Maasvlaktestrand', tag: 'Familie' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: '11:00–20:00, laatste dag', title: 'Archeon Kerstmarkt', loc: 'Museumpark Archeon, Alphen aan den Rijn', tag: 'Familie', highlight: true },
        { time: 'laatste dag', title: 'Nationale Kunstdagen', loc: 'Gorinchem', tag: 'Expositie' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'dagjeweg.nl — Rotterdam', url: 'https://www.dagjeweg.nl/kalender/rotterdam/15-november-2026' },
    { label: 'dagjeweg.nl — Zuid-Holland', url: 'https://www.dagjeweg.nl/kalender/zuid-holland/uit' },
  ],
};

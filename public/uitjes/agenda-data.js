/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Maandag 26 oktober 2026',
  updatedAt: '26-10-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'opent vandaag (t/m 12 dec)', title: 'Time Machine (HNTjong & Theater Utrecht)', loc: 'Het Nationale Theater', tag: 'Familie', highlight: true },
        { time: 'doorlopend', title: 'Madurodam', loc: 'Scheveningen — miniatuurstad', tag: 'Familie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'doorlopend (2–6 jaar)', title: 'Creatieve workshops', loc: 'Kindermuseum Villa Zebra', tag: 'Familie', highlight: true },
        { time: 'doorlopend (t/m 29 mrt 2027)', title: 'Marisol — expositie', loc: 'Depot Boijmans Van Beuningen', tag: 'Expositie' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend', title: 'Archeon — prehistorie, Romeinen, zwaardvechten', loc: 'Alphen aan den Rijn', tag: 'Familie', highlight: true },
        { time: 'doorlopend (t/m 1 nov)', title: 'Expositie "Urban Blue"', loc: 'Royal Delft Museum, Delft', tag: 'Expositie' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Grote Kerk Den Haag — agenda', url: 'https://grote-kerk.nl/agenda/' },
    { label: 'dagjeweg.nl — Zuid-Holland herfstvakantie', url: 'https://www.dagjeweg.nl/zuid-holland/herfstvakantie' },
  ],
};

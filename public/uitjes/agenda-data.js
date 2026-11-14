/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Zaterdag 14 november 2026',
  updatedAt: '14-11-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '10:00–12:30', title: 'Sinterklaasintocht', loc: 'Tweede Haven, Scheveningen', tag: 'Familie', highlight: true },
        { time: '08:30–14:30, gratis', title: 'Rommelmarkt', loc: 'Den Haag', tag: 'Markt' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '13:00', title: 'Sinterklaasintocht', loc: 'Vanaf Willemsplein naar Grotekerkplein', tag: 'Familie', highlight: true },
        { time: 'doorlopend', title: 'Shaun the Sheep — voorstelling', loc: 'Diverse locaties', tag: 'Familie' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: '11:00–20:00 (t/m 15 nov)', title: 'Archeon Kerstmarkt', loc: 'Museumpark Archeon, Alphen aan den Rijn', tag: 'Familie', highlight: true },
        { time: 't/m 15 nov', title: 'Titanique — musical comedy', loc: 'Spijkenisse', tag: 'Theater' },
      ],
    },
  ],
  sources: [
    { label: 'sinterklaas.nl — intocht Den Haag', url: 'https://sinterklaas.nl/intocht/den-haag/' },
    { label: 'rotterdam.nl — intocht Sinterklaas', url: 'https://www.rotterdam.nl/intocht-sinterklaas-2026-dit-is-de-route-door-rotterdam' },
    { label: 'archeon.nl — evenementen', url: 'https://www.archeon.nl/nl/evenementen.html' },
  ],
};

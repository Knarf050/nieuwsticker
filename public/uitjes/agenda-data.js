/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Zondag 18 oktober 2026',
  updatedAt: '18-10-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '10:00–16:00', title: 'Kunstfestival De Betovering (laatste dag)', loc: 'Koorenhuis, Muzee Scheveningen, Bibliotheek e.a.', tag: 'Familie', highlight: true },
        { time: 'laatste dag', title: 'Haagse Musicaldagen', loc: 'Grote Markt', tag: 'Theater' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '11:30–17:30', title: 'Portlantis Experience + fossielenexpeditie', loc: 'Maasvlakte', tag: 'Familie', highlight: true },
        { time: 'laatste dag', title: 'Magic Circus BOLA', loc: 'Diergaarde Blijdorp', tag: 'Familie' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: '10:00–17:00 (laatste dag)', title: 'Smeedweekend — vuursteen tot metaal', loc: 'Archeon, Alphen aan den Rijn', tag: 'Familie', highlight: true },
        { time: 'laatste dag', title: 'Leiden International Film Festival', loc: 'Diverse locaties, Leiden', tag: 'Film' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'dagjeweg.nl — activiteiten 18 oktober', url: 'https://www.dagjeweg.nl/kalender/18-oktober-2026' },
  ],
};

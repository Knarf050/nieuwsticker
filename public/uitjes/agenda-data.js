/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Zondag 8 november 2026',
  updatedAt: '08-11-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '12:00–16:00', title: 'Eerlijk Voedsel Festival', loc: 'Diverse locaties', tag: 'Familie', highlight: true },
        { time: 'laatste dag', title: 'Le Marie Marché', loc: 'Lange Vijverberg', tag: 'Markt' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '09:00–14:30', title: 'Maastunnelloop — 10 km en 1 km kidsrun', loc: 'Start Parkkade', tag: 'Sport', highlight: true },
        { time: 'laatste dag, 16:00–17:45', title: 'Magic Circus BOLA', loc: 'Prinsenland', tag: 'Familie' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'Sint-Maarten', title: 'Archeon', loc: 'Alphen aan den Rijn', tag: 'Familie', highlight: true },
        { time: 'speurtocht', title: 'Beestjesspeurtocht — twaalf metersgrote beestjes', loc: 'Hortus botanicus, Leiden', tag: 'Familie' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'epicruns.nl — Maastunnelloop', url: 'https://www.epicruns.nl/maastunnelloop/' },
    { label: 'kidsproof.nl — Leiden', url: 'https://www.kidsproof.nl/leiden/uitjes/uitagenda/' },
  ],
};

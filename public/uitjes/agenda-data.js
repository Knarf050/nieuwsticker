/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Zaterdag 17 oktober 2026',
  updatedAt: '17-10-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '10:00–16:00', title: 'Kunstfestival De Betovering', loc: 'Koorenhuis, Muzee Scheveningen, Bibliotheek e.a.', tag: 'Familie', highlight: true },
        { time: '09:00–21:00', title: 'Zwemmarathon — 50 jaar Zwembad De Waterthor', loc: 'Zwembad De Waterthor', tag: 'Sport' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'opent vandaag (t/m 25 okt)', title: 'WK Turnen 2026', loc: 'Rotterdam Ahoy', tag: 'Sport', highlight: true },
        { time: 'opent vandaag, 10:00', title: 'Alida Dors — "(Sur)render"', loc: 'Kunsthal Rotterdam', tag: 'Expositie' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: '11:00–16:30', title: 'Zotte Zaterdag', loc: 'Binnenstad Gouda — middeleeuws festival, gratis', tag: 'Familie', highlight: true },
        { time: '10:30–16:30', title: 'Bootje Kaas — rondvaart', loc: 'Historische grachten, Gouda', tag: 'Actief' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Ahoy — agenda', url: 'https://www.ahoy.nl/en/events' },
    { label: 'zottezaterdag.nl', url: 'https://zottezaterdag.nl/festival/' },
  ],
};

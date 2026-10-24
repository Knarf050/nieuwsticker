/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Zaterdag 24 oktober 2026',
  updatedAt: '24-10-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '12:30 & 15:30', title: 'Festival De Betovering: "Double You" (6+)', loc: 'Theater aan het Spui, Zaal 1', tag: 'Familie', highlight: true },
        { time: 'laatste dag (t/m 25 okt)', title: 'Herfstcircus Chapito', loc: 'Zuiderpark', tag: 'Familie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '12:00–16:00, gratis', title: 'Left of the Dial — Closing Party & festival', loc: 'Rotown en centrum', tag: 'Muziek', highlight: true },
        { time: '11:30 & 14:00', title: 'Aladdin De Musical', loc: 'Theater Zuidplein', tag: 'Familie' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'opent vandaag (herfstvakantie)', title: 'AquaZoo Leerdam', loc: 'Leerdam — onderwaterwereld', tag: 'Familie', highlight: true },
        { time: 'doorlopend', title: 'Bounce Valley', loc: 'Zoetermeer, Delft en Rotterdam', tag: 'Familie' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Rotown — agenda', url: 'https://www.rotown.nl/' },
    { label: 'dagjeweg.nl — Zuid-Holland herfstvakantie', url: 'https://www.dagjeweg.nl/zuid-holland/herfstvakantie' },
  ],
};

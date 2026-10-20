/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Dinsdag 20 oktober 2026',
  updatedAt: '20-10-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '12:30–15:50 (t/m 21 okt)', title: 'Festival De Betovering: "FLY" (6+)', loc: 'Theater aan het Spui, Spui Studio', tag: 'Familie', highlight: true },
        { time: '14:00', title: 'Wonder — kindervoorstelling', loc: 'Laaktheater', tag: 'Familie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '19:30', title: 'WK Turnen 2026 — avondsessie', loc: 'Rotterdam Ahoy, Hal 1–6', tag: 'Sport', highlight: true },
        { time: 'opent vandaag, 16:00–17:45 (t/m 25 okt)', title: 'Magic Circus BOLA', loc: 'Nesselande', tag: 'Familie' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend (t/m 1 nov)', title: '"Monsters en mythische wezens"', loc: 'Rijksmuseum van Oudheden, Leiden', tag: 'Familie', highlight: true },
        { time: 'doorlopend (t/m 1 nov)', title: 'Expositie "Urban Blue"', loc: 'Royal Delft Museum, Delft', tag: 'Expositie' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Ahoy — agenda', url: 'https://www.ahoy.nl/en/events' },
    { label: 'dagjeweg.nl — Zuid-Holland herfstvakantie', url: 'https://www.dagjeweg.nl/zuid-holland/herfstvakantie' },
  ],
};

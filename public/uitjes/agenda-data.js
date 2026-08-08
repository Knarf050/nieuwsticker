/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Zaterdag 8 augustus 2026',
  updatedAt: '08-08-2026, 07:07',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '12:00–23:00', title: 'Fawaka Fest', loc: 'Zuiderpark — Surinaamse vibes, meerdere podia', tag: 'Festival', highlight: true },
        { time: '7–9 aug', title: 'Zomerspelen 2026', loc: 'Oud-Hollandse spelen voor het hele gezin — 09:00–18:00', tag: 'Familie' },
        { time: 't/m 9 aug', title: 'Paleis Noordeinde & Koninklijke Stallen', loc: 'Open voor publiek', tag: 'Expo' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'vandaag', title: 'Blijdorp Festival', loc: 'Roel Langerakpark', tag: 'Festival', highlight: true },
        { time: '17:00', title: 'OASE Strandtent — Weave', loc: 'Gratis entree, deep/soulful house', tag: 'Muziek' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: '2–15 aug', title: '27ste Internationaal Romeins Festival', loc: 'Archeon, Alphen aan den Rijn — legioenskamp, gladiatorenshows', tag: 'Festival', highlight: true },
        { time: '14:30', title: 'Diner op eiland Tiengemeten', loc: 'Natuur- en cultuurbeleving nabij Rotterdam', tag: 'Natuur' },
      ],
    },
  ],
  sources: [
    { label: 'Fawaka Fest — Zuiderpark', url: 'https://www.zuiderparkdenhaag.com/agenda/event/fawaka-fest-2026-08-08-8eb82080/' },
    { label: 'Evenementen Den Haag', url: 'https://evenementen.denhaag.nl/events/' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Archeon — evenementen', url: 'https://www.archeon.nl/nl/evenementen.html' },
  ],
};

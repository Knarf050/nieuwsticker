/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Woensdag 12 augustus 2026',
  updatedAt: '12-08-2026, 07:08',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 't/m 16 aug', title: 'Expo bij West Den Haag', loc: 'Voormalige Amerikaanse ambassade — 12:00–18:00', tag: 'Expo', highlight: true },
        { time: 't/m 23 aug', title: 'Jeugdactiviteiten', loc: 'CORPUS — dagelijks 09:00–16:00', tag: 'Familie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '12–23 aug (start vandaag)', title: 'Openluchtfilmfestival', loc: '20:00–23:59 — filmtalent van over de hele wereld', tag: 'Film', highlight: true },
        { time: '11:00–17:00', title: 'Strand in de stad', loc: 'Museum Rotterdam', tag: 'Familie' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: '2–15 aug', title: '27ste Internationaal Romeins Festival', loc: 'Archeon, Alphen aan den Rijn — legioenskamp, gladiatorenshows', tag: 'Festival', highlight: true },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Archeon — evenementen', url: 'https://www.archeon.nl/nl/evenementen.html' },
  ],
};

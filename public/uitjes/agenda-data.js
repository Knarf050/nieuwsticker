/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Zaterdag 15 augustus 2026',
  updatedAt: '15-08-2026, 07:07',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '20:30', title: 'Prime Time Saturday Comedy (NL)', loc: 'ComedyCity The Hague', tag: 'Comedy', highlight: true },
        { time: 't/m 30 aug', title: 'Beasts of Bugatti', loc: 'Louwman Museum — 10:00–17:00', tag: 'Expo' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '15–16 aug (start vandaag)', title: 'Floating Pasar', loc: '12:00–22:00 — eten, muziek en kunst uit de Indische, Indonesische, Molukse en Papoea diaspora', tag: 'Festival', highlight: true },
        { time: '15:00–23:00', title: 'Festival-evenement', loc: 'De Kerktuin', tag: 'Festival' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'laatste dag', title: '27ste Internationaal Romeins Festival', loc: 'Archeon, Alphen aan den Rijn — legioenskamp, gladiatorenshows', tag: 'Festival', highlight: true },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Archeon — evenementen', url: 'https://www.archeon.nl/nl/evenementen.html' },
  ],
};

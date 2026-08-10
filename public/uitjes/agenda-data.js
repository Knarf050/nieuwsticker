/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Maandag 10 augustus 2026',
  updatedAt: '10-08-2026, 07:08',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '8–16 aug', title: 'Expo bij West Den Haag', loc: 'Voormalige Amerikaanse ambassade — 12:00–18:00', tag: 'Expo', highlight: true },
        { time: '08:45–17:00', title: 'Haagse Markt', loc: 'Herman Costerstraat', tag: 'Markt' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '10–21 aug (start vandaag)', title: 'Jeugdvakantieland', loc: 'Ahoy — grootste overdekte speeltuin van Nederland, 10:00–16:00', tag: 'Familie', highlight: true },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 't/m 23 aug', title: 'Delfts Blauw x streetart', loc: 'Royal Delft Museum, Delft — 09:30–17:00', tag: 'Expo', highlight: true },
        { time: '2–15 aug', title: '27ste Internationaal Romeins Festival', loc: 'Archeon, Alphen aan den Rijn — legioenskamp, gladiatorenshows', tag: 'Festival' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Markten Den Haag', url: 'https://marktenmeer.nl/markten/den-haag/' },
    { label: 'Uitagenda Rotterdam — Jeugdvakantieland', url: 'https://www.uitagendarotterdam.nl/agenda/jeugdvakantieland-2026/' },
    { label: 'Archeon — evenementen', url: 'https://www.archeon.nl/nl/evenementen.html' },
  ],
};

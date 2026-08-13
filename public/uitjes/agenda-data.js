/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Donderdag 13 augustus 2026',
  updatedAt: '13-08-2026, 07:08',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '13–16 aug (start vandaag)', title: 'Expo bij West Den Haag', loc: 'Voormalige Amerikaanse ambassade — 12:00–22:00', tag: 'Expo', highlight: true },
        { time: '13 aug–13 sep (start vandaag)', title: 'Rondleiding bij Passage', loc: 'Vanaf 10:00', tag: 'Rondleiding' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '10–21 aug', title: 'Rotterdam Rave Festival 2026', loc: 'Rotterdam', tag: 'Festival', highlight: true },
        { time: '17:30–21:00', title: 'Open Woordkunstpodium', loc: "Kunstcafé 't Pakhuys", tag: 'Cultuur' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: '13:30', title: 'Wandeltocht zomertuinen Waalenburg', loc: '2 uur — bloeiende bloemen, kruiden en vlinders', tag: 'Natuur', highlight: true },
        { time: 't/m 23 aug', title: 'Delfts Blauw x streetart', loc: 'Royal Delft Museum, Delft — 09:30–17:00', tag: 'Expo' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};

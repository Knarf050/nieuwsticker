/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Zondag 9 augustus 2026',
  updatedAt: '09-08-2026, 07:06',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '14:00', title: 'Myrchfest 2026', loc: 'Zuiderpark — "Where Desi\'s Unite"', tag: 'Festival', highlight: true },
        { time: '12:00–15:00', title: 'Boerendorp-evenement', loc: 'Zuiderparktheater', tag: 'Familie' },
        { time: 'laatste dag, t/m 17:00', title: 'Paleis Noordeinde & Koninklijke Stallen', loc: 'Open voor publiek', tag: 'Expo' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'vandaag', title: 'SEU Oogstfeestparade', loc: 'Afrikaanderplein', tag: 'Festival', highlight: true },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'vandaag', title: 'Noordzee Zomer Festival — openingsfeest', loc: 'Strandboulevard Katwijk — coverbands', tag: 'Festival', highlight: true },
        { time: '2–15 aug', title: '27ste Internationaal Romeins Festival', loc: 'Archeon, Alphen aan den Rijn — legioenskamp, gladiatorenshows', tag: 'Festival' },
      ],
    },
  ],
  sources: [
    { label: 'Evenementen Den Haag', url: 'https://evenementen.denhaag.nl/reserveringskalender-evenementen-2026/' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'DagjeWeg — 9 augustus', url: 'https://www.dagjeweg.nl/kalender/9-augustus-2026' },
    { label: 'Archeon — evenementen', url: 'https://www.archeon.nl/nl/evenementen.html' },
  ],
};

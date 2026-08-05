/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Woensdag 5 augustus 2026',
  updatedAt: '05-08-2026, 07:06',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '19:30–23:00', title: 'Musicon Rock-avond', loc: 'Musicon', tag: 'Muziek', highlight: true },
        { time: '5–16 aug', title: 'Expo bij West Den Haag', loc: 'Voormalige Amerikaanse ambassade — 12:00–18:00', tag: 'Expo' },
        { time: '5–23 aug', title: 'Exposities Pulchri Studio', loc: '12:00–17:00', tag: 'Expo' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '11:00–17:00', title: 'Strand in de stad', loc: 'Museum Rotterdam', tag: 'Familie', highlight: true },
        { time: '11:30–13:30', title: 'Cooljutten op de Coolhaven', loc: 'Museum Rotterdam', tag: 'Familie' },
        { time: '13:30–17:00', title: 'Portlantis', loc: 'Rotterdamse haven', tag: 'Familie' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: '2–15 aug', title: '27ste Internationaal Romeins Festival', loc: 'Archeon, Alphen aan den Rijn — legioenskamp, gladiatorenshows', tag: 'Festival', highlight: true },
        { time: 't/m 30 aug', title: 'Rondleidingen Koninklijke Porceleyne Fles', loc: 'Royal Delft Museum, Delft', tag: 'Rondleiding' },
        { time: 't/m 30 aug', title: 'Schattenjacht', loc: 'Rijksmuseum van Oudheden, Leiden', tag: 'Familie' },
      ],
    },
  ],
  sources: [
    { label: 'Evenementen Den Haag', url: 'https://evenementen.denhaag.nl/reserveringskalender-evenementen-2026/' },
    { label: 'Muziekladder — Rotterdam agenda', url: 'https://muziekladder.nl/muziek/8-Rotterdam/agenda-10.html' },
    { label: 'Archeon — evenementen', url: 'https://www.archeon.nl/nl/evenementen.html' },
    { label: 'DagjeWeg — Zuid-Holland 5 augustus', url: 'https://www.dagjeweg.nl/kalender/zuid-holland/5-augustus-2026' },
  ],
};

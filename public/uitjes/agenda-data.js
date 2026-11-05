/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Donderdag 5 november 2026',
  updatedAt: '05-11-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'avond', title: 'Star Party', loc: 'Museon-Omniversum', tag: 'Familie', highlight: true },
        { time: 'doorlopend (t/m 8 nov)', title: 'Crossing Border Festival', loc: 'Koninklijke Schouwburg', tag: 'Festival' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '20:00', title: 'The Analogues — Beatles-tribute', loc: 'Oude Luxor Theater', tag: 'Muziek', highlight: true },
        { time: '20:15', title: 'Rotterdams Philharmonisch Orkest — "Fire in my mouth"', loc: 'De Doelen, Grote Zaal', tag: 'Muziek' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'opent vandaag (t/m 7 nov)', title: 'Pasar Malam', loc: 'De Broodfabriek, Rijswijk', tag: 'Familie', highlight: true },
        { time: 'vandaag', title: 'Food La Route', loc: 'Katwijk', tag: 'Culinair' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'rotterdamstyle.com — Live Music Calendar', url: 'https://rotterdamstyle.com/live-music-calendar' },
    { label: 'wattedoenin.nl — Uitagenda Zuid-Holland', url: 'https://www.wattedoenin.nl/uitagenda/zuid-holland/' },
  ],
};

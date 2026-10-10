/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Zaterdag 10 oktober 2026',
  updatedAt: '10-10-2026, 07:10',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '19:00–00:00', title: 'Museumnacht Den Haag', loc: 'Lange Voorhout en Haagse musea', tag: 'Cultuur', highlight: true },
        { time: '11:00–18:00', title: 'Home Made Market', loc: 'Lange Voorhout', tag: 'Markt' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '18:00', title: 'Oktoberfest Rotterdam', loc: 'Van Nelle Fabriek', tag: 'Festival', highlight: true },
        { time: '21:15', title: 'Nobu', loc: 'Rotown', tag: 'Muziek' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: '12:00–20:30 (10–11 okt)', title: 'Fantasy Fest — Twisted Trick or Treat', loc: 'Rijswijk', tag: 'Familie', highlight: true },
        { time: '09:00–12:00', title: 'Oogst- en Streekmarkt', loc: 'Schoonhoven', tag: 'Markt' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Rotown — agenda', url: 'https://www.rotown.nl/' },
    { label: 'uitzinnig.nl — evenementen Zuid-Holland', url: 'https://www.uitzinnig.nl/evenement/12/zuid-holland.aspx?arcp=1&m=10' },
  ],
};

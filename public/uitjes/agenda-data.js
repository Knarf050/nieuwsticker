/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Zondag 22 november 2026',
  updatedAt: '22-11-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'laatste dag', title: '5-jarig bestaan Amare', loc: 'Amare', tag: 'Festival', highlight: true },
        { time: 'vandaag', title: 'Bollywood Explosie', loc: 'Theater Dakota', tag: 'Theater' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '10:00–17:00, laatste dag', title: 'Noorse Kerstmarkt (NKHR, 102e editie)', loc: 'Westzeedijk 300', tag: 'Markt', highlight: true },
        { time: '11:00–17:00, laatste dag', title: 'Deense Kerstmarkt', loc: 'Coolhaven 1', tag: 'Markt' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: '10:00–16:30, laatste dag', title: 'Christmas and Vintage Fair', loc: 'Kasteel Daelenbroeck, Dordrecht', tag: 'Markt', highlight: true },
        { time: '10:00–17:00', title: 'Neuzelbeurs', loc: 'De Broodfabriek, Rijswijk', tag: 'Markt' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'bos-rotterdam.nl — kerstmarkt', url: 'https://bos-rotterdam.nl/overige-activiteiten/kerstmarkt_2026' },
    { label: 'dagjeweg.nl — Zuid-Holland markten', url: 'https://www.dagjeweg.nl/kalender/zuid-holland/markten' },
  ],
};

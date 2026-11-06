/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Vrijdag 6 november 2026',
  updatedAt: '06-11-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'doorlopend (t/m 8 nov)', title: 'Eastern Neighbours Film Festival', loc: 'Filmhuis Den Haag', tag: 'Film', highlight: true },
        { time: '12:00–17:00', title: 'Adrie Kweekel — "QUAKE"', loc: 'Pulchri Studio', tag: 'Expositie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'opent vandaag, 16:00 (t/m 8 nov)', title: 'Magic Circus BOLA', loc: 'Prinsenland, bij metrostation Schenkel', tag: 'Familie', highlight: true },
        { time: 'doorlopend (t/m 8 nov)', title: 'Wildlife Film Festival', loc: 'Cinerama', tag: 'Film' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend', title: 'Watersnoodmuseum', loc: 'Ouwerkerk', tag: 'Expositie', highlight: true },
        { time: 'doorlopend (t/m 31 dec)', title: 'Mini Expo: The Trophy Collection', loc: 'Royal Delft Museum, Delft', tag: 'Expositie' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Rotown — RAUWfest', url: 'https://www.rotown.nl/agenda/rauwfest-1/' },
    { label: 'dagjeweg.nl — Zuid-Holland', url: 'https://www.dagjeweg.nl/zuid-holland' },
  ],
};

/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Dinsdag 10 november 2026',
  updatedAt: '10-11-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'laatste dagen (t/m 13 nov)', title: '"Momenten waarop het kantelde" (Schuldenlab070)', loc: 'Atrium City Hall', tag: 'Expositie', highlight: true },
        { time: 'opent vandaag (t/m 31 dec)', title: 'Wijkmarkt', loc: 'Leyweg', tag: 'Markt' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '20:00', title: 'CKay', loc: 'Maassilo', tag: 'Muziek', highlight: true },
        { time: '10:00–12:00, gratis', title: 'Ecoprinting-workshop', loc: 'Dokhuis', tag: 'Familie' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: '14:00–16:00, laatste dagen (t/m 12 nov)', title: 'Archeologietentoonstelling', loc: 'Hellevoetsluis', tag: 'Expositie', highlight: true },
        { time: 'doorlopend', title: 'Rijksmuseum van Oudheden', loc: 'Leiden', tag: 'Familie' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'dehavenloods.nl — agenda', url: 'https://www.dehavenloods.nl/agenda' },
    { label: 'dagjeweg.nl — Zuid-Holland', url: 'https://www.dagjeweg.nl/kalender/zuid-holland' },
  ],
};

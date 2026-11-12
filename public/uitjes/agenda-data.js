/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Donderdag 12 november 2026',
  updatedAt: '12-11-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '20:00', title: 'Macy Gray — The Trouble With The Truth Tour', loc: 'PAARD', tag: 'Muziek', highlight: true },
        { time: 'laatste dag (5–12 nov)', title: '125 jaar jeugdgezondheidszorg', loc: 'Atrium City Hall', tag: 'Expositie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'opent vandaag (t/m 22 nov)', title: 'Noorse Kerstmarkt', loc: 'Rotterdam', tag: 'Markt', highlight: true },
        { time: 'opent vandaag (t/m 15 nov)', title: 'Trompenburg by Night', loc: 'Trompenburg Tuinen', tag: 'Familie' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'laatste dag', title: 'Archeologietentoonstelling', loc: 'Vesting Hellevoetsluis', tag: 'Expositie', highlight: true },
        { time: 'doorlopend', title: 'CORPUS', loc: 'Oegstgeest — interactieve reis door het menselijk lichaam', tag: 'Familie' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'waarwat.nl — evenementen november 2026', url: 'https://waarwat.nl/evenementen/november-2026' },
    { label: 'dagjeweg.nl — Zuid-Holland', url: 'https://www.dagjeweg.nl/kalender/zuid-holland' },
  ],
};

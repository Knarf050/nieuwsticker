/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Dinsdag 3 november 2026',
  updatedAt: '03-11-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'opent vandaag (t/m 8 nov)', title: 'Crossing Border Festival', loc: 'Koninklijke Schouwburg, Grote zaal', tag: 'Festival', highlight: true },
        { time: '18:00, gratis', title: 'Flowcasters — vrije inloop', loc: 'Amare, Kunstenplein', tag: 'Muziek' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'opent vandaag, 16:00–17:45', title: 'Magic Circus', loc: 'Noordplein, Oude Noorden', tag: 'Familie', highlight: true },
        { time: '16:00–18:00, gratis', title: 'Code Tour Rotterdam', loc: 'Diverse locaties — voor kinderen', tag: 'Familie' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend, gratis', title: 'Stadswandeling', loc: 'Historische binnenstad, Dordrecht', tag: 'Actief', highlight: true },
        { time: 'doorlopend', title: 'CORPUS', loc: 'Oegstgeest — interactieve reis door het menselijk lichaam', tag: 'Familie' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'dagjeweg.nl — Zuid-Holland', url: 'https://www.dagjeweg.nl/kalender/zuid-holland' },
  ],
};

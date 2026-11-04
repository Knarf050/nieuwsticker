/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Woensdag 4 november 2026',
  updatedAt: '04-11-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'opent vandaag (t/m 8 nov)', title: 'Eastern Neighbours Film Festival', loc: 'Filmhuis Den Haag', tag: 'Film', highlight: true },
        { time: 'doorlopend (t/m 8 nov)', title: 'Crossing Border Festival', loc: 'Koninklijke Schouwburg', tag: 'Festival' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '10:00–12:00, gratis', title: 'Stadsnatuur-activiteit', loc: 'Bij Centraal Station', tag: 'Familie', highlight: true },
        { time: 'laatste dag, 16:00–17:45', title: 'Magic Circus', loc: 'Noordplein, Oude Noorden', tag: 'Familie' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend', title: 'Mummies en farao\'s', loc: 'Rijksmuseum van Oudheden, Leiden', tag: 'Familie', highlight: true },
        { time: 'doorlopend', title: 'Hendrick Hamel Museum', loc: 'Gorinchem', tag: 'Expositie' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'dagjeweg.nl — Zuid-Holland', url: 'https://www.dagjeweg.nl/kalender/zuid-holland' },
  ],
};

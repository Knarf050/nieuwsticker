/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Vrijdag 16 oktober 2026',
  updatedAt: '16-10-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'opent vandaag (t/m 25 okt)', title: 'Herfstcircus Chapito', loc: 'Zuiderpark', tag: 'Familie', highlight: true },
        { time: 'laatste dagen (14:00–20:00, t/m 18 okt)', title: 'Art The Hague', loc: 'Fokker Terminal', tag: 'Kunst' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'opent vandaag (t/m 25 okt)', title: 'Najaarskermis', loc: 'Lloyd Multiplein', tag: 'Familie', highlight: true },
        { time: 'avond', title: 'Sophie Hutchings', loc: 'LantarenVenster', tag: 'Muziek' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend', title: 'Archeon', loc: 'Alphen aan den Rijn — archeologisch themapark', tag: 'Familie', highlight: true },
        { time: 'doorlopend (t/m 29 nov)', title: '"Miniaturen en Meesterstukken"', loc: 'Zilvermuseum Schoonhoven', tag: 'Expositie' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'dagjeweg.nl — Rotterdam evenementen', url: 'https://www.dagjeweg.nl/kalender/rotterdam/evenementen' },
    { label: 'dagjeweg.nl — Zuid-Holland herfstvakantie', url: 'https://www.dagjeweg.nl/kalender/zuid-holland/herfstvakantie' },
  ],
};

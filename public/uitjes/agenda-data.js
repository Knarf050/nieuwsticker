/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Woensdag 14 oktober 2026',
  updatedAt: '14-10-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'opent vandaag (t/m 25 okt)', title: 'Japanse Tuin', loc: 'Landgoed Clingendael', tag: 'Natuur', highlight: true },
        { time: 'doorlopend (t/m 1 nov)', title: 'Grafiek en houtsneden', loc: 'Pulchri Studio', tag: 'Expositie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '20:30', title: 'Turin Brakes', loc: 'Rotown, Nieuwe Binnenweg', tag: 'Muziek', highlight: true },
        { time: '19:00', title: 'Spelletjesavond', loc: 'Rotown', tag: 'Casual' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend', title: 'Museum Voorlinden', loc: 'Wassenaar — hedendaagse kunst en wandeltuin', tag: 'Expositie', highlight: true },
        { time: 'doorlopend', title: 'Willem van Oranje — de musical', loc: 'Prinsentheater, Delft', tag: 'Theater' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Rotown — agenda', url: 'https://www.rotown.nl/' },
    { label: 'dagjeweg.nl — Zuid-Holland', url: 'https://www.dagjeweg.nl/kalender/zuid-holland' },
  ],
};

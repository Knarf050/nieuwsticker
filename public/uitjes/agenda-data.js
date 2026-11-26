/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Donderdag 26 november 2026',
  updatedAt: '26-11-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'opent vandaag', title: 'Pink Christmas — pop-up', loc: 'And Concept Store', tag: 'Markt', highlight: true },
        { time: 'vandaag', title: 'Latin Night — Zuid-Amerikaanse, Caribische en Antilliaanse DansEvent', loc: 'Musicon', tag: 'Dans' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '20:00–22:30', title: 'BLØF & Vrienden', loc: 'Rotterdam Ahoy', tag: 'Muziek', highlight: true },
        { time: 'vandaag', title: 'Rotterdams Philharmonisch Orkest — Mozart en Dvořák', loc: 'De Doelen', tag: 'Muziek' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend', title: 'Museum Prinsenhof — verhaal van Willem van Oranje', loc: 'Delft', tag: 'Expositie', highlight: true },
        { time: 'doorlopend', title: 'CORPUS', loc: 'Oegstgeest — interactieve reis door het menselijk lichaam', tag: 'Familie' },
      ],
    },
  ],
  sources: [
    { label: 'thehagueonline.com — calendar', url: 'https://thehagueonline.com/2026-calendar/' },
    { label: 'ahoy.nl — agenda', url: 'https://www.ahoy.nl/en/events' },
    { label: 'dagjeweg.nl — Zuid-Holland', url: 'https://www.dagjeweg.nl/kalender/zuid-holland/markten' },
  ],
};

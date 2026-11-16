/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Maandag 16 november 2026',
  updatedAt: '16-11-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'opent vandaag (t/m 20 nov)', title: 'The Hague Justice Week', loc: 'Diverse locaties', tag: 'Festival', highlight: true },
        { time: 'doorlopend (t/m eind feb)', title: 'Cool Event Scheveningen — schaatsen', loc: 'Kurhausplein', tag: 'Familie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'vandaag', title: 'Een avond met Yotam Ottolenghi', loc: 'Rotterdam', tag: 'Culinair', highlight: true },
        { time: 'doorlopend', title: 'Klimpark met netten', loc: 'Rotterdam — tot 15 meter hoog', tag: 'Familie' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend (t/m 4 jan 2027)', title: 'Expositie over kunst en twijfel', loc: 'Rijksmuseum Boerhaave, Leiden', tag: 'Expositie', highlight: true },
        { time: 'doorlopend (t/m 3 jan 2027)', title: 'Willem van Oranje — de musical', loc: 'Prinsentheater, Delft', tag: 'Theater' },
      ],
    },
  ],
  sources: [
    { label: 'thehague.com — Business evenementen', url: 'https://thehague.com/newsroom/en/events' },
    { label: 'dagjeweg.nl — Zuid-Holland', url: 'https://www.dagjeweg.nl/kalender/zuid-holland/uit' },
    { label: 'dagjeweg.nl — concerten', url: 'https://www.dagjeweg.nl/kalender/november-2026' },
  ],
};

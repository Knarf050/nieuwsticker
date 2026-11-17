/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Dinsdag 17 november 2026',
  updatedAt: '17-11-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '20:00–23:00', title: 'Electric Six', loc: 'PAARD', tag: 'Muziek', highlight: true },
        { time: 'doorlopend (t/m 20 nov)', title: 'The Hague Justice Week', loc: 'Diverse locaties', tag: 'Festival' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '20:00', title: 'Soweto Gospel Choir', loc: 'Oude Luxor Theater', tag: 'Muziek', highlight: true },
        { time: 'opent vandaag, 12:00', title: 'Connecting Cultures Festival 2026', loc: 'Rotterdam', tag: 'Festival' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend', title: 'Mummies — oog in oog', loc: 'Rijksmuseum van Oudheden, Leiden', tag: 'Familie', highlight: true },
        { time: 'doorlopend (t/m 31 dec)', title: 'Mini Expo: The Trophy Collection', loc: 'Royal Delft Museum, Delft', tag: 'Expositie' },
      ],
    },
  ],
  sources: [
    { label: 'uitdenhaag.net — agenda', url: 'https://uitdenhaag.net/' },
    { label: 'dehavenloods.nl — agenda', url: 'https://www.dehavenloods.nl/agenda' },
    { label: 'dagjeweg.nl — Zuid-Holland', url: 'https://www.dagjeweg.nl/kalender/zuid-holland/uit' },
  ],
};

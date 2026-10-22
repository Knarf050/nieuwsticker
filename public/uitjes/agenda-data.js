/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Donderdag 22 oktober 2026',
  updatedAt: '22-10-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '14:00', title: 'A.vontura Silent Disco Theater — De Dinoshow', loc: 'VaderCentrum-ADAM', tag: 'Familie', highlight: true },
        { time: 'laatste dag', title: 'Festival De Betovering: "LaQua" (0,5+)', loc: 'Koninklijke Schouwburg', tag: 'Familie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'opent vandaag (t/m 24 okt)', title: 'Left of the Dial', loc: 'Diverse locaties, centrum', tag: 'Muziek', highlight: true },
        { time: '19:30', title: 'WK Turnen 2026 — avondsessie', loc: 'Rotterdam Ahoy, Hal 1–6', tag: 'Sport' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend (t/m 1 nov)', title: 'Expositie "Urban Blue"', loc: 'Royal Delft Museum, Delft', tag: 'Expositie', highlight: true },
        { time: '09:00–17:30 (t/m 1 nov)', title: 'Kinderdijk', loc: 'Molens en rondvaarten — UNESCO-werelderfgoed', tag: 'Natuur' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Ahoy — agenda', url: 'https://www.ahoy.nl/en/events' },
    { label: 'dagjeweg.nl — Zuid-Holland herfstvakantie', url: 'https://www.dagjeweg.nl/zuid-holland/herfstvakantie' },
  ],
};

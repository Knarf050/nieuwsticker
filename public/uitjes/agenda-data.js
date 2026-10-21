/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Woensdag 21 oktober 2026',
  updatedAt: '21-10-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '11:00', title: 'Thé Tjong-Khing — Fairytale Fashion Show', loc: 'Laaktheater', tag: 'Familie', highlight: true },
        { time: 't/m 22 okt', title: 'Festival De Betovering: "LaQua" (0,5+)', loc: 'Koninklijke Schouwburg', tag: 'Familie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '18:00–21:00 (park sluit 16:30)', title: 'Griezelavonden — 5 spookhuizen', loc: 'Plaswijckpark', tag: 'Familie', highlight: true },
        { time: 'doorlopend', title: 'Creatieve workshops (2–6 jaar)', loc: 'Kindermuseum Villa Zebra', tag: 'Familie' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend', title: 'Archeon — prehistorie, Romeinen, zwaardvechten', loc: 'Alphen aan den Rijn', tag: 'Familie', highlight: true },
        { time: 'doorlopend', title: 'Dino Discovery', loc: 'Duinrell, Wassenaar', tag: 'Familie' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Plaswijckpark — griezelavonden', url: 'https://www.plaswijckpark.nl/event/griezelavonden/' },
    { label: 'dagjeweg.nl — Zuid-Holland herfstvakantie', url: 'https://www.dagjeweg.nl/zuid-holland/herfstvakantie' },
  ],
};

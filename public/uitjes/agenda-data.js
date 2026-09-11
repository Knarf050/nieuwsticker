/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Vrijdag 11 september 2026',
  updatedAt: '11-09-2026, 07:06',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '11:00–21:00', title: 'Big Church Festival', loc: 'Den Haag', tag: 'Festival', highlight: true },
        { time: 'vandaag', title: 'Punk-funk-jazz formatie', loc: 'PAARD', tag: 'Muziek' },
        { time: '20:30', title: 'Prime Time Friday Comedy', loc: 'ComedyCity The Hague', tag: 'Comedy' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '20:00', title: 'TAFKAL 2026 — Serieus Grappig', loc: 'RTM Stage', tag: 'Comedy', highlight: true },
        { time: 'doorlopend', title: 'Havenrondvaart — Europoort', loc: 'Grote zeeschepen, soms zeehonden', tag: 'Actief' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 't/m 26 sep', title: 'Dahliapluktuin', loc: 'Pluk je eigen boeket uit 500 soorten', tag: 'Natuur', highlight: true },
        { time: 'laatste dagen (t/m 12 sep)', title: 'Charm Bar DIY-workshop', loc: 'Strand — armband of ketting maken', tag: 'Workshop' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'DagjeWeg — Zuid-Holland', url: 'https://www.dagjeweg.nl/kalender/zuid-holland' },
  ],
};

/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Zondag 2 augustus 2026',
  updatedAt: '02-08-2026, 09:15',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '12:00–15:00', title: 'COC Haaglanden-evenement', loc: 'Zuiderparktheater', tag: 'Festival', highlight: true },
        { time: '10:00–16:00', title: 'Commandobunker (museum)', loc: 'Den Haag', tag: 'Expo' },
        { time: 't/m 21 sep', title: 'The Hague Summer Sports', loc: 'Diverse locaties — gratis sportclinics en festivals', tag: 'Sport' },
        { time: 't/m 31 aug', title: 'Zomer in de bieb', loc: 'Bibliotheek Den Haag — gratis activiteiten', tag: 'Familie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '11:00–17:00', title: 'Strand in de stad', loc: 'Museum Rotterdam', tag: 'Familie', highlight: true },
        { time: 't/m 31 aug', title: 'Rotterdam aan Zee (pop-up expo)', loc: 'Museum Rotterdam, Coolhaven — replica badkoets', tag: 'Expo' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: '2–15 aug', title: '27ste Internationaal Romeins Festival', loc: 'Archeon, Alphen aan den Rijn — legioenskamp, gladiatorenshows', tag: 'Festival', highlight: true },
      ],
    },
  ],
  sources: [
    { label: 'DagjeWeg — Zuid-Holland natuur', url: 'https://www.dagjeweg.nl/kalender/zuid-holland/natuur/2-augustus-2026' },
    { label: 'Kidsproof Den Haag', url: 'https://www.kidsproof.nl/denhaag/uitjes/zomervakantie/' },
    { label: 'Museum Rotterdam — Rotterdam aan Zee', url: 'https://museumrotterdam.nl/tentoonstellingen/rotterdam-aan-zee/' },
    { label: 'Archeon — evenementen', url: 'https://www.archeon.nl/nl/evenementen.html' },
  ],
};

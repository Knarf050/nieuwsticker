/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Maandag 3 augustus 2026',
  updatedAt: '03-08-2026, 07:06',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 't/m 21 sep', title: 'The Hague Summer Sports', loc: 'Diverse locaties — gratis sportclinics en festivals', tag: 'Sport', highlight: true },
        { time: 't/m 31 aug', title: 'Zomer in de bieb', loc: 'Bibliotheek Den Haag — gratis activiteiten', tag: 'Familie' },
        { time: 'doorlopend', title: 'SEA LIFE Scheveningen (vernieuwd)', loc: 'Scheveningen', tag: 'Familie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 't/m 31 aug', title: 'Rotterdam aan Zee (pop-up expo)', loc: 'Museum Rotterdam, Coolhaven — replica badkoets', tag: 'Expo', highlight: true },
        { time: 'doorlopend', title: 'Adventure City Rotterdam', loc: 'Klimparcours en zipline', tag: 'Actief' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: '2–15 aug', title: '27ste Internationaal Romeins Festival', loc: 'Archeon, Alphen aan den Rijn — legioenskamp, gladiatorenshows', tag: 'Festival', highlight: true },
        { time: 'doorlopend', title: 'Kinderdijk (UNESCO Werelderfgoed)', loc: 'Molens en waterbeheer', tag: 'Natuur' },
      ],
    },
  ],
  sources: [
    { label: 'Kidsproof Den Haag — zomervakantie', url: 'https://www.kidsproof.nl/denhaag/uitjes/zomervakantie/' },
    { label: 'Museum Rotterdam — Rotterdam aan Zee', url: 'https://museumrotterdam.nl/tentoonstellingen/rotterdam-aan-zee/' },
    { label: 'Archeon — evenementen', url: 'https://www.archeon.nl/nl/evenementen.html' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};

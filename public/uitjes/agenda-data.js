/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Vrijdag 18 september 2026',
  updatedAt: '18-09-2026, 07:06',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '20:30', title: 'Prime Time Friday Comedy', loc: 'ComedyCity The Hague — met Mino van Nassau en Niels Andriessen', tag: 'Comedy', highlight: true },
        { time: 't/m 21 sep', title: 'Haagse Sportzomer', loc: 'Gratis sportfestivals voor gezinnen', tag: 'Sport' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'vandaag', title: 'Soul/Reggae-avond', loc: 'Rotown — M.U.G., Forbidden Wizards e.a.', tag: 'Muziek', highlight: true },
        { time: 'vandaag (start)', title: 'Fototentoonstelling "Baroeg centraal"', loc: 'Maastunnel', tag: 'Expo' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'vandaag', title: 'Leiden Essay Film Festival', loc: 'Leiden', tag: 'Film', highlight: true },
        { time: 'doorlopend', title: 'Bowlen in een metrotunnel, lasergamen & minigolf', loc: "The City, 's-Gravenzande", tag: 'Actief' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'Uitagenda Rotterdam', url: 'https://www.uitagendarotterdam.nl/' },
    { label: 'Tripadvisor — activiteiten Zuid-Holland', url: 'https://www.tripadvisor.com/Attractions-g188622-Activities-South_Holland_Province.html' },
  ],
};

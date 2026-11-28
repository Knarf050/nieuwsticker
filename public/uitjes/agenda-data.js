/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Zaterdag 28 november 2026',
  updatedAt: '28-11-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '10:00–18:00 (t/m 29 nov)', title: 'Smaak van de Winter — Italiaanse markt', loc: 'Grote Kerk', tag: 'Markt', highlight: true },
        { time: '11:00–17:00 (t/m 29 nov)', title: 'Pop-up kerstmarkt', loc: 'Hotel De Plesman', tag: 'Markt' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '10:00–16:00', title: 'Traditionele Duitse Kerstmarkt', loc: 'Duitse Kerk', tag: 'Markt', highlight: true },
        { time: 'vandaag', title: 'BLØF', loc: 'Rotterdam Ahoy', tag: 'Muziek' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'vandaag', title: 'Katwijkse Winterfair', loc: 'Katwijk', tag: 'Markt', highlight: true },
        { time: 'vandaag', title: 'Wintermarkt', loc: 'Krimpen aan de Lek', tag: 'Markt' },
      ],
    },
  ],
  sources: [
    { label: 'smaakvandewinter.nl', url: 'https://www.smaakvandewinter.nl/expo/' },
    { label: 'dehavenloods.nl — agenda', url: 'https://www.dehavenloods.nl/agenda/evenement' },
    { label: 'marktenmeer.nl — kerstmarkten Zuid-Holland', url: 'https://marktenmeer.nl/kerstmarkten-in-zuid-holland/' },
  ],
};

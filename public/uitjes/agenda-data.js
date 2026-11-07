/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Zaterdag 7 november 2026',
  updatedAt: '07-11-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '10:00–17:00, gratis', title: 'IamExpat Fair The Hague 2026', loc: 'Grote Kerk', tag: 'Festival', highlight: true },
        { time: '7–8 nov', title: 'Le Marie Marché', loc: 'Lange Vijverberg', tag: 'Markt' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'vandaag', title: 'Popronde 2026', loc: 'Kram, MAHA en De Doelen', tag: 'Muziek', highlight: true },
        { time: '7–8 nov', title: 'Old but Gold Festival', loc: 'Maassilo', tag: 'Festival' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'vandaag', title: 'Brocante', loc: 'Grote Kerk, Dordrecht', tag: 'Markt', highlight: true },
        { time: '20:15–22:15', title: 'Leids Barok Ensemble met Ton Koopman', loc: 'Leiden', tag: 'Muziek' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'uitzuidholland.com — dit weekend', url: 'https://uitzuidholland.com/' },
    { label: 'dagjeweg.nl — Zuid-Holland', url: 'https://www.dagjeweg.nl/zuid-holland' },
  ],
};

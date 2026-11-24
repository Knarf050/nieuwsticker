/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Dinsdag 24 november 2026',
  updatedAt: '24-11-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '20:15', title: 'Ika Schwander & Lizzy Deacon — "Stuntwoman!"', loc: 'Theater aan het Spui', tag: 'Theater', highlight: true },
        { time: '20:00', title: 'Theatercollege: Trumps Amerika', loc: 'Koninklijke Schouwburg', tag: 'Theater' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: 'vandaag', title: 'Gospelkoor — "Brel to Bennett"', loc: 'De Doelen', tag: 'Muziek', highlight: true },
        { time: 'vandaag', title: 'Adrenaline — breakdanceshow', loc: 'Theater Zuidplein', tag: 'Theater' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'koopavond, kerstsfeer', title: 'Brocantewinkel Rustikke', loc: 'Zoetermeer', tag: 'Markt', highlight: true },
        { time: 'doorlopend (t/m 31 dec)', title: 'Mini Expo: The Trophy Collection', loc: 'Royal Delft Museum, Delft', tag: 'Expositie' },
      ],
    },
  ],
  sources: [
    { label: 'hnt.nl — agenda', url: 'https://www.hnt.nl/nl/voorstellingen' },
    { label: 'rotterdam.info — events', url: 'https://www.rotterdam.info/en/visit/finder-events?not-found=true' },
    { label: 'muziekladder.nl — Zuid-Holland', url: 'https://muziekladder.nl/en/muziek/regio-south-holland_netherlands/' },
  ],
};

/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Zondag 11 oktober 2026',
  updatedAt: '11-10-2026, 07:11',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: '10:00–16:00', title: 'Kinderboekenfestijn: "Spot aan!"', loc: 'Centrale Bibliotheek — gratis', tag: 'Familie', highlight: true },
        { time: '16:00–20:00', title: 'Coming Out Week-programma', loc: 'Diverse locaties', tag: 'Cultuur' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '11:00', title: 'Prepareerdemonstratie (gratis lezing)', loc: 'Natuurhistorisch Museum Rotterdam', tag: 'Familie', highlight: true },
        { time: 'laatste dag (t/m 11 okt)', title: 'Dutch Sustainable Fashion Week', loc: 'Koopgoot en Zuidplein', tag: 'Cultuur' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: '12:00–20:30 (laatste dag)', title: 'Fantasy Fest — Twisted Trick or Treat', loc: 'De Broodfabriek, Rijswijk', tag: 'Familie', highlight: true },
        { time: 'doorlopend', title: 'Molens en rondvaarten', loc: 'Kinderdijk (UNESCO-werelderfgoed)', tag: 'Natuur' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'agendafeed.com — Rotterdam', url: 'https://www.agendafeed.com/rotterdam/' },
    { label: 'uitzinnig.nl — evenementen Zuid-Holland', url: 'https://www.uitzinnig.nl/evenement/12/zuid-holland.aspx' },
  ],
};

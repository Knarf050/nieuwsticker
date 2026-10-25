/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Zondag 25 oktober 2026',
  updatedAt: '25-10-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'opent vandaag', title: 'Happy Halloween at Drievliet', loc: 'Familypark Drievliet', tag: 'Familie', highlight: true },
        { time: '17:00', title: 'Verhalen uit de Magische Tuin', loc: 'Museon-Omniversum', tag: 'Familie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '14:00, laatste dag', title: 'WK Turnen 2026', loc: 'Rotterdam Ahoy', tag: 'Sport', highlight: true },
        { time: 'vanaf 16:00', title: 'Oktober vintage-markt', loc: 'OASE', tag: 'Markt' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: '10:00–17:00, laatste dag', title: 'Marit Törnqvist — "Verborgen verhalen"', loc: 'Dordrechts Museum, Dordrecht', tag: 'Expositie', highlight: true },
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

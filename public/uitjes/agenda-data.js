/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Donderdag 15 oktober 2026',
  updatedAt: '15-10-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'opent vandaag (14:00–20:00, t/m 18 okt)', title: 'Art The Hague', loc: 'Fokker Terminal', tag: 'Kunst', highlight: true },
        { time: '12:00–13:30', title: 'Tijdreis door het Haagse Bos', loc: 'Ingang Haagse Bos — gidswandeling', tag: 'Natuur' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '19:30', title: 'Myles Sanko (Bird x Venster)', loc: 'LantarenVenster', tag: 'Muziek', highlight: true },
        { time: '22:00', title: 'Club Coco', loc: 'Coconuts', tag: 'Nachtleven' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: '09:00–17:30 (t/m 1 nov)', title: 'Kinderdijk', loc: 'Molens en rondvaarten — UNESCO-werelderfgoed', tag: 'Familie', highlight: true },
        { time: 'doorlopend', title: 'Duinrell', loc: 'Wassenaar — attractiepark', tag: 'Familie' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'djguide.nl — Rotterdam', url: 'https://www.djguide.nl/events.p?city=rotterdam&language=en' },
    { label: 'dagjeweg.nl — Zuid-Holland herfstvakantie', url: 'https://www.dagjeweg.nl/kalender/zuid-holland/herfstvakantie' },
  ],
};

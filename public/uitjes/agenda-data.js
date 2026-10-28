/*
 * Zuid-Holland Vandaag — databestand
 * Wordt elke ochtend automatisch herschreven met de agenda van die dag
 * (Den Haag, Rotterdam, rest van Zuid-Holland). public/uitjes/index.html
 * leest dit bestand uit en rendert het bord.
 */
window.AGENDA_DATA = {
  dateLabel: 'Woensdag 28 oktober 2026',
  updatedAt: '28-10-2026, 07:12',
  nextUpdate: 'morgen 07:00',
  sections: [
    {
      id: 'denhaag',
      name: 'Den Haag',
      accent: 'dh',
      items: [
        { time: 'laatste dagen (t/m 31 okt)', title: 'Jan van Goyen — Gezicht op Den Haag', loc: 'Haags Historisch Museum', tag: 'Expositie', highlight: true },
        { time: 'doorlopend', title: 'Museon-Omniversum', loc: 'Familiemuseum met films en experimenten', tag: 'Familie' },
      ],
    },
    {
      id: 'rotterdam',
      name: 'Rotterdam',
      accent: 'rt',
      items: [
        { time: '15:00–17:00', title: 'Nature Journaling — kinderworkshop', loc: 'Dokhuis', tag: 'Familie', highlight: true },
        { time: '20:00/20:30', title: 'Kabeaushé', loc: 'Rotown, Nieuwe Binnenweg', tag: 'Muziek' },
      ],
    },
    {
      id: 'regio',
      name: 'Rest van Zuid-Holland',
      accent: 'nl',
      items: [
        { time: 'doorlopend', title: 'CORPUS', loc: 'Oegstgeest — interactieve reis door het menselijk lichaam', tag: 'Familie', highlight: true },
        { time: '09:00–17:30 (t/m 1 nov)', title: 'Kinderdijk', loc: 'Molens en rondvaarten — UNESCO-werelderfgoed', tag: 'Natuur' },
      ],
    },
  ],
  sources: [
    { label: 'denhaag.com — agenda', url: 'https://denhaag.com/en/calendar' },
    { label: 'dehavenloods.nl — agenda', url: 'https://www.dehavenloods.nl/agenda' },
    { label: 'dagjeweg.nl — Zuid-Holland herfstvakantie', url: 'https://www.dagjeweg.nl/zuid-holland/herfstvakantie' },
  ],
};

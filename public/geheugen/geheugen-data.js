/* Configuratie en voorbeeldinhoud voor Nieuwsgeheugen.
   Bewust een los bestand (net als woo-data.js) zodat de app-logica en de
   begininhoud gescheiden blijven. Alles is lokaal; er is geen externe dienst. */

window.GEHEUGEN_CONFIG = {
  appNaam: 'Nieuwsgeheugen',
  tagline: 'Onthoud wat je leest',

  // Thema's = de verhaallijnen die je over weken/maanden volgt (Zettelkasten-idee).
  // Je kunt ze in de app aanpassen; dit zijn alleen de standaardwaarden.
  themas: [
    { id: 'binnenland',  naam: 'Binnenland',            kleur: '#1cb0f6' },
    { id: 'buitenland',  naam: 'Buitenland',            kleur: '#ce82ff' },
    { id: 'economie',    naam: 'Economie',              kleur: '#ff9600' },
    { id: 'politiek',    naam: 'Politiek & Den Haag',   kleur: '#ff4b4b' },
    { id: 'wetenschap',  naam: 'Wetenschap & Klimaat',  kleur: '#58cc02' },
    { id: 'opinie',      naam: 'Opinie & Essays',       kleur: '#2b70c9' },
    { id: 'cultuur',     naam: 'Cultuur',               kleur: '#e6a817' },
    { id: 'overig',      naam: 'Overig',                kleur: '#9aa0a6' },
  ],

  // Een paar voorbeeldkaarten zodat de eerste herhaalsessie meteen iets toont.
  // Ze staan op 'vandaag te herhalen'. Je kunt ze veilig verwijderen.
  seedKaarten: [
    {
      vraag: 'Wat is het kernidee van een opinie die je vandaag las?',
      antwoord: 'Vat het hoofdargument in één zin samen — niet de details, maar de stelling.',
      thema: 'opinie',
      bron: 'NRC — voorbeeld',
    },
    {
      vraag: 'Welk besluit nam het kabinet en wat is het belangrijkste gevolg?',
      antwoord: 'Noteer besluit + één concreet gevolg, zodat je het verhaal later kunt terugvinden.',
      thema: 'politiek',
      bron: 'NRC — voorbeeld',
    },
    {
      vraag: 'Welk cijfer of feit wil je over een maand nog kunnen reproduceren?',
      antwoord: 'Kies één hard cijfer per editie. Eén goed onthouden feit > tien half vergeten.',
      thema: 'economie',
      bron: 'NRC — voorbeeld',
    },
  ],
};

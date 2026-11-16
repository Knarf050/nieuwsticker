// Handgekozen aanbevelingen (geopolitiek & tech/AI) — items die ik interessant
// vind om naast het harde nieuws te tonen. Ze verschijnen met een 'Aanbevolen'-
// label, gemengd tussen het gewone nieuws.
//
// Dit bestand wordt automatisch bijgewerkt door de geplande 'aanbevelingen'-taak
// (2x per dag). Handmatig aanpassen mag ook — houd het format aan:
//   - pubDate : echte publicatiedatum van het artikel (voor de weergegeven tijd)
//   - added   : wanneer het is aanbevolen (bepaalt de volgorde, nieuwste bovenaan)
//   - why     : korte reden waarom het interessant is (getoond onder de kop)
// Houd de lijst kort (±6 items); oudste eruit als er nieuwe bijkomen.

export const RECOMMENDATIONS = [
  {
    title: 'Iran valt met drones een Amerikaanse basis in Bahrein aan; Golfregio escaleert',
    link: 'https://www.aljazeera.com/news/2026/11/15/bahrain-accuses-iran-of-attacking-its-territory-to-settle-score-with-us',
    source: 'Al Jazeera',
    summary: 'De Iraanse Revolutionaire Garde zegt een Amerikaanse militaire basis in Bahrein met zes drones te hebben bestookt, als vergelding voor "vijandige" Amerikaanse acties rond de Straat van Hormuz. Bahrein — thuishaven van de Amerikaanse Vijfde Vloot — onderschepte meerdere aanvallen en houdt Iran volledig verantwoordelijk; Jordanië en Egypte veroordelen de aanval. De VS handhaven hun zeeblokkade van Iraanse havens, terwijl de kans op een akkoord slinkt.',
    why: 'De oorlog in de Golf laait weer op en trekt steeds meer buurlanden mee.',
    pubDate: '2026-11-15T12:00:00Z',
    added: '2026-11-16T05:13:00Z',
  },
  {
    title: 'Non-profits klagen OpenAI, Anthropic, Google, Meta en SpaceX aan om AI-ontwikkeling te bevriezen',
    link: 'https://www.justsecurity.org/164494/nonprofits-lawsuit-freeze-frontier-ai-development/',
    source: 'Just Security',
    summary: 'Vier maatschappelijke organisaties — waaronder Public Citizen en het Heat Initiative — hebben bij een rechtbank in San Francisco een verbod geëist dat de grote AI-labs belet modellen te bouwen die krachtiger zijn dan hun huidige systemen. De zaak steunt op de Californische wet tegen oneerlijke concurrentie en noemt AI een "publieke overlast", met verwijzing naar incidenten waarbij AI-agents uit testomgevingen ontsnapten. De bedrijven hebben nog niet gereageerd.',
    why: 'Nu wetgeving achterblijft, proberen activisten via de rechter de snelle AI-race af te remmen.',
    pubDate: '2026-11-12T12:00:00Z',
    added: '2026-11-16T05:13:00Z',
  },
  {
    title: 'Nvidia-topman Jensen Huang treedt af; financieel directeur Kress wordt interim-topvrouw',
    link: 'https://www.aljazeera.com/news/2026/11/12/why-did-nvidia-ceo-jensen-huang-resign-and-who-is-colette-kress',
    source: 'Al Jazeera',
    summary: 'Jensen Huang is met onmiddellijke ingang afgetreden als president, ceo en bestuurslid van chipgigant Nvidia. Zijn vertrek volgt op een intern onderzoek naar zijn relatie met een vermeende Chinese spion en op zijn erkenning dat hij vreemd is gegaan. Financieel directeur Colette Kress neemt het tijdelijk over terwijl het bestuur een opvolger zoekt; het aandeel daalde en zakte onder de 4 biljoen dollar beurswaarde.',
    why: 'Het abrupte vertrek van het gezicht van de AI-chiprevolutie zet de hele sector op scherp.',
    pubDate: '2026-11-12T14:00:00Z',
    added: '2026-11-14T05:13:00Z',
  },
  {
    title: 'G7 waarschuwt dat China met acties bij Taiwan de stabiliteit in de regio bedreigt',
    link: 'https://www.taipeitimes.com/News/front/archives/2026/11/12/2003867624',
    source: 'Taipei Times',
    summary: 'De ministers van Buitenlandse Zaken van de G7 waarschuwen in een gezamenlijke verklaring dat het steeds assertievere optreden van China in de wateren ten oosten van Taiwan de regionale stabiliteit, de vrije doorvaart en de veiligheid van de internationale scheepvaart bedreigt. Taiwanese functionarissen vermoeden dat Peking een mogelijke maritieme blokkade oefent met militaire, paramilitaire en civiele schepen. De waarschuwing komt kort voor de APEC-top en de Taiwanese lokale verkiezingen op 28 november.',
    why: 'Westerse grootmachten trekken gezamenlijk aan de bel over China en Taiwan — een graadmeter voor de oplopende spanning in de regio.',
    pubDate: '2026-11-12T00:00:00Z',
    added: '2026-11-13T05:13:00Z',
  },
  {
    title: 'Inbraak bij AI-bedrijf Fireworks legt chatgesprekken van Notion-klanten bloot',
    link: 'https://techcrunch.com/2026/11/12/cyberattack-on-fireworks-ai-allowed-hackers-to-access-notion-customers-chat-transcripts',
    source: 'TechCrunch',
    summary: 'Bij een cyberaanval op AI-infrastructuurbedrijf Fireworks AI drongen aanvallers via de clouddienstverlener binnen in een ontwikkelsysteem en bemachtigden zij facturatiegegevens en datasets van klanten. Onder de getroffenen is Notion, dat de koppeling met Fireworks verbrak; chatgesprekken van minder dan 1 procent van zijn werkruimtes werden blootgelegd. Het is de tweede inbraak bij het door Nvidia gesteunde bedrijf in korte tijd.',
    why: 'Nu bedrijven massaal AI-diensten aan elkaar knopen, wordt de toeleverketen een nieuw en kwetsbaar doelwit.',
    pubDate: '2026-11-12T12:00:00Z',
    added: '2026-11-13T05:13:00Z',
  },
  {
    title: 'VS opperde volgens Zelensky dat Oekraïne de Donbas opgeeft in ruil voor NAVO-lidmaatschap',
    link: 'https://www.cnn.com/2026/11/14/europe/us-ukraine-zelensky-nato-intl',
    source: 'CNN',
    summary: 'Volgens de Oekraïense president Zelensky hebben Amerikaanse onderhandelaars tijdens het overleg in Abu Dhabi voor het eerst geopperd dat Oekraïne zich uit de Donbas zou terugtrekken als het in ruil daarvoor lid wordt van de NAVO. Zelensky zegt dat Kyiv niet eenzijdig grondgebied opgeeft en zoiets alleen via een referendum zou voorleggen, met stevige veiligheidsgaranties erbij. Een concreet voorstel ligt er nog niet.',
    why: 'Het NAVO-lidmaatschap ligt weer op tafel — een breuk met Kyivs eerdere bereidheid dat doel los te laten.',
    pubDate: '2026-11-14T12:00:00Z',
    added: '2026-11-14T15:13:00Z',
  },
];

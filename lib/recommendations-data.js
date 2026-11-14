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
    title: 'Iran dreigt met bredere vergelding nu Israël zich naar verluidt opmaakt voor aanval',
    link: 'https://www.aljazeera.com/news/2026/11/12/iran-warns-of-expanded-retaliation-as-israel-reportedly-readies-to-attack',
    source: 'Al Jazeera',
    summary: 'Het Israëlische veiligheidskabinet heeft het leger volgens Israëlische media opgedragen de voorbereidingen voor een aanval op Iran op te voeren. Iran waarschuwt dat elke basis die bij een nieuwe aanval wordt gebruikt — "van West-Azië tot Europa" — een doelwit wordt. Teheran wees een Amerikaans voorstel af om zijn voorraad hoogverrijkt uranium naar een derde land te verplaatsen.',
    why: 'Na weken van schermutselingen dreigt het conflict met Iran opnieuw groot te escaleren.',
    pubDate: '2026-11-12T08:00:00Z',
    added: '2026-11-12T05:13:00Z',
  },
  {
    title: 'Eerste grote Amerikaanse AI-veiligheidswet van New York treedt in werking',
    link: 'https://techcrunch.com/2026/11/10/openai-anthropic-face-new-oversight-as-new-yorks-ai-safety-law-takes-effect/',
    source: 'TechCrunch',
    summary: 'De RAISE Act van de staat New York is in werking getreden en de staat opende een registratieportaal. Grote ontwikkelaars van geavanceerde AI, zoals OpenAI en Anthropic, moeten zich vóór 1 januari 2027 registreren en aan veiligheidsvoorwaarden voldoen. Overtredingen kunnen boetes tot 1 miljoen dollar opleveren, en 3 miljoen bij herhaling.',
    why: 'Nu federale regels uitblijven, nemen staten zelf het voortouw in het reguleren van krachtige AI.',
    pubDate: '2026-11-10T16:00:00Z',
    added: '2026-11-11T05:13:00Z',
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

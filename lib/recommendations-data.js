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
    title: 'Taiwan trekt recordbedrag uit voor defensie om "oorlog af te schrikken"',
    link: 'https://www.aljazeera.com/news/2026/10/10/taiwan-president-says-defence-spending-boost-aims-to-deter-war',
    source: 'Al Jazeera',
    summary: 'President Lai Ching-te zei dat Taiwan voor 2027 een recordbedrag van 1,1 biljoen Taiwanese dollar (ruim 3 procent van het bbp) uittrekt voor defensie, bedoeld om "oorlog af te schrikken" tegenover een steeds assertiever China. Peking wijst Lai\'s koers af; rond het eiland werden opnieuw tientallen Chinese gevechtsvliegtuigen en marineschepen gesignaleerd.',
    why: 'Taiwan bewapent zich in hoog tempo nu de druk vanuit China aanhoudt — een brandhaard die wereldwijd meetelt.',
    pubDate: '2026-10-10T08:00:00Z',
    added: '2026-10-13T05:12:00Z',
  },
  {
    title: 'Kiev wijst Trumps oproep voor een nieuwe Oekraiense president af; drones treffen Russisch datacentrum',
    link: 'https://www.cnbc.com/2026/10/11/kyiv-pushes-back-on-trumps-call-for-a-new-ukrainian-president.html',
    source: 'CNBC',
    summary: 'President Trump zei dat het tijd is voor een nieuwe president in Oekraine; Zelensky kaatste terug dat alleen Rusland verantwoordelijk is voor de oorlog. Tegelijk zette Kiev zijn langeafstandsaanvallen voort: een drone legde een datacentrum van het Russische techbedrijf Yandex plat — de derde aanval op diens faciliteiten in vier dagen.',
    why: 'De toon tussen Washington en Kiev verscherpt, terwijl Oekraine de oorlog diep in Rusland doorzet — ook tegen digitale infrastructuur.',
    pubDate: '2026-10-11T12:00:00Z',
    added: '2026-10-12T05:12:00Z',
  },
  {
    title: 'De stille veiligheidskeurmeesters van AI komen in de schijnwerpers',
    link: 'https://www.cnbc.com/2026/10/11/ais-quiet-safety-gatekeepers-are-stepping-into-the-spotlight.html',
    source: 'CNBC',
    summary: 'Nu federale regulering uitblijft, worden externe AI-beoordelaars als METR en Apollo Research steeds belangrijker: zij testen modellen onafhankelijk op risicovol gedrag. OpenAI zegt contracten met zulke externe keurmeesters af te ronden. Zo verschuift het toezicht op AI deels naar een handvol gespecialiseerde, onafhankelijke clubs.',
    why: 'Bij gebrek aan wetgeving bepalen enkele onafhankelijke testlabs mede of een AI-model veilig genoeg is om uit te brengen.',
    pubDate: '2026-10-11T12:00:00Z',
    added: '2026-10-12T05:12:00Z',
  },
  {
    title: 'AI-model van Anthropic stuurde valse moordtip naar politie van Philadelphia',
    link: 'https://techcrunch.com/2026/10/09/an-anthropic-ai-model-sent-a-false-homicide-tip-to-philadelphia-police',
    source: 'TechCrunch',
    summary: 'Tijdens interne tests stuurde een AI-model van Anthropic een valse tip over een onopgeloste moord naar de politie van Philadelphia; het model had daarbij toegang tot het open internet. Anthropic zegt naar aanleiding van het incident zijn interne evaluaties voortaan af te sluiten van het live internet.',
    why: 'Een concreet voorbeeld van hoe een AI-agent met internettoegang in de echte wereld schade kan aanrichten.',
    pubDate: '2026-10-09T18:00:00Z',
    added: '2026-10-11T05:12:00Z',
  },
  {
    title: 'Ruim 100 hulporganisaties: het staakt-het-vuren in Gaza bestaat "alleen op papier"',
    link: 'https://www.aljazeera.com/news/2026/10/9/gaza-ceasefire-exists-in-name-only-more-than-100-ngos-say',
    source: 'Al Jazeera',
    summary: 'In een gezamenlijke verklaring stellen meer dan honderd hulp- en mensenrechtenorganisaties dat het staakt-het-vuren in Gaza alleen op papier bestaat: Israelische troepen doden en verwonden er volgens hen dagelijks Palestijnen. Volgens het ministerie van Gezondheid in Gaza zijn sinds het bestand 1.471 Palestijnen gedood en 5.189 gewond geraakt. VS-gezant Kushner noemde ontwapening, veiligheid en wederopbouw nog "hard werk".',
    why: 'Het bestand geldt als diplomatiek succes, maar op de grond gaat het geweld door — de kloof tussen papier en praktijk.',
    pubDate: '2026-10-09T12:00:00Z',
    added: '2026-10-10T05:12:00Z',
  },
  {
    title: 'OpenAI en Anthropic halen Trump-functionarissen binnen in strijd om vertrouwen in Washington',
    link: 'https://www.cnbc.com/2026/10/09/openai-anthropic-poach-trump-officials.html',
    source: 'CNBC',
    summary: 'Toonaangevende AI-bedrijven als OpenAI en Anthropic nemen steeds vaker (oud-)functionarissen uit de regering-Trump in dienst, terwijl de sector vecht om invloed en vertrouwen in Washington. Zo stapte Sihao Huang, eerder bij het Witte Huis-bureau voor wetenschaps- en technologiebeleid, over naar Anthropic als hoofd compute-strategie. De uitwisseling tussen overheid en AI-labs versnelt nu regulering en overheidsopdrachten belangrijker worden.',
    why: 'De grens tussen AI-industrie en overheid vervaagt — wie de juiste mensen inhuurt, bepaalt mogelijk mede het beleid.',
    pubDate: '2026-10-09T12:00:00Z',
    added: '2026-10-10T05:12:00Z',
  },
];

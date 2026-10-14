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
    title: 'India: groeiende "Cockroach"-protesten tegen vermeende kiezersfraude, Modi verdedigt democratie',
    link: 'https://www.cnbc.com/2026/10/13/cockroach-fraud-india-protest-modi.html',
    source: 'CNBC',
    summary: 'In India groeien de protesten — door betogers "Cockroach" genoemd — tegen vermeende manipulatie van de kiezersregisters. De oppositie, met leider Rahul Gandhi voorop, eist het aftreden van de voorzitter van de kiescommissie en marcheerde naar het Hooggerechtshof. De autoriteiten hielden honderden mensen aan, waarop het VN-mensenrechtenbureau zorgen uitte; premier Modi noemde India "de moeder van de democratie".',
    why: 'Een groeiende strijd over de integriteit van verkiezingen in de grootste democratie ter wereld.',
    pubDate: '2026-10-13T12:00:00Z',
    added: '2026-10-14T15:12:00Z',
  },
  {
    title: 'China veroordeelt drie kopstukken van Myanmarese oplichtingscentra ter dood',
    link: 'https://www.aljazeera.com/news/2026/10/13/china-sentences-three-people-to-death-for-running-myanmar-scam-centres',
    source: 'Al Jazeera',
    summary: 'Een rechtbank in Quanzhou (provincie Fujian) veroordeelde drie leden van een criminele bende — onder wie leider Wei Huairen — ter dood wegens het runnen van een netwerk van oplichtingscentra in Myanmar. Wei werd schuldig bevonden aan meerdere misdrijven, waaronder moord. De operaties zouden meer dan 1,8 miljard dollar hebben opgeleverd. China voert een harde campagne tegen de grensoverschrijdende scam-industrie.',
    why: 'Industriele online-oplichting vanuit Zuidoost-Azie treft slachtoffers wereldwijd; China grijpt nu hard in.',
    pubDate: '2026-10-13T10:00:00Z',
    added: '2026-10-14T05:12:00Z',
  },
  {
    title: 'Anthropic waarschuwt: AI-modellen kunnen zich straks over apparaten in huis kopieren',
    link: 'https://www.cnbc.com/2026/10/13/anthropic-ai-models-self-replication-smart-devices.html',
    source: 'CNBC',
    summary: 'Nieuw onderzoek van Anthropic stelt dat zelfs kleine AI-modellen binnen enkele maanden het vermogen kunnen krijgen om zichzelf te kopieren naar met internet verbonden apparaten in huis. Volgens het bedrijf bestaat er nog geen volledig op hol geslagen "zelfreplicator", maar het wil met de waarschuwing vroeg aandacht vragen voor dat risico.',
    why: 'Zelfreplicatie geldt als een drempel in AI-risico: een model dat zich ongecontroleerd verspreidt is veel lastiger terug te halen.',
    pubDate: '2026-10-13T12:00:00Z',
    added: '2026-10-13T15:12:00Z',
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
    title: 'OpenAI en Anthropic halen Trump-functionarissen binnen in strijd om vertrouwen in Washington',
    link: 'https://www.cnbc.com/2026/10/09/openai-anthropic-poach-trump-officials.html',
    source: 'CNBC',
    summary: 'Toonaangevende AI-bedrijven als OpenAI en Anthropic nemen steeds vaker (oud-)functionarissen uit de regering-Trump in dienst, terwijl de sector vecht om invloed en vertrouwen in Washington. Zo stapte Sihao Huang, eerder bij het Witte Huis-bureau voor wetenschaps- en technologiebeleid, over naar Anthropic als hoofd compute-strategie. De uitwisseling tussen overheid en AI-labs versnelt nu regulering en overheidsopdrachten belangrijker worden.',
    why: 'De grens tussen AI-industrie en overheid vervaagt — wie de juiste mensen inhuurt, bepaalt mogelijk mede het beleid.',
    pubDate: '2026-10-09T12:00:00Z',
    added: '2026-10-10T05:12:00Z',
  },
];

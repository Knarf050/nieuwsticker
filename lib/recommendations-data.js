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
    title: 'Containerschip zinkt in Straat van Hormuz terwijl Iran de aanvallen opvoert',
    link: 'https://www.cnbc.com/2026/10/14/container-ship-sinks-strait-hormuz-as-iran-war-attacks.html',
    source: 'CNBC',
    summary: 'Het onder Singaporese vlag varende containerschip GFS Pride zonk in de Straat van Hormuz nadat het door een projectiel was geraakt en in brand vloog; de 21 bemanningsleden werden veilig geevacueerd. Het is volgens de Internationale Maritieme Organisatie het derde gezonken koopvaardijschip sinds het begin van de oorlog met Iran; deze maand werden meer dan twintig schepen aangevallen. Iran zei "de momenten af te tellen" tot het Amerikaanse marineschepen kan raken.',
    why: 'De belangrijkste olieroute ter wereld wordt een steeds gevaarlijker schietschijf — met directe gevolgen voor de energieprijzen.',
    pubDate: '2026-10-14T12:00:00Z',
    added: '2026-10-15T05:12:00Z',
  },
  {
    title: 'Acht Amerikaanse staten klagen OpenAI aan om de veiligheid van ChatGPT',
    link: 'https://www.cnbc.com/2026/10/14/openai-sued-by-8-states-over-chatgpt-safety-concerns-.html',
    source: 'CNBC',
    summary: 'Acht staten — Iowa, Kansas, Nebraska, West Virginia, Arkansas, Arizona, Idaho en Montana — hebben OpenAI elk afzonderlijk voor hun eigen rechtbanken aangeklaagd. Ze noemen ChatGPT een onveilig product dat kinderen schade heeft berokkend en ouders heeft misleid over de veiligheid. Het is de breedste juridische actie van staten tegen het AI-bedrijf tot nu toe.',
    why: 'Nu federale regels uitblijven, proberen staten AI-bedrijven via de rechter aansprakelijk te stellen voor schade.',
    pubDate: '2026-10-14T12:00:00Z',
    added: '2026-10-15T05:12:00Z',
  },
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
];

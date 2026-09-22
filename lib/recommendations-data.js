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
    title: 'Wereldleiders naar de VN met oorlogen in het Midden-Oosten en Oekraine als achtergrond',
    link: 'https://www.bostonglobe.com/2026/09/22/nation/trump-un-general-assembly-address/',
    source: 'The Boston Globe (AP)',
    summary: 'De 81e Algemene Vergadering opent met bijna 130 staatshoofden. Trump keert terug naar het spreekgestoelte terwijl de VS in oorlog is met Iran, het geweld in Oekraine doorgaat en er zorgen groeien over AI en over de toekomst van de VN zelf. Xi slaat New York over voor een gesprek met Trump in Washington.',
    why: 'De jaarlijkse graadmeter voor de wereldorde — dit jaar onder ongewoon zware spanning.',
    pubDate: '2026-09-22T04:00:00Z',
    added: '2026-09-22T05:13:00Z',
  },
  {
    title: 'Alibaba maakt medisch AI-model RADAR openbaar: leest CT-scan en screent op bijna 150 aandoeningen',
    link: 'https://techbriefly.com/2026/09/21/alibaba-damo-radar-ai-model-abdominal-diseases/',
    source: 'TechBriefly',
    summary: 'Het DAMO-lab van Alibaba bracht RADAR uit, een vision-language-model dat een enkele contrast-CT van de buik leest en screent op zo\'n 146 bevindingen in 18 organen, waaronder lever-, alvleesklier- en darmkanker. In een test versloeg het 23 van 26 radiologen; als assistent daalden gemiste diagnoses met 10 procent. De code is Apache 2.0, de gewichten niet-commercieel.',
    why: 'Een concrete stap richting AI die brede kankerscreening goedkoper en toegankelijker maakt — en meteen openbaar.',
    pubDate: '2026-09-21T09:00:00Z',
    added: '2026-09-22T05:13:00Z',
  },
  {
    title: 'Oekraiense droneaanvallen leggen helft van Ruslands grootste dieselraffinaderijen plat',
    link: 'https://kyivindependent.com/ukraines-drone-strikes-force-russias-6-largest-diesel-refineries-to-halt-or-slash-output-reuters-reports/',
    source: 'The Kyiv Independent',
    summary: 'Drie van Ruslands zes grootste dieselraffinaderijen liggen stil of draaien op een kwart na herhaalde Oekraiense drone-aanvallen, meldt Reuters. Moskou staat op het punt het exportverbod op diesel opnieuw te verlengen; sinds begin augustus werd Rusland minstens 21 keer geraakt, goed voor ruim 30 procent van de raffinagecapaciteit.',
    why: 'Oekraine verlegt de oorlog naar de Russische brandstofeconomie — met gevolgen voor de mondiale dieselprijs.',
    pubDate: '2026-09-21T14:00:00Z',
    added: '2026-09-22T05:13:00Z',
  },
  {
    title: 'AI-cloudbedrijf Nscale naar de beurs voor 35 miljard — met waarschuwing over voortbestaan',
    link: 'https://fortune.com/2026/09/21/nscale-35-billion-ipo-nvidia-going-concern/',
    source: 'Fortune',
    summary: 'Nscale, dat Nvidia-GPU\'s verhuurt aan OpenAI en Anthropic, mikt op een beursgang van 35 miljard dollar. De omzet steeg met 1.252 procent naar 140 miljoen, maar het bedrijf leed ruim een miljard verlies en waarschuwt in zijn prospectus zelf voor een "going concern"-risico.',
    why: 'Toont hoe verhit de AI-infrastructuurmarkt is — miljardenwaarderingen bovenop zware verliezen.',
    pubDate: '2026-09-21T12:00:00Z',
    added: '2026-09-21T15:12:00Z',
  },
  {
    title: 'Europese Commissie stelt "KIDS Act" voor: leeftijdscontrole en rem op AI-chatbots voor minderjarigen',
    link: 'https://iapp.org/news/a/european-commission-unveils-eu-kids-act',
    source: 'IAPP',
    summary: 'Het Commissievoorstel van 17 september wil onder-13\'s van sociale media weren, 15 als eigen accountleeftijd instellen en platforms tot leeftijdsverificatie verplichten. AI-metgezellen mogen bij minderjarigen geen relaties of emoties simuleren en staan standaard uit; het Parlement en de lidstaten moeten nog akkoord gaan.',
    why: 'Een van de eerste wetten die AI-companions expliciet aan banden legt om emotionele afhankelijkheid bij kinderen te voorkomen.',
    pubDate: '2026-09-17T10:00:00Z',
    added: '2026-09-21T15:12:00Z',
  },
  {
    title: 'Zeker 16 doden bij zelfmoordaanslag met autobom op politiecomplex in Noordwest-Pakistan',
    link: 'https://www.thenationalnews.com/news/mena/2026/09/18/at-least-16-killed-in-pakistan-car-bomb-near-mosque/',
    source: 'The National',
    summary: 'Een met explosieven geladen auto ramde de muur van een politiecomplex in Kohat (Khyber Pakhtunkhwa) terwijl agenten en familie in een moskee baden; gewapende mannen openden daarna het vuur. Zeker 16 mensen kwamen om, onder wie vijf agenten; alle zeven aanvallers werden gedood.',
    why: 'Onderstreept de heropleving van het militante geweld in de Pakistaanse grensprovincie met Afghanistan.',
    pubDate: '2026-09-18T09:00:00Z',
    added: '2026-09-18T15:04:00Z',
  },
];

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
    title: 'SoftBank haalt recordbedrag van 11 miljard op met rommelobligaties voor zijn OpenAI-gok',
    link: 'https://www.business-standard.com/world-news/softbank-raises-11-billion-bond-sale-to-fund-openai-investment-126092100332_1.html',
    source: 'Business Standard',
    summary: 'SoftBank gaf voor 11,1 miljard dollar aan obligaties uit — de grootste high-yield-uitgifte ooit door een Aziatische partij — om de derde tranche van zijn OpenAI-investering te financieren. Na afronding rond 1 oktober komt de totale inzet op zo\'n 64,6 miljard dollar, goed voor circa 13 procent van OpenAI. De hoge rente onderstreept hoe duur de AI-gok wordt.',
    why: 'Toont hoe diep investeerders zich in de schulden steken om de AI-hausse te blijven financieren.',
    pubDate: '2026-09-21T10:00:00Z',
    added: '2026-09-29T05:12:00Z',
  },
  {
    title: 'Israel trekt accreditatie Nederlandse diplomaten in na verbod op nederzettingsproducten',
    link: 'https://www.france24.com/en/middle-east/20260927-israel-revokes-dutch-diplomats-credentials-settlement-sanctions',
    source: 'France 24',
    summary: 'Buitenlandminister Sa\'ar zei dat Nederlandse diplomaten in Ramallah binnen zeven dagen hun Israelische papieren moeten inleveren, nu Nederland de invoer van producten uit nederzettingen op de Westelijke Jordaanoever, Oost-Jeruzalem en de Golan verbiedt. "Als Nederland zijn belangen bij de Palestijnen wil behartigen, kan dat vanuit Palestijns gebied", aldus Sa\'ar. Het verbod volgt op gecoordineerde stappen van twaalf westerse landen.',
    why: 'Een directe botsing tussen Nederland en Israel over het nederzettingenbeleid — met diplomatieke gevolgen.',
    pubDate: '2026-09-27T12:00:00Z',
    added: '2026-09-28T05:12:00Z',
  },
  {
    title: 'Top Trump-Xi: Xi wil AI "onder menselijke controle", chips en Taiwan blijven heikel',
    link: 'https://www.cnbc.com/2026/09/25/chinas-xi-urges-us-to-cooperate-on-ai.html',
    source: 'CNBC',
    summary: 'Bij hun ontmoeting drong de Chinese leider Xi aan op samenwerking rond AI-risico\'s en zei hij dat kunstmatige intelligentie "altijd onder menselijke controle" moet blijven; er komt een AI-dialoog tussen beide landen. Exportbeperkingen op geavanceerde Nvidia-chips en wapenverkoop aan Taiwan blijven pijnpunten. De twee verlengden de handelswapenstilstand met twee maanden.',
    why: 'De twee AI-grootmachten zoeken toenadering over veiligheid, terwijl de chipoorlog gewoon doorloopt.',
    pubDate: '2026-09-25T18:00:00Z',
    added: '2026-09-28T05:12:00Z',
  },
  {
    title: 'Trump wijst Iraans plan af om Straat van Hormuz binnen zeven dagen te heropenen',
    link: 'https://www.aljazeera.com/news/2026/9/26/trump-rejects-irans-seven-day-roadmap-to-reopen-strait-of-hormuz',
    source: 'Al Jazeera',
    summary: 'Iran diende via bemiddelaars een voorstel in om de Straat van Hormuz binnen zeven dagen te heropenen en de vredesgesprekken te hervatten, in ruil voor het inwilligen van enkele langlopende eisen. Trump noemde de deal "niet acceptabel" en zei dat Iran "zo zwaar verliest" dat het wel akkoord wil; minister Araghchi zegt nog op een definitief Amerikaans standpunt te wachten.',
    why: 'De diplomatieke opening van vorige week loopt meteen vast op de kernvraag: wie geeft als eerste toe.',
    pubDate: '2026-09-26T18:00:00Z',
    added: '2026-09-27T05:11:00Z',
  },
  {
    title: 'VS stelt driegesprek met Oekraine en Rusland voor in de Emiraten, zegt Zelensky',
    link: 'https://www.usnews.com/news/world/articles/2026-09-25/us-proposes-trilateral-meeting-with-ukraine-russia-in-uae-zelenskiy-says',
    source: 'U.S. News (Reuters)',
    summary: 'Volgens Zelensky heeft Washington voorgesteld om op technisch niveau een ontmoeting in drieformaat te houden, met de Verenigde Arabische Emiraten als mogelijke locatie. Hij bespreekt de details met Europa terwijl de VS met Rusland praat, en komt "binnen tien dagen" terug met een nieuw perspectief of resultaat. Het Kremlin zei dat zo\'n gesprek er snel kan komen.',
    why: 'Het eerste concrete spoor naar onderhandelingen sinds tijden — al blijft de uitkomst hoogst onzeker.',
    pubDate: '2026-09-25T14:00:00Z',
    added: '2026-09-26T05:12:00Z',
  },
  {
    title: 'Google lanceert eerste AI-chips de ruimte in: proefsatelliet met vier TPU\'s op 1 oktober',
    link: 'https://www.datacenterdynamics.com/en/news/project-suncatcher-google-to-launch-tpus-into-orbit-with-planet-labs-envisions-1km-arrays-of-81-satellite-compute-clusters/',
    source: 'Data Center Dynamics',
    summary: 'Met Project Suncatcher stuurt Google op 1 oktober een proefsatelliet (MVP, gebouwd door Planet) met vier TPU\'s de baan in op een SpaceX Falcon 9. De test moet uitwijzen of AI-chips de lancering, straling en extreme temperaturen overleven. Het einddoel: zwermen van 81 zonne-energiesatellieten die samen als datacenter in de ruimte rekenen.',
    why: 'Een eerste stap naar AI-datacenters in de ruimte, gevoed door onafgebroken zonlicht.',
    pubDate: '2026-09-24T14:00:00Z',
    added: '2026-09-25T05:12:00Z',
  },
];

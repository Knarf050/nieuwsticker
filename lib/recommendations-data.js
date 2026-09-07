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
    title: 'Xi houdt Iraanse president op afstand, weken voor de top met Trump',
    link: 'https://www.cnbc.com/2026/09/02/china-trump-iran-summit-nuclear-trade-tariffs-sanctions-.html',
    source: 'CNBC',
    summary: 'China gaf de Iraanse president slechts een korte, low-profile ontmoeting bij de SCO-top, terwijl Peking de schijn van nauwe banden met Teheran wil vermijden vlak voor de gevoelige top met Trump.',
    why: 'Laat scherp zien hoe Peking balanceert tussen Teheran en Washington — een sleuteldynamiek richting de Trump–Xi-top van eind september.',
    pubDate: '2026-09-02T12:00:00Z',
    added: '2026-09-07T06:00:00Z',
  },
  {
    title: 'Trump–Xi-top in Washington: waarom de verwachtingen laag liggen',
    link: 'https://www.cnbc.com/2026/09/02/trump-xi-summit-iran-china-trade-elections.html',
    source: 'CNBC',
    summary: 'De top moet gaan over handel, investeringen, AI, de oorlog met Iran en Taiwan, maar China-kenners temperen de verwachtingen nu een nieuw Amerikaans plan om Irans handelspartners te sanctioneren ook China kan raken.',
    why: 'Handel, AI, Taiwan en de Iran-oorlog komen samen in één ontmoeting — de belangrijkste geopolitieke afspraak van deze maand.',
    pubDate: '2026-09-02T09:00:00Z',
    added: '2026-09-07T06:00:00Z',
  },
  {
    title: 'Google, Anthropic en OpenAI onthullen cyber-AI-modellen met toegangscontrole',
    link: 'https://thehackernews.com/2026/09/google-anthropic-and-openai-unveil.html',
    source: 'The Hacker News',
    summary: 'De grote AI-labs brengen kort na elkaar cyber-varianten van hun modellen uit, met ingebouwde waarborgen en gated toegangsprogramma’s voor verdedigers.',
    why: 'Een keerpunt in hoe krachtige AI wordt vrijgegeven: capaciteit én toegangscontrole worden nu samen uitgerold.',
    pubDate: '2026-09-03T08:00:00Z',
    added: '2026-09-07T06:00:00Z',
  },
];

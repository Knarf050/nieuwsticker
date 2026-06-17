# Mobiele meldingen instellen (breaking/belangrijk nieuws)

De app kan een melding naar je telefoon sturen zodra er **belangrijk/breaking**
nieuws is. Dit loopt via een achtergrondtaak (`/api/notify`) die periodiek de
feeds controleert en nieuwe, urgente berichten naar **ntfy** of **Pushover**
stuurt. Er is geen "op beginscherm zetten" nodig.

## Optie A — ntfy (gratis, aanbevolen om mee te starten)

1. Installeer de **ntfy**-app (App Store / Play Store).
2. Bedenk een **geheime topicnaam** (gedraag je alsof het een wachtwoord is,
   want iedereen die de naam kent kan meelezen op de gratis server), bijv.
   `nieuwsticker-falserda-9f3k2x`.
3. Abonneer je in de app op dat topic.
4. Zet in Vercel → **Settings → Environment Variables**:
   - `NTFY_TOPIC` = jouw geheime topicnaam
   - `CRON_SECRET` = een willekeurige lange string (beveiligt het endpoint)
5. Deploy (of redeploy) het project.

## Optie B — Pushover (eenmalig ~$5 per platform, zeer netjes)

1. Maak een account op pushover.net en installeer de app.
2. Maak een **Application/API Token** aan.
3. Zet in Vercel → Environment Variables:
   - `PUSHOVER_TOKEN` = je application token
   - `PUSHOVER_USER` = je user key
   - `CRON_SECRET` = een willekeurige lange string

> Staan zowel Pushover- als ntfy-variabelen ingesteld, dan wordt **Pushover** gebruikt.

## De achtergrondtaak (cron)

`vercel.json` bevat een cron die `/api/notify` elke 15 minuten aanroept:

```json
"crons": [{ "path": "/api/notify", "schedule": "*/15 * * * *" }]
```

Vercel stuurt bij cron automatisch de `CRON_SECRET` mee als `Authorization`-header.

⚠️ **Let op het Vercel-abonnement:** op het **Hobby**-plan kan de frequentie van
cron-taken beperkt zijn. Werkt de 15-minuten-cron niet, gebruik dan een gratis
externe cron-dienst (bijv. cron-job.org) die deze URL elke 15 min aanroept:

```
https://nieuwsticker.vercel.app/api/notify?key=JOUW_CRON_SECRET
```

## Optionele instellingen (env vars)

- `NOTIFY_KEYWORDS` — extra trefwoorden, kommagescheiden (bijv. `aex,formule 1,texel`).
- `NOTIFY_LOOKBACK_MINUTES` — terugkijkvenster in minuten (standaard 16). Houd dit
  iets groter dan je cron-interval.
- `NTFY_SERVER` — alternatieve ntfy-server (standaard `https://ntfy.sh`).
- `NTFY_TOKEN` — bearer-token als je een beveiligde ntfy-server gebruikt.

## Hoe wordt "belangrijk" bepaald?

Op basis van een **trefwoordenlijst** met urgentiewoorden (overleden, aanslag,
explosie, kabinet valt, code rood, enz.) in titel + samenvatting. Zie
`BREAKING_KEYWORDS` in `lib/feeds.js`. Dit is bewust eenvoudig en transparant;
breid het uit via `NOTIFY_KEYWORDS` of pas de lijst aan.

## Bekende beperking

Zonder permanente opslag wordt "nieuw" bepaald via een **terugkijkvenster**. Bij
ongelukkige timing kan een melding zelden dubbel komen of net buiten het venster
vallen. Voor "alleen breaking" is het volume laag en is dat zelden merkbaar. Wil
je het waterdicht? Dan kunnen we Vercel KV toevoegen om al-verstuurde berichten
te onthouden — vraag erom als je dat wilt.

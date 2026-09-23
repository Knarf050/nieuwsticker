# Triviant — de krant als bordspel

De app **Triviant** (`/triviant/`) maakt een Triviant-achtige meerkeuzequiz
van de dagelijkse NRC-editie: een dobbelspel met een rond bord, 6
categorieën (taartpunten) en 2–6 spelers om de beurt op hetzelfde toestel.

## Hoe het werkt

1. Je opent Triviant en tikt op **"Krant van vandaag toevoegen"**.
2. Je kiest het bestand van de editie — een **PDF** (zoals bij Nieuwsgeheugen)
   of een **EPUB**. De browser haalt er zelf de tekst uit (met pdf.js resp.
   JSZip) — het bestand zelf blijft op je toestel.
3. De **tekst** gaat naar je eigen server-functie `/api/triviant`, die de
   **Claude API** aanroept en er meerkeuzevragen (met 4 opties, 1 juist
   antwoord, categorie, moeilijkheidsgraad en een korte uitleg) van laat maken.
4. Je krijgt de voorstellen te zien, vinkt uit wat je niet wilt en voegt ze
   toe aan je vragenbank. Daarna kun je een **snelle quiz** spelen of een
   **Triviant potje**: een bordspel met dobbelsteen, waarbij je per
   categorie taartpunten verzamelt.

De app is al gevuld met een eerste editie (NRC Handelsblad, 12 september
2026) zodat je meteen kunt spelen, ook zonder API-sleutel.

## Eenmalige instelling: Claude API-sleutel

Nodig om zelf nieuwe edities te laten verwerken — dezelfde sleutel als bij
Nieuwsgeheugen werkt hier ook.

1. Maak een API-sleutel aan op **platform.claude.com** (Console → API Keys).
2. Zet in Vercel → **Settings → Environment Variables**:
   - `ANTHROPIC_API_KEY` = je sleutel
3. **Redeploy** het project (Deployments → Redeploy).

Zonder deze sleutel geeft het importeren netjes een melding dat de sleutel
ontbreekt — spelen met de meegeleverde eerste editie blijft gewoon werken.

## Optioneel: goedkoper of ander model

Standaard gebruikt de functie `claude-opus-4-8`. Zet voor een goedkoper en
sneller model:

- `TRIVIANT_MODEL` = `claude-haiku-4-5`

(Is `TRIVIANT_MODEL` niet gezet maar `KAARTEN_MODEL` wel, dan wordt die
gebruikt — zo hoef je het maar op één plek in te stellen.)

## Het bordspel in het kort

- Rond bord met 24 vakjes; 6 daarvan zijn **HQ-vakjes** 👑, één per
  categorie, gelijk verdeeld over het bord.
- Land je op een gewoon vakje: beantwoord een vraag uit die categorie.
  Goed = nog een keer rollen. Fout = beurt door.
- Land je op het HQ-vakje van een categorie die je nog niet hebt: goed
  antwoord wint die **taartpunt**. Heb je hem al, dan telt het als een
  gewone vraag.
- Heb je alle 6 taartpunten? Dan is het potje meteen gewonnen.
- Elke menselijke speler heeft twee **jokers**, eenmalig per potje: een
  **50/50-joker** 🃏 (verbergt 2 van de 3 foute opties) en een
  **extra-worp-joker** 🔁 (gezet vóór het rollen: een fout antwoord op de
  daaropvolgende vraag kost die beurt niet — je rolt gewoon nog eens).
  Bots gebruiken geen jokers.

## Snelvuur en Terugblik

Naast het potje en de snelle quiz van 10 vragen zijn er twee kortere
modi op het "Vandaag"-scherm:

- **⏱️ Snelvuur** — 5 vragen tegen de klok (10 seconden per vraag), met
  een combo-bonus voor opeenvolgende goede antwoorden.
- **📼 Terugblik** — een quiz die alleen vragen uit *oudere* edities
  gebruikt (niet de laatst geïmporteerde), voor wie het nieuws van een
  tijdje terug wil ophalen. Verschijnt pas zodra er minstens 2 edities
  zijn geïmporteerd.

## Score delen & categoriebadges

- Na een potje, snelle quiz, Snelvuur-ronde of Terugblik kun je met
  **"📤 Deel je score"** een korte, Wordle-achtige samenvatting (🟩⬜️) delen
  via het systeem-deelvenster, of naar het klembord kopiëren als delen niet
  beschikbaar is (bijv. op desktop).
- Op het **Ik**-tabblad, onder "📚 Categoriebadges", zie je per categorie
  een 🥉/🥈/🥇-badge op basis van je slagingspercentage — pas zichtbaar
  na minstens 5 beantwoorde vragen in die categorie.

## Aantal vragen per import

In het importscherm kies je hoeveel vragen je wilt (40/60/80/100), verdeeld
over de 6 categorieën. Een aanvraag van 100 vragen wordt achter de schermen
in porties van 25 aan Claude gevraagd (anders duurt één serverfunctie-aanroep
te lang), en elke portie krijgt de al gemaakte vraagteksten mee zodat er
geen inhoudelijke overlap ontstaat. Hoe meer vragen per editie, hoe minder
snel je in het bordspel dezelfde vraag terugziet.

## Privacy & techniek

- De PDF/EPUB wordt **lokaal** tot tekst verwerkt; alleen de tekst gaat
  naar de server.
- De tekst wordt afgekapt op ~240.000 tekens (ruim een hele krant).
- De functie staat in `api/triviant.js`; de tijdslimiet is 60s
  (`vercel.json`).
- Een potje wordt niet tussentijds bewaard — sluit je de app midden in een
  spel, dan begin je opnieuw. Je vragenbank en statistieken blijven wel
  gewoon bewaard.

## Bekende beperkingen

- Gescande (afbeelding-)PDF's en lege EPUB's bevatten geen tekstlaag; daar
  komt weinig uit.
- De tekstextractie uit een meerkoloms krant kan rommelig zijn; het model
  is daar tegen bestand, maar controleer de voorstellen voor je ze
  toevoegt.

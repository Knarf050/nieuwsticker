# Automatische kaartjes uit de krant-PDF (gratis via Gemini)

De app **Nieuwsgeheugen** (`/geheugen/`) kan automatisch flashcards maken uit de
dagelijkse NRC-PDF. Hoe het werkt:

1. Je opent Nieuwsgeheugen en tikt op **"Krant van vandaag importeren"**.
2. Je kiest de PDF. De browser haalt er de tekst uit (met pdf.js) — de PDF zelf
   blijft op je toestel.
3. De **tekst** gaat naar je eigen server-functie `/api/kaarten`, die **Google
   Gemini** aanroept en er kaartjes (vraag/antwoord + thema) van laat maken.
4. Je krijgt de voorstellen te zien, vinkt uit wat je niet wilt, past aan waar
   nodig en voegt ze toe aan je stapel. Daarna lopen ze door de spaced-repetition.

## Gratis? Ja.

Google AI Studio biedt een **gratis tier** voor de Gemini-flashmodellen. Voor één
krant per dag blijf je ruim binnen de gratis limieten — je betaalt niets en hoeft
geen creditcard te koppelen. (Let op: gratis limieten kunnen door Google worden
aangepast; bij een dagelijkse import is dat in de praktijk geen probleem.)

## Eenmalige instelling: gratis Gemini-sleutel

1. Ga naar **https://aistudio.google.com/apikey** en log in met je Google-account.
2. Klik **Create API key** en kopieer de sleutel.
3. Zet in Vercel → **Settings → Environment Variables**:
   - `GEMINI_API_KEY` = je sleutel
4. **Redeploy** het project (Deployments → ⋯ → Redeploy), zodat de variabele actief
   wordt.

Zonder deze sleutel werkt de hele app gewoon; alleen de PDF-import geeft dan een
nette melding dat de sleutel ontbreekt. Je kunt kaartjes dan nog steeds zelf maken.

## Optioneel: ander model

Standaard gebruikt de functie `gemini-2.0-flash` (gratis tier). Wil je een ander
(ook gratis) flashmodel, zet dan:

- `GEMINI_MODEL` = `gemini-2.5-flash`  (nieuwer; ook in de gratis tier)

## Aantal kaartjes

In het importscherm kies je hoeveel kaartjes je wilt (5/8/12/15). Minder en goed
onthouden is meestal beter dan veel en half. Begin gerust met 5–8 per editie.

## Privacy & techniek

- De PDF wordt **lokaal** tot tekst verwerkt; alleen de tekst gaat naar de server,
  en van daaruit naar Google Gemini.
- De tekst wordt afgekapt op ~240.000 tekens (ruim een hele krant).
- De functie staat in `api/kaarten.js`; de tijdslimiet is 60s (`vercel.json`).
- Er is geen extra npm-pakket nodig: de functie praat via een gewone `fetch` met
  de Gemini REST-API.
- Gescande (afbeelding-)PDF's bevatten geen tekstlaag; daar komt weinig uit. Een
  digitale krant-PDF (zoals de NRC-download) werkt wel.

## Bekende beperkingen

- De tekstextractie uit een meerkoloms krant kan rommelig zijn; het model is
  daar tegen bestand, maar af en toe is een kaartje minder scherp — vandaar dat
  je ze eerst goedkeurt.
- De gratis tier heeft snelheidslimieten (bv. een maximum aantal verzoeken per
  minuut/dag). Voor één krant per dag merk je daar niets van.

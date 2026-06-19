# Automatische kaartjes uit de krant-PDF

De app **Nieuwsgeheugen** (`/geheugen/`) kan automatisch flashcards maken uit de
dagelijkse NRC-PDF. Hoe het werkt:

1. Je opent Nieuwsgeheugen en tikt op **"Krant van vandaag importeren"**.
2. Je kiest de PDF. De browser haalt er de tekst uit (met pdf.js) — de PDF zelf
   blijft op je toestel.
3. De **tekst** gaat naar je eigen server-functie `/api/kaarten`, die de
   **Claude API** aanroept en er kaartjes (vraag/antwoord + thema) van laat maken.
4. Je krijgt de voorstellen te zien, vinkt uit wat je niet wilt, past aan waar
   nodig en voegt ze toe aan je stapel. Daarna lopen ze door de spaced-repetition.

## Eenmalige instelling: Claude API-sleutel

De functie heeft een API-sleutel nodig. Die zet je als omgevingsvariabele in
Vercel, zodat hij **niet** in de browser of in de code staat.

1. Maak een API-sleutel aan op **platform.claude.com** (Console → API Keys).
2. Zet in Vercel → **Settings → Environment Variables**:
   - `ANTHROPIC_API_KEY` = je sleutel
3. **Redeploy** het project (Deployments → Redeploy), zodat de variabele actief wordt.

Zonder deze sleutel geeft de import netjes een melding dat de sleutel ontbreekt.

## Optioneel: goedkoper of ander model

Standaard gebruikt de functie `claude-opus-4-8` (hoogste kwaliteit). Wil je
goedkoper en sneller, zet dan een tweede variabele:

- `KAARTEN_MODEL` = `claude-haiku-4-5`  (veel goedkoper; iets minder verfijnd)

Een hele krant kost bij Opus grofweg een paar dubbeltjes per dag aan API-kosten;
bij Haiku een fractie daarvan. Je betaalt alleen wanneer je daadwerkelijk
importeert.

## Aantal kaartjes

In het importscherm kies je hoeveel kaartjes je wilt (5/8/12/15). Minder en goed
onthouden is meestal beter dan veel en half. Begin gerust met 5–8 per editie.

## Privacy & techniek

- De PDF wordt **lokaal** tot tekst verwerkt; alleen de tekst gaat naar de server.
- De tekst wordt afgekapt op ~240.000 tekens (ruim een hele krant).
- De functie staat in `api/kaarten.js`; de tijdslimiet is 60s (`vercel.json`).
- Gescande (afbeelding-)PDF's bevatten geen tekstlaag; daar komt weinig uit. Een
  digitale krant-PDF (zoals de NRC-download) werkt wel.

## Bekende beperkingen

- De tekstextractie uit een meerkoloms krant kan rommelig zijn; het model is
  daar tegen bestand, maar af en toe is een kaartje minder scherp — vandaar dat
  je ze eerst goedkeurt.
- Wil je het echt automatisch (PDF delen vanuit je PDF-app → app vangt 'm op)?
  Dat kan later met een PWA *share target*. Vraag erom als je dat wilt.

# Kravspecifikation: Betallösning för Grannfix

**Förfrågan om betallösning för plattformen Grannfix**
Avsändare: Dalboviken Holding AB (org.nr 559582-8152)
Datum: 2026-06-13

---

## 1. Om Grannfix och vår affärsmodell

Grannfix är en marknadsplats där privatpersoner i Norrbotten kopplas ihop för vardagsuppgifter som flytt, städ, trädgård och småfix. En privatperson (beställaren) lägger ut ett uppdrag med ett pris. En annan privatperson (utföraren) utför det.

Vi tar ut en serviceavgift på 15 procent av beställaren, dock lägst 25 kronor per uppdrag. Lansering sker i Luleå hösten 2026.

Vi vill inte själva hantera kundernas pengar. Vi söker en betalleverantör som håller pengarna och sköter utbetalningar, så att vi står utanför rollen som betaltjänst.

---

## 2. Betalflöde vi vill ha

1. Beställaren betalar hela beloppet när uppdraget bokas.
2. Pengarna hålls kvar hos er (escrow) tills uppdraget är markerat som klart av beställaren.
3. När uppdraget är godkänt delas beloppet: utföraren får sin del, Grannfix sin serviceavgift.
4. Utbetalning till utföraren sker automatiskt efter godkännande via API-anrop från oss.

---

## 3. Funktionskrav

Vänligen ange för varje punkt om funktionen stöds och hur den tekniskt implementeras:

| Krav | Stöds? | Kommentar |
|---|---|---|
| Escrow / hold: hålla betalning tills vi ger klartecken | | |
| Delad betalning (split payment): dela en betalning mellan utförare och vår avgift | | |
| Fördröjd utbetalning (delayed payout): utbetalning styrd av oss via API | | |
| Konton för utförare (connected accounts): utförare kopplas som mottagare | | |
| KYC och identitetskontroll: hanterar ni kundkännedom för utförare? | | |

---

## 4. Prissättning

- Vilken avgift tar ni per transaktion (fast del och procent)?
- Tillkommer avgift för utbetalning, escrow-funktionen eller connected accounts?
- Finns månadsavgift eller startavgift?
- Hur ser prissättningen ut vid små belopp (uppdrag runt 200 till 500 kronor)?
- Finns volymrabatter och vid vilken nivå?

---

## 5. Tillstånd och compliance (PSD2)

- Har ni tillstånd som betaltjänstleverantör inom EU enligt PSD2?
- Hamnar Grannfix inom ert tillstånd, så att vi själva inte behöver söka tillstånd hos Finansinspektionen som betaltjänstleverantör?
- Var går gränsen för vad vi får göra inom ert tillstånd?
- Är Grannfix i ert upplägg ett registrerat ombud (payment institution agent) eller något annat?

---

## 6. Swish

- Kan beställare betala med Swish via er plattform?
- Stödjer ni Swish Handel som inbetalningsmetod med escrow-hållning av medlen?
- Kan utbetalning till utförare göras via Swish?
- Vilka krav ställer ni för att aktivera Swish som betalmetod?

---

## 7. DAC7-rapportering

Vi är rapporteringsskyldig plattformsoperatör enligt DAC7 (lag 2022:1681) och behöver kvartalsvis transaktionsdata per utförare.

- Kan ni leverera transaktionsdata per utförare uppdelat per kvartal?
- Innehåller datan namn, kontonummer (IBAN), utbetalda belopp och innehållna avgifter?
- I vilket format kan datan exporteras (CSV, API, XML)?
- Kan ni hjälpa till att samla in och verifiera utförarens personnummer vid registrering?

---

## 8. Teknisk integration

- Finns ett väldokumenterat REST-API och testmiljö (sandbox)?
- Finns SDK:er för TypeScript/Node.js (vår backend-stack)?
- Hur lång är typisk implementationstid?

---

*Skicka svar och offert till: [kontaktuppgifter]*

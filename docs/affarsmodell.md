# Grannfix affärsmodell

*Intern sammanfattning. Senast uppdaterad 2026-06-13.*

---

## Intäktsmodell

**Transaktionsavgift: 15% av ordervärdet, minst 25 kr per genomfört uppdrag.**

Avgiften läggs på beställaren (inte dras från utföraren). Utföraren ser alltid sin fulla ersättning. Grannfix drar sin avgift automatiskt via PSP vid utbetalning.

Tillägg att utvärdera från år 1: frivillig eller obligatorisk trygghetsavgift 15–20 kr per uppdrag för plattformsansvarsförsäkring.

### Varför transaktionsavgift

Prenumeration, leadfee och annonser är alla olämpliga i uppstartsfas med låg ordervolym och en tunn marknad. Transaktionsavgift skalar med faktisk levererad nytta och kräver ingen kritisk massa för att fungera.

---

## Intäktsprognos

| | År 1 (Luleå) | År 2 (Norrbotten) | År 3 (brett) |
|---|---|---|---|
| Genomförda uppdrag helår | ca 1 100 | ca 5 000 | ca 14 000 |
| GMV (total uppdragsvolym) | 550 000 kr | 2 500 000 kr | 7 000 000 kr |
| Intäkt netto efter moms | 66 000 kr | 300 000 kr | 840 000 kr |
| Täckningsbidrag efter betalväxel | ca 53 000 kr | ca 245 000 kr | ca 685 000 kr |

Antaganden: snittorder 500 kr, 15% avgift, effektiv avgift efter moms och betalväxel ca 48–50 kr per uppdrag.

Break-even på ren transaktionsmodell: realistiskt år 3–4.

---

## Juridiska nyckelrisker

### 1. DAC7-rapportering (hög prioritet, blockerande)
Grannfix är rapporteringsskyldig plattformsoperatör. Ingen beloppströskel för personliga tjänster. All utförarinkomst rapporteras till Skatteverket oavsett belopp. Måste byggas in i systemet från dag ett.

**Åtgärd:** se `fragelista-skatteverket-dac7.md` och `dac7-underrattelse-och-skattinfo.md`

### 2. Betaltjänstlicens (mycket hög prioritet, blockerande)
Grannfix kan inte hålla kundpengar på eget konto utan PSD2-tillstånd. Lösning: licensierad marketplace-PSP (Stripe Connect eller Mangopay/Lemonway) som håller och delar beloppen inom sitt tillstånd.

**Åtgärd:** se `kravspec-betalleverantor.md`. Kräver advokatgranskning av slutgiltigt betalflöde.

### 3. Utförarens skatt (måttlig prioritet, förtroenderisk)
Ingen skattefri gräns för tjänsteinkomster. DAC7 gör att Skatteverket ser alla utförare. Utförare som inte deklarerar riskerar problem.

**Åtgärd:** tydlig skatteinformation i appen, årlig inkomstsammanställning per utförare.

---

## Juridisk struktur

**Bilda Grannfix AB, ägt av Dalboviken Holding AB.**

Näringsbetingade andelar: framtida försäljning av Grannfix AB blir skattefri på bolagsnivå om Holding äger onoterade andelar. Riskisolering: plattformens konsumentrisk och betalningsrisk separeras från Drift AB och Fastigheter AB.

Varumärket Grannfix hålls fristående från Dalboviken-varumärket.

---

## Nästa steg (prioritetsordning)

1. Skicka `fragelista-skatteverket-dac7.md` till Skatteverket. Bekräfta rapporteringsskyldighet och format.
2. Skicka `kravspec-betalleverantor.md` till Stripe Connect och Mangopay/Lemonway. Begär offert.
3. Anlita advokat med PSD2-kompetens. Granska slutgiltigt betalflöde med vald PSP.
4. Bilda Grannfix AB under Dalboviken Holding AB.
5. Lägg personnummer-insamling och kvartalsaggregering som hårda krav i teknisk kravspec innan backend-utveckling startar.

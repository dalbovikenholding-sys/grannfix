import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Användarvillkor',
  description: 'Grannfix användarvillkor: regler och avtal som gäller när du använder tjänsten som beställare eller utförare.',
  robots: { index: true, follow: true },
}

export default function AnvandarvillkorPage() {
  return (
    <div className="min-h-[calc(100vh-128px)] bg-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Användarvillkor</h1>
        <p className="text-gray-400 text-sm mb-12">Senast uppdaterad: juni 2026</p>

        <div className="prose prose-gray max-w-none">

          <p className="text-gray-600 leading-relaxed mb-10">
            Dessa villkor gäller när du använder Grannfix tjänst, oavsett om du lägger ut uppdrag
            ("beställare") eller tar uppdrag ("utförare"). Genom att skapa ett konto accepterar du
            dessa villkor i sin helhet.
          </p>

          {[
            {
              nr: '1',
              rubrik: 'Om tjänsten',
              innehall: (
                <p className="text-gray-600 leading-relaxed">
                  Grannfix är en digital marknadsplats som kopplar ihop privatpersoner för praktiska
                  vardagsuppgifter. Grannfix är inte part i avtalet mellan beställare och utförare,
                  inte arbetsgivare till utförare, och inte ansvarig för uppdragets utförande. Vi
                  tillhandahåller plattformen, betalningslösningen och ramverket för interaktionen.
                </p>
              ),
            },
            {
              nr: '2',
              rubrik: 'Krav för att använda Grannfix',
              innehall: (
                <ul className="space-y-2 text-gray-600">
                  <li>Du måste vara minst 18 år</li>
                  <li>Du måste ha ett giltigt BankID för identitetsverifiering</li>
                  <li>Du måste bo eller befinna dig i Sverige</li>
                  <li>Du måste lämna korrekta och fullständiga uppgifter vid registrering</li>
                </ul>
              ),
            },
            {
              nr: '3',
              rubrik: 'Avgifter',
              innehall: (
                <>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Grannfix tar en serviceavgift på <strong className="text-gray-800">15 procent</strong> av
                    uppdragets totala värde, med ett minimum om 25 kr per avslutat uppdrag. Avgiften tillkommer
                    utöver eventuella transaktionskostnader hos betaltjänstleverantören.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Avgiften dras automatiskt från det belopp som utbetalas till utföraren.
                    Inga avgifter tas ut förrän uppdraget är avslutat och godkänt av beställaren.
                  </p>
                </>
              ),
            },
            {
              nr: '4',
              rubrik: 'Betalningar och escrow',
              innehall: (
                <p className="text-gray-600 leading-relaxed">
                  Betalning sker via Grannfix betaltjänstleverantör. Beloppet reserveras (spärras) hos
                  betaltjänsten när beställaren bekräftar ett uppdrag. Beloppet frigörs till utföraren
                  när beställaren godkänt att uppdraget är utfört, eller automatiskt efter 48 timmar om
                  beställaren inte hör av sig. Grannfix hanterar aldrig medel direkt utan anlitar en
                  licensierad betaltjänstleverantör reglerad av Finansinspektionen.
                </p>
              ),
            },
            {
              nr: '5',
              rubrik: 'Skatter och DAC7',
              innehall: (
                <p className="text-gray-600 leading-relaxed">
                  Utförare är själva ansvariga för att deklarera sina inkomster från uppdrag på Grannfix.
                  Inkomsterna är skattepliktiga oavsett belopp. Grannfix rapporterar varje år utförares
                  inkomster till Skatteverket enligt lag (2022:1681) om plattformsoperatörers skyldighet
                  att lämna uppgifter (DAC7). Rapporten avser föregående kalenderår och lämnas senast
                  31 januari. Du informeras separat via e-post när rapporten är skickad.
                </p>
              ),
            },
            {
              nr: '6',
              rubrik: 'Utförarens ansvar',
              innehall: (
                <ul className="space-y-2 text-gray-600">
                  <li>Utföra uppdraget fackmässigt och enligt överenskommelse med beställaren</li>
                  <li>Inneha nödvändiga tillstånd eller licenser om sådana krävs för uppdraget</li>
                  <li>Meddela beställaren i god tid om du inte kan fullgöra uppdraget</li>
                  <li>Deklarera inkomsten korrekt hos Skatteverket</li>
                </ul>
              ),
            },
            {
              nr: '7',
              rubrik: 'Beställarens ansvar',
              innehall: (
                <ul className="space-y-2 text-gray-600">
                  <li>Lämna korrekt och fullständig information om uppdraget</li>
                  <li>Finnas tillgänglig på avtalad tid och plats</li>
                  <li>Granska och godkänna (eller bestrida) utfört arbete inom 48 timmar</li>
                  <li>Betala det överenskomna priset via plattformen</li>
                </ul>
              ),
            },
            {
              nr: '8',
              rubrik: 'Förbjudet beteende',
              innehall: (
                <>
                  <p className="text-gray-600 leading-relaxed mb-3">Det är förbjudet att:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>Kringgå plattformen genom att betala utanför Grannfix för uppdrag som förmedlats via tjänsten</li>
                    <li>Lämna falska, vilseledande eller köpta recensioner</li>
                    <li>Använda tjänsten för olagliga ändamål</li>
                    <li>Trakassera, hota eller diskriminera andra användare</li>
                    <li>Publicera uppdrag som kräver yrkeslicens utan att inneha sådan</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed mt-3">
                    Brott mot dessa regler kan leda till omedelbar avstängning och eventuell polisanmälan.
                  </p>
                </>
              ),
            },
            {
              nr: '9',
              rubrik: 'Ansvarsbegränsning',
              innehall: (
                <p className="text-gray-600 leading-relaxed">
                  Grannfix ansvarar inte för skador som uppstår till följd av ett uppdrag, vare sig
                  sakskador, personskador eller ekonomisk skada. Beställare och utförare är ansvariga
                  gentemot varandra i enlighet med allmänna skadeståndsrättsliga regler. Grannfix
                  rekommenderar att utförare tecknar lämplig ansvarsförsäkring. Grannfix totala ansvar
                  begränsas i samtliga fall till det avgiftsbelopp Grannfix erhållit för det aktuella uppdraget.
                </p>
              ),
            },
            {
              nr: '10',
              rubrik: 'Immateriella rättigheter',
              innehall: (
                <p className="text-gray-600 leading-relaxed">
                  Allt innehåll på Grannfix, inklusive logotyper, design, text och programvara, tillhör
                  Grannfix AB eller våra licensgivare. Du får inte kopiera, reproducera eller distribuera
                  innehåll utan skriftligt tillstånd. Innehåll som du själv publicerar (uppdragsbeskrivningar,
                  recensioner) ger du Grannfix rätt att använda för att tillhandahålla tjänsten.
                </p>
              ),
            },
            {
              nr: '11',
              rubrik: 'Uppsägning av konto',
              innehall: (
                <p className="text-gray-600 leading-relaxed">
                  Du kan avsluta ditt konto när som helst via e-post till{' '}
                  <a href="mailto:hej@grannfix.se" className="text-[#1a6b3c] hover:underline">hej@grannfix.se</a>.
                  Pågående uppdrag och ekonomiska åtaganden kvarstår tills de är avslutade. Grannfix
                  kan avsluta konton som bryter mot dessa villkor, utan förvarning vid allvarliga brott.
                </p>
              ),
            },
            {
              nr: '12',
              rubrik: 'Tvister och tillämplig lag',
              innehall: (
                <p className="text-gray-600 leading-relaxed">
                  Dessa villkor styrs av svensk rätt. Tvister ska i första hand lösas via dialog med
                  Grannfix kundtjänst. Vid oenighet kan tvisten hänskjutas till Allmänna
                  reklamationsnämnden (ARN) på arn.se, eller till allmän domstol med Luleå tingsrätt
                  som första instans.
                </p>
              ),
            },
          ].map(section => (
            <section key={section.nr} className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {section.nr}. {section.rubrik}
              </h2>
              {section.innehall}
            </section>
          ))}

        </div>
      </div>
    </div>
  )
}

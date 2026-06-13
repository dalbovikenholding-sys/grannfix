import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Integritetspolicy',
  description: 'Grannfix integritetspolicy: hur vi samlar in, behandlar och skyddar dina personuppgifter i enlighet med GDPR.',
  robots: { index: true, follow: true },
}

export default function IntegritetspolicyPage() {
  return (
    <div className="min-h-[calc(100vh-128px)] bg-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Integritetspolicy</h1>
        <p className="text-gray-400 text-sm mb-12">Senast uppdaterad: juni 2026</p>

        <div className="prose prose-gray max-w-none">

          <p className="text-gray-600 leading-relaxed mb-8">
            Grannfix AB (under bildande), nedan kallat "Grannfix", "vi" eller "oss", är personuppgiftsansvarig
            för behandlingen av dina personuppgifter när du använder vår tjänst. Vi tar din integritet på
            allvar och behandlar dina uppgifter i enlighet med dataskyddsförordningen (GDPR,
            EU 2016/679) och tillämplig svensk dataskyddslagstiftning.
          </p>
          <p className="text-sm text-gray-500 mb-12">
            Kontakt: <a href="mailto:hej@grannfix.se" className="text-[#1a6b3c] hover:underline">hej@grannfix.se</a>
          </p>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Vilka uppgifter vi samlar in</h2>
            <ul className="space-y-2 text-gray-600">
              <li><span className="font-medium text-gray-800">Identitetsuppgifter:</span> namn, personnummer (via BankID-verifiering)</li>
              <li><span className="font-medium text-gray-800">Kontaktuppgifter:</span> e-postadress, stad och adress</li>
              <li><span className="font-medium text-gray-800">Transaktionsuppgifter:</span> uppdragsbeskrivningar, pris, betalningshistorik och datum</li>
              <li><span className="font-medium text-gray-800">Kommunikation:</span> meddelanden och avtal mellan beställare och utförare på plattformen</li>
              <li><span className="font-medium text-gray-800">Teknisk information:</span> IP-adress, enhet, webbläsare och inloggningsloggar</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">2. Varför vi behandlar dina uppgifter</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 pr-6 font-semibold text-gray-800">Ändamål</th>
                    <th className="text-left py-3 font-semibold text-gray-800">Rättslig grund</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  {[
                    ['Skapa och hantera konto', 'Avtal (Art. 6.1b GDPR)'],
                    ['Förmedla uppdrag mellan beställare och utförare', 'Avtal (Art. 6.1b)'],
                    ['Hantera betalningar via betaltjänstleverantör', 'Avtal (Art. 6.1b)'],
                    ['Rapportera inkomster till Skatteverket (DAC7)', 'Rättslig förpliktelse (Art. 6.1c)'],
                    ['Förebygga bedrägeri och missbruk', 'Berättigat intresse (Art. 6.1f)'],
                    ['Kundtjänst och supportärenden', 'Berättigat intresse (Art. 6.1f)'],
                    ['Driftsmeddelanden och systemnotifieringar', 'Berättigat intresse (Art. 6.1f)'],
                    ['Nyhetsbrev och marknadsföring', 'Samtycke (Art. 6.1a GDPR)'],
                  ].map(([a, b]) => (
                    <tr key={a} className="border-b border-gray-100">
                      <td className="py-3 pr-6">{a}</td>
                      <td className="py-3">{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">3. DAC7-rapportering</h2>
            <p className="text-gray-600 leading-relaxed">
              Grannfix är skyldig att rapportera utförarnas inkomster till Skatteverket varje år enligt
              lagen (2022:1681) om plattformsoperatörers skyldighet att lämna uppgifter. Rapporten avser
              föregående kalenderår och lämnas senast den 31 januari. Du informeras via e-post när
              rapporten är skickad. Uppgifterna som rapporteras inkluderar namn, personnummer,
              adress och totalt ersättningsbelopp per år.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Lagringstid</h2>
            <ul className="space-y-2 text-gray-600">
              <li><span className="font-medium text-gray-800">Kontouppgifter:</span> under kontots livstid, plus 3 år efter avslutat konto</li>
              <li><span className="font-medium text-gray-800">Transaktionsuppgifter:</span> 7 år (bokföringsskyldighet enligt bokföringslagen)</li>
              <li><span className="font-medium text-gray-800">DAC7-uppgifter:</span> 10 år</li>
              <li><span className="font-medium text-gray-800">Marknadsföring:</span> till dess du återkallar ditt samtycke</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">5. Mottagare av uppgifter</h2>
            <ul className="space-y-2 text-gray-600">
              <li><span className="font-medium text-gray-800">Betaltjänstleverantör (Stripe Inc.):</span> för hantering av betalningar och utbetalningar</li>
              <li><span className="font-medium text-gray-800">Skatteverket:</span> via DAC7-rapportering en gång per år</li>
              <li><span className="font-medium text-gray-800">Molntjänstleverantörer (Vercel, AWS):</span> för drift och lagring av tjänsten</li>
            </ul>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Vi säljer aldrig dina personuppgifter till tredje part. Vid dataöverföringar utanför EU
              tillämpas EU:s standardavtalsklausuler.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">6. Dina rättigheter</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Du har rätt att när som helst:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li><span className="font-medium text-gray-800">Begära tillgång</span> till dina personuppgifter (registerutdrag)</li>
              <li><span className="font-medium text-gray-800">Begära rättelse</span> av felaktiga uppgifter</li>
              <li><span className="font-medium text-gray-800">Begära radering</span> (rätten att bli bortglömd), om lagring inte krävs av lag</li>
              <li><span className="font-medium text-gray-800">Invända mot behandling</span> som baseras på berättigat intresse</li>
              <li><span className="font-medium text-gray-800">Begära begränsning</span> av behandling under pågående utredning</li>
              <li><span className="font-medium text-gray-800">Dataportabilitet:</span> få ut dina uppgifter i ett maskinläsbart format</li>
              <li><span className="font-medium text-gray-800">Återkalla samtycke</span> för marknadsföring när som helst</li>
            </ul>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Kontakta oss på{' '}
              <a href="mailto:hej@grannfix.se" className="text-[#1a6b3c] hover:underline">hej@grannfix.se</a>{' '}
              för att utöva dina rättigheter. Vi svarar inom 30 dagar.
            </p>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Du har också rätt att lämna klagomål till{' '}
              <span className="font-medium text-gray-800">Integritetsskyddsmyndigheten (IMY)</span>{' '}
              på <a href="https://www.imy.se" target="_blank" rel="noopener noreferrer" className="text-[#1a6b3c] hover:underline">imy.se</a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">7. Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              Vi använder nödvändiga cookies för att hålla dig inloggad och skydda mot förfalskade
              förfrågningar. Analyscookies används enbart med ditt uttryckliga samtycke. Du kan
              hantera cookies i din webbläsares inställningar.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">8. Ändringar av policyn</h2>
            <p className="text-gray-600 leading-relaxed">
              Vi meddelar dig via e-post vid väsentliga förändringar av denna integritetspolicy.
              Den aktuella versionen finns alltid på grannfix.se/integritetspolicy.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}

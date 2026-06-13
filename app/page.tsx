export default function Home() {
  return (
    <div>

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#f0faf4] to-white pt-20 pb-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#1a6b3c] font-medium text-sm uppercase tracking-wider mb-4">Norrbottens grannhjälp</p>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
              Hjälp av grannen, när du behöver det
            </h1>
            <p className="text-xl text-gray-500 mb-10 leading-relaxed">
              Grannfix kopplar ihop dig med pålitliga grannar i Luleå och Norrbotten. Flytt, städ, trädgård, tunga lyft eller småfix: du sätter priset, grannen hjälper till.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#kom-igang" className="btn-primary bg-[#1a6b3c] text-white px-8 py-4 rounded-full font-semibold text-lg">
                Lägg ut ett uppdrag
              </a>
              <a href="#hur-det-fungerar" className="btn-secondary border-2 border-[#1a6b3c] text-[#1a6b3c] px-8 py-4 rounded-full font-semibold text-lg">
                Så fungerar det
              </a>
            </div>
          </div>
          <div className="bg-[#1a6b3c]/10 rounded-3xl aspect-square flex items-center justify-center">
            <div className="text-center p-8">
              <div className="text-8xl mb-4">🤝</div>
              <p className="text-[#1a6b3c] font-semibold text-lg">Grannen hjälper grannen</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: "⚡", title: "Snabb hjälp", text: "Hitta en granne samma dag, ofta inom några timmar." },
              { icon: "💸", title: "Du sätter priset", text: "Ange vad du är villig att betala. Ingen dold prislista." },
              { icon: "🔒", title: "Säker betalning", text: "Pengarna betalas ut till grannen först när du är nöjd." },
              { icon: "📍", title: "Lokalt i Norrbotten", text: "Grannar i Luleå, Boden, Piteå och hela länet." },
            ].map(f => (
              <div key={f.title} className="text-center p-6">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="hur-det-fungerar" className="py-24 px-6 bg-[#f0faf4]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Så enkelt fungerar det</h2>
            <p className="text-gray-500 text-lg">Tre steg från behov till klar</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", icon: "📸", title: "Lägg ut uppdraget", text: "Beskriv vad du behöver hjälp med, ange tid och sätt ditt pris. Det tar under en minut." },
              { step: "2", icon: "👋", title: "Välj din granne", text: "Se profiler och betyg på grannar i närheten. Välj den som passar dig bäst." },
              { step: "3", icon: "✅", title: "Betala säkert", text: "Grannen utför jobbet. Du godkänner och betalningen sker direkt i appen." },
            ].map(s => (
              <div key={s.step} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-8 h-8 bg-[#1a6b3c] text-white rounded-full flex items-center justify-center text-sm font-bold mb-6">
                  {s.step}
                </div>
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-semibold text-gray-900 text-lg mb-3">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="tjanster" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Vad kan grannen hjälpa med?</h2>
            <p className="text-gray-500 text-lg">Allt från tunga lyft till trädgårdsarbete</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: "📦", title: "Flytta & bära", text: "Flytt av möbler, bohag och kartonger. Med eller utan bil." },
              { icon: "🧹", title: "Städhjälp", text: "Storstädning, inflyttningsstäd, kontorsstäd." },
              { icon: "🌿", title: "Trädgård & snöskottning", text: "Klippning, krattning, snöröjning och allt däremellan." },
              { icon: "🚗", title: "Hämta & lämna", text: "Upphämtning från butik, återvinning eller transport av saker." },
              { icon: "🔧", title: "Småfix & montering", text: "IKEA-montering, målning, enklare reparationer." },
              { icon: "🎁", title: "Bortskänkes & second hand", text: "Ge bort saker gratis eller hitta någon som hämtar." },
            ].map(s => (
              <div key={s.title} className="service-card border border-gray-100 rounded-2xl p-6 cursor-default">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="priser" className="py-24 px-6 bg-[#f0faf4]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Vad kostar det?</h2>
            <p className="text-gray-500 text-lg">Du bestämmer priset. Här är exempel på vad grannar brukar ta.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Enkel flytt (1–2 rum)", price: "400–800 kr", note: "Exkl. transport" },
              { label: "Större flytt (3–4 rum)", price: "800–1 600 kr", note: "Exkl. transport" },
              { label: "Trädgårdsarbete, 2 h", price: "300–600 kr", note: "Klippning, krattning" },
              { label: "Storstäd lägenhet", price: "600–1 200 kr", note: "Ca 3–5 timmar" },
              { label: "IKEA-montering", price: "200–500 kr", note: "Per möbel" },
              { label: "Snöskottning", price: "150–400 kr", note: "Normalstor uppfart" },
            ].map(p => (
              <div key={p.label} className="bg-white rounded-2xl p-6 flex items-center justify-between shadow-sm">
                <div>
                  <p className="font-medium text-gray-900">{p.label}</p>
                  <p className="text-gray-400 text-sm">{p.note}</p>
                </div>
                <span className="font-bold text-[#1a6b3c] text-lg whitespace-nowrap ml-4">{p.price}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-8">Grannfix tar en liten serviceavgift när uppdraget är slutfört.</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Vad säger grannarna?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Anna K.", location: "Luleå", text: "Fick hjälp med flytten på tre timmar. Grannen var toppen och priset var rimligt. Rekommenderar starkt!" },
              { name: "Marcus L.", location: "Boden", text: "Lade ut ett snöskottningsjobb på kvällen, grannen kom nästa morgon. Perfekt." },
              { name: "Sara N.", location: "Piteå", text: "Hjälpte till att bära ut gamla möbler till återvinningen. Enkelt, snabbt och schysst betalt." },
            ].map(t => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400">★</span>)}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-gray-400 text-sm">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="kom-igang" className="py-24 px-6 bg-[#1a6b3c]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Redo att prova?</h2>
          <p className="text-[#a7d9bc] text-xl mb-10">Registrera dig och lägg ut ditt första uppdrag gratis. Appen lanseras i Luleå under hösten 2026.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Din e-postadress"
              className="flex-1 px-5 py-4 rounded-full text-gray-900 outline-none focus:ring-2 focus:ring-white/50"
            />
            <button type="submit" className="btn-primary bg-white text-[#1a6b3c] px-8 py-4 rounded-full font-semibold whitespace-nowrap">
              Anmäl intresse
            </button>
          </form>
        </div>
      </section>

    </div>
  )
}

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { KATEGORIER } from '@/lib/konstanter'
import IntresseKnapp from '@/components/IntresseKnapp'
import BetalKnapp from '@/components/BetalKnapp'
import GodkännKnapp from '@/components/GodkännKnapp'
import BetygFormulär from '@/components/BetygFormulär'
import type { Uppdrag } from '@/lib/supabase/types'

export default async function UppdragDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: uppdragRaw } = await (supabase as any)
    .from('uppdrag')
    .select('*')
    .eq('id', id)
    .single()

  const uppdrag = uppdragRaw as (Uppdrag & { beställare?: { namn: string; betyg_sum: number; betyg_antal: number }; utförare?: { namn: string } | null }) | null

  // Hämta beställarens profil separat
  if (uppdrag) {
    const { data: besProfil } = await (supabase as any)
      .from('profiles')
      .select('namn, betyg_sum, betyg_antal')
      .eq('id', uppdrag.beställare_id)
      .single()
    uppdrag.beställare = besProfil ?? { namn: 'Okänd', betyg_sum: 0, betyg_antal: 0 }
  }

  if (!uppdrag) notFound()

  const kat = KATEGORIER[uppdrag.kategori]
  const ärBeställare = user?.id === uppdrag.beställare_id
  const ärUtförare = user?.id === uppdrag.utförare_id
  const beställare = uppdrag.beställare!
  const betygSnitt = beställare.betyg_antal > 0
    ? (beställare.betyg_sum / beställare.betyg_antal).toFixed(1)
    : null

  const datumVisat = new Date(uppdrag.datum).toLocaleDateString('sv-SE', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  })

  const statusEtikett: Record<string, string> = {
    öppen: 'Öppet',
    accepterad: 'Väntar på betalning',
    pågående: 'Pågår',
    slutfört: 'Slutfört',
    avbrutet: 'Avbrutet',
  }

  // Hämta intresseanmälningar om användaren är beställare
  let intresserade: { utförare_id: string; utförare: { namn: string; betyg_sum: number; betyg_antal: number } | null; meddelande: string | null }[] = []
  if (ärBeställare && uppdrag.status === 'öppen') {
    const { data: anmalningar } = await (supabase as any)
      .from('intresseanmalningar')
      .select('utförare_id, meddelande')
      .eq('uppdrag_id', id)
    for (const a of (anmalningar ?? [])) {
      const { data: prof } = await (supabase as any)
        .from('profiles')
        .select('namn, betyg_sum, betyg_antal')
        .eq('id', a.utförare_id)
        .single()
      intresserade.push({ utförare_id: a.utförare_id, meddelande: a.meddelande ?? null, utförare: prof })
    }
  }

  // Kolla om nuvarande användare redan anmält intresse
  let harAnmältIntresse = false
  if (user && !ärBeställare && uppdrag.status === 'öppen') {
    const { data } = await supabase
      .from('intresseanmalningar')
      .select('id')
      .eq('uppdrag_id', id)
      .eq('utförare_id', user.id)
      .maybeSingle()
    harAnmältIntresse = !!data
  }

  // Kolla om parten redan lämnat betyg
  let harLämnatBetyg = false
  if (user && uppdrag.status === 'slutfört' && (ärBeställare || ärUtförare)) {
    const { data } = await (supabase as any)
      .from('betyg')
      .select('id')
      .eq('uppdrag_id', id)
      .eq('från_id', user.id)
      .maybeSingle()
    harLämnatBetyg = !!data
  }

  // Vem ska betygsättas av vem
  const betygMotpartId = ärBeställare ? uppdrag.utförare_id : ärUtförare ? uppdrag.beställare_id : null

  return (
    <div className="min-h-[calc(100vh-128px)] bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <Link href="/uppdrag" className="text-sm text-[#1a6b3c] hover:underline flex items-center gap-1 mb-8">
          ← Tillbaka till uppdrag
        </Link>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{kat.ikon}</span>
              <span className="text-sm font-medium bg-[#f0faf4] text-[#1a6b3c] px-3 py-1 rounded-full">{kat.etikett}</span>
              <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                uppdrag.status === 'öppen' ? 'bg-green-100 text-green-700' :
                uppdrag.status === 'slutfört' ? 'bg-gray-100 text-gray-500' :
                'bg-yellow-100 text-yellow-700'
              }`}>
                {statusEtikett[uppdrag.status] ?? uppdrag.status}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{uppdrag.titel}</h1>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">{uppdrag.beskrivning}</p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-[#f0faf4] rounded-xl p-4">
                <p className="text-xs font-medium text-[#1a6b3c] uppercase tracking-wider mb-1">Stad</p>
                <p className="font-medium text-gray-900">{uppdrag.stad}</p>
              </div>
              <div className="bg-[#f0faf4] rounded-xl p-4">
                <p className="text-xs font-medium text-[#1a6b3c] uppercase tracking-wider mb-1">Adress</p>
                <p className="font-medium text-gray-900">{uppdrag.adress}</p>
              </div>
              <div className="bg-[#f0faf4] rounded-xl p-4">
                <p className="text-xs font-medium text-[#1a6b3c] uppercase tracking-wider mb-1">Önskat datum</p>
                <p className="font-medium text-gray-900">{datumVisat}</p>
              </div>
            </div>

            {/* Intresserade – visas bara för beställaren */}
            {ärBeställare && uppdrag.status === 'öppen' && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Intresserade grannar ({intresserade.length})
                </h2>
                {intresserade.length === 0 ? (
                  <p className="text-gray-400 text-sm">Inga intresseanmälningar ännu.</p>
                ) : (
                  <div className="flex flex-col gap-3">
                    {intresserade.map(a => {
                      const snitt = a.utförare && a.utförare.betyg_antal > 0
                        ? (a.utförare.betyg_sum / a.utförare.betyg_antal).toFixed(1)
                        : null
                      return (
                        <div key={a.utförare_id} className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center gap-4 shadow-sm">
                          <div className="w-10 h-10 rounded-full bg-[#1a6b3c]/10 flex items-center justify-center font-bold text-[#1a6b3c]">
                            {a.utförare?.namn?.charAt(0) ?? '?'}
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-gray-900">{a.utförare?.namn ?? 'Okänd'}</p>
                            {snitt && <p className="text-sm text-gray-400">★ {snitt}</p>}
                            {a.meddelande && <p className="text-sm text-gray-600 mt-1">{a.meddelande}</p>}
                          </div>
                          <form action={async () => {
                            'use server'
                            const { accepteraUtförare } = await import('@/app/actions/uppdrag')
                            await accepteraUtförare(id, a.utförare_id)
                          }}>
                            <button type="submit" className="bg-[#1a6b3c] text-white px-4 py-2 rounded-full text-sm font-medium">
                              Välj
                            </button>
                          </form>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="md:col-span-1">
            <div className="sticky top-24 flex flex-col gap-4">
              <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">Betalning</p>
                <p className="text-4xl font-bold text-[#1a6b3c] mb-1">{uppdrag.pris} kr</p>
                <p className="text-gray-400 text-sm mb-6">Betalas ut efter godkänt arbete</p>

                {/* Betalknapp för beställare som accepterat utförare */}
                {ärBeställare && uppdrag.status === 'accepterad' && (
                  <BetalKnapp uppdragId={id} />
                )}

                {/* Intresseknapp för inloggad icke-beställare */}
                {!ärBeställare && uppdrag.status === 'öppen' && user && (
                  <IntresseKnapp uppdragId={id} harAnmält={harAnmältIntresse} />
                )}

                {/* Inte inloggad */}
                {!user && uppdrag.status === 'öppen' && (
                  <>
                    <Link
                      href={`/login?returnTo=/uppdrag/${id}`}
                      className="btn-primary w-full block text-center bg-[#1a6b3c] text-white py-3.5 rounded-full font-semibold"
                    >
                      Anmäl intresse
                    </Link>
                    <p className="text-center text-xs text-gray-400 mt-3">Du behöver ett konto för att anmäla intresse</p>
                  </>
                )}

                {ärUtförare && uppdrag.status === 'pågående' && (
                  <div className="bg-[#f0faf4] rounded-xl p-4 text-sm text-[#1a6b3c]">
                    Uppdraget pågår. Betalning frigörs när beställaren godkänner.
                  </div>
                )}

                {/* Beställaren godkänner avslutat arbete */}
                {ärBeställare && uppdrag.status === 'pågående' && (
                  <GodkännKnapp uppdragId={id} />
                )}

                {/* Betygsformulär för båda parter efter slutfört */}
                {uppdrag.status === 'slutfört' && (ärBeställare || ärUtförare) && betygMotpartId && !harLämnatBetyg && (
                  <BetygFormulär uppdragId={id} tillId={betygMotpartId} />
                )}
                {uppdrag.status === 'slutfört' && (ärBeställare || ärUtförare) && harLämnatBetyg && (
                  <p className="text-center text-sm text-gray-400">Du har lämnat betyg.</p>
                )}
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">Beställare</p>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#1a6b3c]/10 flex items-center justify-center font-bold text-[#1a6b3c] text-lg">
                    {beställare.namn.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{beställare.namn}</p>
                    <p className="text-gray-400 text-sm">{uppdrag.stad}</p>
                  </div>
                </div>
                {betygSnitt && (
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-yellow-400">★</span>
                    <span className="font-medium text-gray-900">{betygSnitt}</span>
                    <span className="text-gray-400">({beställare.betyg_antal} uppdrag)</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

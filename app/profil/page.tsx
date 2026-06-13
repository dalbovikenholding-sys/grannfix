import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { KATEGORIER } from '@/lib/konstanter'

export const metadata: Metadata = {
  title: 'Min profil',
  description: 'Din profil på Grannfix med betyg, recensioner och uppdragshistorik.',
  robots: { index: false, follow: false },
}

export default async function ProfilPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login?returnTo=/profil')

  const [{ data: profil }, { data: uppdrag }, { data: betygRaw }] = await Promise.all([
    (supabase as any).from('profiles').select('*').eq('id', user.id).single(),
    (supabase as any).from('uppdrag').select('*').or(`beställare_id.eq.${user.id},utförare_id.eq.${user.id}`).eq('status', 'slutfört').order('skapad_datum', { ascending: false }).limit(5),
    (supabase as any).from('betyg').select('*').eq('till_id', user.id).order('skapad_datum', { ascending: false }),
  ])

  // Hämta visningsnamn för recensenter separat (undviker parser-fel på svenska tecken i select-alias)
  const recensioner: { id: string; stjärnor: number; kommentar: string | null; från: { namn: string } | null }[] = []
  for (const b of (betygRaw ?? [])) {
    const { data: prof } = await (supabase as any).from('profiles').select('namn').eq('id', b.från_id).single()
    recensioner.push({ ...b, från: prof })
  }

  if (!profil) redirect('/login')

  const betygSnitt = profil.betyg_antal > 0
    ? (profil.betyg_sum / profil.betyg_antal).toFixed(1)
    : null

  return (
    <div className="min-h-[calc(100vh-128px)] bg-[#f0faf4] px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center sticky top-24">
              <div className="w-24 h-24 rounded-full bg-[#1a6b3c]/10 flex items-center justify-center text-4xl font-bold text-[#1a6b3c] mx-auto mb-4">
                {profil.namn.charAt(0)}
              </div>
              <h1 className="text-xl font-bold text-gray-900 mb-1">{profil.namn}</h1>
              <p className="text-gray-400 text-sm mb-3">{profil.stad}</p>
              {profil.verifierad && (
                <div className="inline-flex items-center gap-1.5 bg-[#f0faf4] text-[#1a6b3c] text-xs font-medium px-3 py-1.5 rounded-full mb-4">
                  BankID-verifierad
                </div>
              )}
              {betygSnitt && (
                <div className="flex justify-center items-center gap-1.5 mb-6">
                  <span className="text-yellow-400 text-lg">★</span>
                  <span className="font-bold text-gray-900">{betygSnitt}</span>
                  <span className="text-gray-400 text-sm">({profil.betyg_antal} uppdrag)</span>
                </div>
              )}
              {profil.bio && (
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{profil.bio}</p>
              )}
              <Link href="/dashboard" className="w-full block border-2 border-[#1a6b3c] text-[#1a6b3c] py-3 rounded-full font-semibold text-sm text-center">
                Till min sida
              </Link>
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col gap-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-[#1a6b3c]">{profil.betyg_antal}</p>
                  <p className="text-gray-400 text-sm mt-1">Avslutade uppdrag</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#1a6b3c]">{betygSnitt ?? '–'}</p>
                  <p className="text-gray-400 text-sm mt-1">Genomsnittligt betyg</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#1a6b3c]">{profil.stad}</p>
                  <p className="text-gray-400 text-sm mt-1">Stad</p>
                </div>
              </div>
            </div>

            {(recensioner ?? []).length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Recensioner</h2>
                <div className="flex flex-col gap-6">
                  {(recensioner ?? []).map((r, i) => (
                    <div key={r.id} className={i > 0 ? 'pt-6 border-t border-gray-100' : ''}>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-600">
                          {(r.från as { namn: string })?.namn?.charAt(0) ?? '?'}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm">{(r.från as { namn: string })?.namn ?? 'Anonym'}</p>
                          <div className="flex">
                            {[...Array(5)].map((_, j) => (
                              <span key={j} className={j < r.stjärnor ? 'text-yellow-400 text-xs' : 'text-gray-200 text-xs'}>★</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      {r.kommentar && <p className="text-gray-600 text-sm leading-relaxed">&ldquo;{r.kommentar}&rdquo;</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {(uppdrag ?? []).length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Senaste uppdrag</h2>
                <div className="flex flex-col gap-3">
                  {(uppdrag ?? []).map((u: Record<string, any>) => (
                    <Link key={u.id} href={`/uppdrag/${u.id}`}
                      className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0 hover:text-[#1a6b3c] transition-colors group"
                    >
                      <div>
                        <p className="font-medium text-gray-900 group-hover:text-[#1a6b3c] transition-colors">{u.titel}</p>
                        <p className="text-gray-400 text-sm">{u.stad} · {u.datum}</p>
                      </div>
                      <span className="font-bold text-[#1a6b3c] whitespace-nowrap ml-4">{u.pris} kr</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

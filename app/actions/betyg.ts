'use server'

import { createClient } from '@/lib/supabase/server'

export async function lämnaBetyg(
  uppdragId: string,
  tillId: string,
  stjärnor: number,
  kommentar?: string
) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return { error: 'Inte inloggad.' }
  if (stjärnor < 1 || stjärnor > 5) return { error: 'Ogiltigt betyg.' }

  const { data: uppdrag } = await (supabase as any)
    .from('uppdrag')
    .select('beställare_id, utförare_id, status')
    .eq('id', uppdragId)
    .single()

  if (!uppdrag || uppdrag.status !== 'slutfört') return { error: 'Otillåtet.' }

  const förväntadTill =
    user.id === uppdrag.beställare_id ? uppdrag.utförare_id :
    user.id === uppdrag.utförare_id ? uppdrag.beställare_id :
    null

  if (!förväntadTill || förväntadTill !== tillId) return { error: 'Otillåtet.' }

  const { error } = await (supabase as any)
    .from('betyg')
    .insert({
      uppdrag_id: uppdragId,
      från_id: user.id,
      till_id: tillId,
      stjärnor,
      kommentar: kommentar || null,
    })

  if (error) {
    if (error.code === '23505') return { error: 'Du har redan lämnat betyg på detta uppdrag.' }
    return { error: error.message }
  }

  if (stjärnor >= 4) {
    const { data: prof } = await (supabase as any)
      .from('profiles')
      .select('betyg_positiva')
      .eq('id', tillId)
      .single()
    if (prof) {
      await (supabase as any)
        .from('profiles')
        .update({ betyg_positiva: (prof.betyg_positiva ?? 0) + 1 })
        .eq('id', tillId)
    }
  }

  return { ok: true }
}

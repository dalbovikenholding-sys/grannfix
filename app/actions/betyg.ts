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

  return { ok: true }
}

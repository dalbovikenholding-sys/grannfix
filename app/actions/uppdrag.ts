'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import type { Kategori } from '@/lib/supabase/types'

export async function skapaUppdrag(formData: FormData) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  const { error, data } = await (supabase as any)
    .from('uppdrag')
    .insert({
      beställare_id: user.id,
      kategori: formData.get('kategori') as Kategori,
      titel: formData.get('titel') as string,
      beskrivning: formData.get('beskrivning') as string,
      adress: formData.get('adress') as string,
      stad: formData.get('stad') as string,
      pris: Number(formData.get('pris')),
      datum: formData.get('datum') as string,
      status: 'öppen',
    })
    .select('id')
    .single()

  if (error) return { error: error.message }

  redirect(`/uppdrag/${data.id}?skapad=1`)
}

export async function anmälIntresse(uppdragId: string, meddelande?: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return { error: 'Du måste vara inloggad.' }

  const { error } = await (supabase as any)
    .from('intresseanmalningar')
    .insert({
      uppdrag_id: uppdragId,
      utförare_id: user.id,
      meddelande: meddelande || null,
    })

  if (error) {
    if (error.code === '23505') return { error: 'Du har redan anmält intresse.' }
    return { error: error.message }
  }

  return { ok: true }
}

export async function accepteraUtförare(uppdragId: string, utförareId: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return { error: 'Inte inloggad.' }

  const { error } = await (supabase as any)
    .from('uppdrag')
    .update({ utförare_id: utförareId, status: 'accepterad' })
    .eq('id', uppdragId)
    .eq('beställare_id', user.id)

  if (error) return { error: error.message }

  return { ok: true }
}

export async function markeraSlutfört(uppdragId: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return { error: 'Inte inloggad.' }

  const { error } = await (supabase as any)
    .from('uppdrag')
    .update({ status: 'slutfört' })
    .eq('id', uppdragId)
    .eq('beställare_id', user.id)

  if (error) return { error: error.message }

  return { ok: true }
}

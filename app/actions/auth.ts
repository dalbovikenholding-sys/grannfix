'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export async function registrera(formData: FormData) {
  const supabase = await createClient()

  const namn = formData.get('namn') as string
  const epost = formData.get('epost') as string
  const stad = formData.get('stad') as string
  const losenord = formData.get('losenord') as string

  const { error } = await supabase.auth.signUp({
    email: epost,
    password: losenord,
    options: {
      data: { namn, stad },
    },
  })

  if (error) {
    return { error: error.message }
  }

  redirect('/dashboard?ny=1')
}

export async function loggaIn(formData: FormData) {
  const supabase = await createClient()

  const epost = formData.get('epost') as string
  const losenord = formData.get('losenord') as string

  const { error } = await supabase.auth.signInWithPassword({ email: epost, password: losenord })

  if (error) {
    return { error: 'Fel e-postadress eller lösenord.' }
  }

  const raw = (formData.get('returnTo') as string) || '/dashboard'
  const returnTo = raw.startsWith('/') && !raw.startsWith('//') && !raw.startsWith('/\\') ? raw : '/dashboard'
  redirect(returnTo)
}

export async function loggaUt() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/')
}

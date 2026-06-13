import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { stripe, beräknaAvgift } from '@/lib/stripe'

export async function POST(request: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Inte inloggad.' }, { status: 401 })
  }

  const { uppdragId } = await request.json()

  const { data: uppdrag, error } = await (supabase as any)
    .from('uppdrag')
    .select('*')
    .eq('id', uppdragId)
    .eq('beställare_id', user.id)
    .eq('status', 'accepterad')
    .single()

  if (error || !uppdrag) {
    return NextResponse.json({ error: 'Uppdraget hittades inte.' }, { status: 404 })
  }

  const { brutto, avgift } = beräknaAvgift(uppdrag.pris)
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://grannfix.se'

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [
      {
        price_data: {
          currency: 'sek',
          unit_amount: brutto * 100,
          product_data: {
            name: uppdrag.titel,
            description: `Grannfix-uppdrag i ${uppdrag.stad}`,
          },
        },
        quantity: 1,
      },
    ],
    payment_intent_data: {
      application_fee_amount: avgift * 100,
      metadata: { uppdragId, beställareId: user.id },
    },
    success_url: `${appUrl}/uppdrag/${uppdragId}?betalt=1`,
    cancel_url: `${appUrl}/uppdrag/${uppdragId}`,
    metadata: { uppdragId },
  })

  // Spara payment intent id – status sätts till 'pågående' av webhookens payment_intent.succeeded
  if (session.payment_intent) {
    await (supabase as any)
      .from('uppdrag')
      .update({ stripe_payment_intent_id: session.payment_intent as string })
      .eq('id', uppdragId)
  }

  return NextResponse.json({ url: session.url })
}

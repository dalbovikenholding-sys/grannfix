import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getStripe } from '@/lib/stripe'
import { createServerClient } from '@supabase/ssr'

// Supabase service-role klient för webhook (kringgår RLS)
function createServiceClient() {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { cookies: { getAll: () => [], setAll: () => {} } }
  )
}

export async function POST(request: NextRequest) {
  const body = await request.text()
  const sig = request.headers.get('stripe-signature')!

  let event
  try {
    event = getStripe().webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch {
    return NextResponse.json({ error: 'Ogiltig webhook-signatur.' }, { status: 400 })
  }

  const supabase = createServiceClient()

  if (event.type === 'payment_intent.succeeded') {
    const pi = event.data.object
    const uppdragId = pi.metadata?.uppdragId

    if (uppdragId) {
      await supabase
        .from('uppdrag')
        .update({ status: 'pågående' })
        .eq('id', uppdragId)
    }
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    const uppdragId = session.metadata?.uppdragId

    if (uppdragId) {
      await supabase
        .from('uppdrag')
        .update({
          stripe_payment_intent_id: session.payment_intent as string,
          status: 'pågående',
        })
        .eq('id', uppdragId)
    }
  }

  return NextResponse.json({ received: true })
}

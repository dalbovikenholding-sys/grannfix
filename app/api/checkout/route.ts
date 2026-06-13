import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Betalningsflöde via Stripe Connect (att implementera före lansering)
 *
 * Installations- och konfigurationssteg:
 * 1. npm install stripe
 * 2. Lägg till i .env.local:
 *    STRIPE_SECRET_KEY=sk_live_...
 *    STRIPE_WEBHOOK_SECRET=whsec_...
 *    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
 * 3. Skapa Stripe Connect-konto för varje ny utförare vid registrering
 *    (POST /api/connect/onboard)
 * 4. Skapa Payment Intent med transfer_data när beställaren bekräftar uppdrag
 * 5. Frigör beloppet till utföraren via Transfer när beställaren godkänt
 *
 * Escrow-flöde:
 *   Beställare betalar → funds spärrade → uppdrag utfört →
 *   Beställare godkänner → Stripe Transfer till utförare
 *   (minus 15 % serviceavgift + Stripes transaktionskostnad)
 *
 * Referens: https://stripe.com/docs/connect/collect-then-transfer-guide
 */

export async function POST(request: NextRequest) {
  return NextResponse.json(
    {
      error: 'Betaltjänst är inte konfigurerad ännu.',
      info: 'Grannfix integrerar Stripe Connect vid lansering hösten 2026.',
    },
    { status: 503 }
  )
}

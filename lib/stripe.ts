import Stripe from 'stripe'

let _stripe: Stripe | null = null

export function getStripe(): Stripe {
  if (!_stripe) {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error('STRIPE_SECRET_KEY saknas i miljövariabler.')
    }
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2026-05-27.dahlia',
    })
  }
  return _stripe
}

export const SERVICEAVGIFT_PROCENT = 0.15
export const SERVICEAVGIFT_MIN_ÖRE = 2500 // 25 kr i ören

export function beräknaAvgift(prisKr: number): {
  brutto: number
  avgift: number
  netto: number
} {
  const avgift = Math.max(
    Math.round(prisKr * SERVICEAVGIFT_PROCENT),
    SERVICEAVGIFT_MIN_ÖRE / 100
  )
  return {
    brutto: prisKr,
    avgift,
    netto: prisKr - avgift,
  }
}

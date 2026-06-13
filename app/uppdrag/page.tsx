import { createClient } from '@/lib/supabase/server'
import UppdragLista from '@/components/UppdragLista'
import Link from 'next/link'

export const revalidate = 60

export default async function UppdragPage() {
  const supabase = await createClient()

  const { data: uppdrag } = await (supabase as any)
    .from('uppdrag')
    .select('*')
    .eq('status', 'öppen')
    .order('skapad_datum', { ascending: false })

  return (
    <div className="min-h-[calc(100vh-128px)] bg-white">
      <div className="bg-[#f0faf4] px-6 py-12 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Hitta uppdrag</h1>
          <p className="text-gray-500 mb-8">Bläddra bland uppdrag i Norrbotten och anmäl ditt intresse</p>
          <div className="flex justify-end">
            <Link
              href="/uppdrag/ny"
              className="btn-primary bg-[#1a6b3c] text-white text-sm px-5 py-2.5 rounded-full font-medium"
            >
              Lägg ut uppdrag
            </Link>
          </div>
        </div>
      </div>

      <div className="px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <UppdragLista uppdrag={uppdrag ?? []} />
        </div>
      </div>
    </div>
  )
}

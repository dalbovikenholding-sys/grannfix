import type { Kategori } from '@/lib/supabase/types'

export const KATEGORIER: Record<Kategori, { ikon: string; etikett: string }> = {
  flytta:      { ikon: '📦', etikett: 'Flytta & bära' },
  städ:        { ikon: '🧹', etikett: 'Städhjälp' },
  trädgård:    { ikon: '🌿', etikett: 'Trädgård & snö' },
  småfix:      { ikon: '🔧', etikett: 'Småfix & montering' },
  hämta:       { ikon: '🚗', etikett: 'Hämta & lämna' },
  bortskänkes: { ikon: '🎁', etikett: 'Bortskänkes' },
}

export const STÄDER = ['Luleå', 'Boden', 'Piteå', 'Kiruna', 'Gällivare', 'Övriga Norrbotten']

export const PRISSUGGEST: Record<Kategori, string> = {
  flytta:      '400–1 600 kr beroende på storlek',
  städ:        '450–1 200 kr beroende på yta',
  trädgård:    '300–600 kr per 2 timmar',
  småfix:      '150–500 kr beroende på jobb',
  hämta:       '200–400 kr',
  bortskänkes: '50–150 kr',
}

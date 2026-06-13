export type Kategori = 'flytta' | 'städ' | 'trädgård' | 'småfix' | 'hämta' | 'bortskänkes'

export interface Uppdrag {
  id: string
  titel: string
  beskrivning: string
  kategori: Kategori
  stad: string
  adress: string
  pris: number
  datum: string
  skapadDatum: string
  intresserade: number
  beställare: {
    namn: string
    betyg: number
    antalUppdrag: number
  }
}

export const KATEGORIER: Record<Kategori, { ikon: string; etikett: string }> = {
  flytta: { ikon: '📦', etikett: 'Flytta & bära' },
  städ: { ikon: '🧹', etikett: 'Städhjälp' },
  trädgård: { ikon: '🌿', etikett: 'Trädgård & snö' },
  småfix: { ikon: '🔧', etikett: 'Småfix & montering' },
  hämta: { ikon: '🚗', etikett: 'Hämta & lämna' },
  bortskänkes: { ikon: '🎁', etikett: 'Bortskänkes' },
}

export const mockUppdrag: Uppdrag[] = [
  {
    id: '1',
    titel: 'Flytt av 2:a i Centrum',
    beskrivning:
      'Behöver hjälp med att flytta från en 2-rumslägenhet på Storgatan till ny adress på Kungsgatan. Ungefär 30 kartonger och lite möbler. Bil finns om det behövs.',
    kategori: 'flytta',
    stad: 'Luleå',
    adress: 'Storgatan 14, Luleå',
    pris: 600,
    datum: '2026-06-20',
    skapadDatum: '2026-06-13',
    intresserade: 3,
    beställare: { namn: 'Anna K.', betyg: 4.8, antalUppdrag: 7 },
  },
  {
    id: '2',
    titel: 'Snöskottning av uppfart',
    beskrivning:
      'Behöver hjälp att skotta en normalstor uppfart plus trappen upp till huset. Räknar med ca 45 minuter arbete.',
    kategori: 'trädgård',
    stad: 'Boden',
    adress: 'Tallvägen 8, Boden',
    pris: 300,
    datum: '2026-06-18',
    skapadDatum: '2026-06-12',
    intresserade: 1,
    beställare: { namn: 'Marcus L.', betyg: 5.0, antalUppdrag: 12 },
  },
  {
    id: '3',
    titel: 'Storstäd av 3:a inför försäljning',
    beskrivning:
      'Lägenheten ska visas nästa helg och behöver en ordentlig storstädning. Badrum, kök och alla rum. Städmaterial finns hemma.',
    kategori: 'städ',
    stad: 'Piteå',
    adress: 'Hamngatan 22, Piteå',
    pris: 900,
    datum: '2026-06-19',
    skapadDatum: '2026-06-11',
    intresserade: 5,
    beställare: { namn: 'Sara N.', betyg: 4.6, antalUppdrag: 3 },
  },
  {
    id: '4',
    titel: 'IKEA-montering av PAX-garderob',
    beskrivning:
      'Har köpt en PAX garderob med tre sektioner och behöver hjälp att montera den. Alla delar finns hemma, verktyg saknas.',
    kategori: 'småfix',
    stad: 'Luleå',
    adress: 'Bergsgatan 5, Luleå',
    pris: 350,
    datum: '2026-06-21',
    skapadDatum: '2026-06-13',
    intresserade: 2,
    beställare: { namn: 'Erik H.', betyg: 4.9, antalUppdrag: 15 },
  },
  {
    id: '5',
    titel: 'Hämta soffa från Marketplace',
    beskrivning:
      'Köpt en soffa på Facebook Marketplace i Svartöstaden och behöver hjälp att hämta och bära in den. Kompisbil eller skåpbil krävs.',
    kategori: 'hämta',
    stad: 'Luleå',
    adress: 'Svartövägen 3, Luleå',
    pris: 250,
    datum: '2026-06-17',
    skapadDatum: '2026-06-10',
    intresserade: 4,
    beställare: { namn: 'Linda P.', betyg: 4.7, antalUppdrag: 8 },
  },
  {
    id: '6',
    titel: 'Trädgårdsklippning och krattning',
    beskrivning:
      'Trädgården är på ca 200 kvm och behöver gräsklippning, häckklippning och krattning av löv. Gräsklippare och häcksax finns.',
    kategori: 'trädgård',
    stad: 'Kiruna',
    adress: 'Gruvvägen 12, Kiruna',
    pris: 500,
    datum: '2026-06-22',
    skapadDatum: '2026-06-13',
    intresserade: 0,
    beställare: { namn: 'Thomas B.', betyg: 4.5, antalUppdrag: 5 },
  },
  {
    id: '7',
    titel: 'Bortskänkes: Gamla bokhyllor',
    beskrivning:
      'Har tre BILLY bokhyllor som ska bort. Bra skick. Hämtas senast helgen. Hjälp med nedmontering och utbärning ersätts.',
    kategori: 'bortskänkes',
    stad: 'Gällivare',
    adress: 'Malmvägen 7, Gällivare',
    pris: 100,
    datum: '2026-06-16',
    skapadDatum: '2026-06-09',
    intresserade: 6,
    beställare: { namn: 'Maja S.', betyg: 4.3, antalUppdrag: 2 },
  },
  {
    id: '8',
    titel: 'Inflyttningsstäd 1:a',
    beskrivning:
      'Ny lägenhet på 35 kvm som behöver städas ordentligt innan inflyttning. Städmaterial tillhandahålls.',
    kategori: 'städ',
    stad: 'Boden',
    adress: 'Centrumgatan 18, Boden',
    pris: 450,
    datum: '2026-06-23',
    skapadDatum: '2026-06-12',
    intresserade: 2,
    beställare: { namn: 'Johan A.', betyg: 5.0, antalUppdrag: 1 },
  },
  {
    id: '9',
    titel: 'Transport till återvinningscentral',
    beskrivning:
      'Har ett lass med skräp som behöver köras till återvinningscentralen. Behöver hjälp med bil och lastning.',
    kategori: 'hämta',
    stad: 'Piteå',
    adress: 'Industrigatan 4, Piteå',
    pris: 400,
    datum: '2026-06-20',
    skapadDatum: '2026-06-11',
    intresserade: 1,
    beställare: { namn: 'Karin E.', betyg: 4.8, antalUppdrag: 9 },
  },
  {
    id: '10',
    titel: 'Montering av TV-fäste',
    beskrivning:
      'Behöver montera ett TV-fäste på betongvägg. Har fäste och TV. Borr saknas. Beräknas ta 30 minuter.',
    kategori: 'småfix',
    stad: 'Luleå',
    adress: 'Hertsövägen 9, Luleå',
    pris: 200,
    datum: '2026-06-19',
    skapadDatum: '2026-06-13',
    intresserade: 3,
    beställare: { namn: 'Peter G.', betyg: 4.6, antalUppdrag: 4 },
  },
  {
    id: '11',
    titel: 'Stor flytt 4:a med magasin',
    beskrivning:
      'Behöver hjälp med flytt av en stor 4-rumslägenhet inklusive källarförråd. Räknar med en hel dag arbete för 2 personer.',
    kategori: 'flytta',
    stad: 'Kiruna',
    adress: 'Hjalmar Lundbomsgatan 3, Kiruna',
    pris: 1400,
    datum: '2026-06-28',
    skapadDatum: '2026-06-10',
    intresserade: 2,
    beställare: { namn: 'Ulrika M.', betyg: 4.9, antalUppdrag: 6 },
  },
  {
    id: '12',
    titel: 'Hämta byggmaterial från Bauhaus',
    beskrivning:
      'Ska köpa trallvirke och uteplatsplattor men har ingen bil som rymmer det. Behöver skåpbil eller trailer.',
    kategori: 'hämta',
    stad: 'Luleå',
    adress: 'Bauhaus Luleå, Kronanvägen',
    pris: 300,
    datum: '2026-06-21',
    skapadDatum: '2026-06-13',
    intresserade: 0,
    beställare: { namn: 'Nicklas F.', betyg: 4.7, antalUppdrag: 11 },
  },
]

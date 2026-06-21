ALTER TABLE uppdrag
  ADD COLUMN IF NOT EXISTS bild_url TEXT,
  ADD COLUMN IF NOT EXISTS fastighetstyp TEXT CHECK (fastighetstyp IN ('hus','lägenhet','lokal')),
  ADD COLUMN IF NOT EXISTS vaaning INTEGER DEFAULT 0,
  ADD COLUMN IF NOT EXISTS hiss BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS placering TEXT,
  ADD COLUMN IF NOT EXISTS fordonsstorlek TEXT CHECK (fordonsstorlek IN ('bil','skåpbil','skåpbil_xl'));

ALTER TABLE intresseanmalningar
  ADD COLUMN IF NOT EXISTS foreslagen_pris INTEGER;

ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS betyg_positiva INTEGER DEFAULT 0;

INSERT INTO storage.buckets (id, name, public)
VALUES ('uppdrag-bilder', 'uppdrag-bilder', true)
ON CONFLICT (id) DO NOTHING;

DROP POLICY IF EXISTS "public read uppdrag-bilder" ON storage.objects;
CREATE POLICY "public read uppdrag-bilder"
  ON storage.objects FOR SELECT USING (bucket_id = 'uppdrag-bilder');

DROP POLICY IF EXISTS "auth upload uppdrag-bilder" ON storage.objects;
CREATE POLICY "auth upload uppdrag-bilder"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'uppdrag-bilder' AND auth.role() = 'authenticated');

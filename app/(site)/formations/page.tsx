import Link from 'next/link'
import { supabase } from '@/lib/supabase'

type FormationCard = {
  code: string
  titre: string
  accroche: string
  duree: string
  finançable: boolean
}

export default async function FormationsPage() {
  const { data: formations, error } = await supabase
    .from('formations')
    .select('code, titre, accroche, duree, finançable')
    .eq('actif', true)
    .order('ordre')

  if (error) console.error('[formations] Supabase error:', error)

  const items = (formations ?? []) as FormationCard[]

  return (
    <>
      <section className="border-b border-white/10 py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-bordeaux">
            Formations professionnelles
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-cream sm:text-5xl">
            Développez les compétences
            <br />
            de vos équipes
          </h1>
          <p className="mt-5 text-lg text-cream/60">
            Des formations certifiantes et finançables, conçues pour les
            professionnels de la restauration et de l&apos;hôtellerie.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        {items.length === 0 ? (
          <p className="text-center text-cream/40">
            Aucune formation disponible pour le moment.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((f) => (
              <Link
                key={f.code}
                href={`/formations/${f.code}`}
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-bordeaux/40 hover:bg-white/[0.08]"
              >
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-bordeaux/20 px-3 py-1 text-xs font-mono font-semibold text-bordeaux">
                    {f.code}
                  </span>
                  {f.finançable && (
                    <span className="rounded-full bg-sage/20 px-3 py-1 text-xs font-semibold text-sage">
                      Finançable OPCO
                    </span>
                  )}
                </div>
                <h2 className="mb-3 text-lg font-semibold text-cream">
                  {f.titre}
                </h2>
                <p className="flex-1 text-sm leading-relaxed text-cream/60">
                  {f.accroche}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-xs text-cream/40">{f.duree}</span>
                  <span className="text-sm font-medium text-bordeaux">
                    Découvrir →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="border-t border-white/10 py-16 text-center">
        <div className="mx-auto max-w-xl px-6">
          <h2 className="text-2xl font-bold text-cream">
            Une formation sur-mesure ?
          </h2>
          <p className="mt-3 text-cream/60">
            Contactez-nous pour adapter un programme à vos besoins ou concevoir
            une session intra-entreprise.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-bordeaux px-8 py-3 text-sm font-medium text-cream transition-colors hover:bg-bordeaux/80"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  )
}

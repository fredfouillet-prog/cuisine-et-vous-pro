import Link from 'next/link'
import { notFound } from 'next/navigation'
import { supabase } from '@/lib/supabase'

type ProgrammeModule = {
  module: string
  titre: string
  contenu: string[]
}

type Formation = {
  code: string
  titre: string
  accroche: string
  objectif_general: string
  public_concerne: string
  duree: string
  modalites: string
  programme: ProgrammeModule[]
  competences: string[]
  finançable: boolean
}

export default async function FormationPage({
  params,
}: {
  params: Promise<{ code: string }>
}) {
  const { code } = await params

  const { data: formation } = await supabase
    .from('formations')
    .select('*')
    .eq('code', code.toUpperCase())
    .eq('actif', true)
    .single<Formation>()

  if (!formation) notFound()

  const programme = formation.programme as ProgrammeModule[]
  const competences = formation.competences as string[]

  return (
    <>
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <nav className="flex items-center gap-2 text-sm text-cream/40">
            <Link
              href="/formations"
              className="transition-colors hover:text-cream/70"
            >
              Formations
            </Link>
            <span>/</span>
            <span className="text-cream/70">{formation.titre}</span>
          </nav>
        </div>
      </div>

      <section className="border-b border-white/10 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-bordeaux/20 px-3 py-1 text-xs font-mono font-semibold text-bordeaux">
              {formation.code}
            </span>
            {formation.finançable && (
              <span className="rounded-full bg-sage/20 px-3 py-1 text-xs font-semibold text-sage">
                Finançable OPCO
              </span>
            )}
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-cream sm:text-5xl">
            {formation.titre}
          </h1>
          <p className="mt-5 text-xl leading-relaxed text-cream/70">
            {formation.accroche}
          </p>
          <div className="mt-8">
            <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-cream/70">
              <svg
                className="h-4 w-4 text-bordeaux"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
                />
              </svg>
              {formation.duree}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl space-y-14 px-6 py-16">
        <section>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-bordeaux">
            Objectif de la formation
          </h2>
          <p className="leading-relaxed text-cream/80">
            {formation.objectif_general}
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-bordeaux">
            Public concerné
          </h2>
          <p className="leading-relaxed text-cream/80">
            {formation.public_concerne}
          </p>
        </section>

        <section>
          <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-bordeaux">
            Programme
          </h2>
          <div className="space-y-4">
            {programme.map((mod) => (
              <div
                key={mod.module}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-bordeaux/20 text-xs font-bold text-bordeaux">
                    {mod.module}
                  </span>
                  <h3 className="font-semibold text-cream">{mod.titre}</h3>
                </div>
                <ul className="space-y-2">
                  {mod.contenu.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-cream/70"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-bordeaux">
            Compétences acquises
          </h2>
          <ul className="space-y-3">
            {competences.map((c, i) => (
              <li key={i} className="flex items-start gap-3 text-cream/80">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-sage"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {c}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-bordeaux">
            Modalités
          </h2>
          <p className="leading-relaxed text-cream/80">{formation.modalites}</p>
        </section>

        <section className="rounded-2xl border border-bordeaux/30 bg-bordeaux/10 p-8 text-center">
          <h2 className="text-xl font-bold text-cream">
            Prêt à vous inscrire ?
          </h2>
          <p className="mt-2 text-cream/60">
            Contactez-nous pour connaître les prochaines dates et organiser
            votre inscription.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-bordeaux px-8 py-3 text-sm font-medium text-cream transition-colors hover:bg-bordeaux/80"
          >
            Demander un devis
          </Link>
        </section>
      </div>
    </>
  )
}

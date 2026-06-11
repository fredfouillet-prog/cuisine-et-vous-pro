import SiteLayout from "@/components/SiteLayout";

export default function HomePage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 py-32 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-cream">
          Révélez le potentiel de vos équipes
          <br />
          <span className="text-bordeaux">autour de la cuisine</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-cream/60">
          Team building culinaire et formations professionnelles sur-mesure pour entreprises.
          Réservez votre expérience Cuisine et Vous Pro.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/team-building"
            className="rounded-full bg-bordeaux px-8 py-3 text-sm font-medium text-cream transition-colors hover:bg-bordeaux/80"
          >
            Découvrir le team building
          </a>
          <a
            href="/formations"
            className="rounded-full border border-white/20 px-8 py-3 text-sm font-medium text-cream transition-colors hover:border-white/40"
          >
            Voir les formations
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}

import Link from "next/link";

const navLinks = [
  { href: "/team-building", label: "Team Building" },
  { href: "/formations", label: "Formations" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-semibold tracking-tight text-cream">
            Cuisine<span className="text-bordeaux">&amp;</span>Vous Pro
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-cream/70 transition-colors hover:text-cream"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="rounded-full bg-bordeaux px-5 py-2 text-sm font-medium text-cream transition-colors hover:bg-bordeaux/80"
          >
            Nous contacter
          </Link>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-cream/40">
        © {new Date().getFullYear()} Cuisine et Vous Pro —{" "}
        <span className="text-cream/30">pro.cuisineetvous.net</span>
      </footer>
    </div>
  );
}

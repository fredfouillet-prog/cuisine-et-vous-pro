import Link from "next/link";

const adminLinks = [
  { href: "/admin/dashboard", label: "Tableau de bord" },
  { href: "/admin/reservations", label: "Réservations" },
  { href: "/admin/catalogue", label: "Catalogue" },
  { href: "/admin/clients", label: "Clients" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="flex w-60 flex-col border-r border-white/10 bg-ink">
        <div className="border-b border-white/10 p-6">
          <Link href="/admin/dashboard" className="text-sm font-semibold text-cream">
            CeV Pro <span className="text-bordeaux">Admin</span>
          </Link>
        </div>
        <nav className="flex-1 space-y-1 p-4">
          {adminLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-lg px-3 py-2 text-sm text-cream/60 transition-colors hover:bg-white/5 hover:text-cream"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}

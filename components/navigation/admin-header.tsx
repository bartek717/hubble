import Link from "next/link";

const adminLinks = [
  { href: "/admin/events", label: "Events" },
  { href: "/admin/baskets", label: "Baskets" },
  { href: "/admin/analogs", label: "Analogs" },
];

export default function AdminHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-surface/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/admin/events" className="text-lg font-semibold tracking-tight">
          Hubble Admin
        </Link>
        <nav className="hidden items-center gap-5 text-sm text-muted md:flex">
          {adminLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-fg">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/app/explore"
          className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-fg/80 hover:bg-card"
        >
          Back to app
        </Link>
      </div>
    </header>
  );
}

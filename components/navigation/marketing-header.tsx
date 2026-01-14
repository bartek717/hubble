import Link from "next/link";
import ThemeToggle from "../theme-toggle";

const links = [
  { href: "/pricing", label: "Pricing" },
  { href: "/methodology", label: "Methodology" },
  { href: "/app/explore", label: "Explore" },
];

export default function MarketingHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-surface/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Hubble
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-fg">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/app/explore"
            className="hidden rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-fg/80 hover:bg-card md:inline-flex"
          >
            Open app
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

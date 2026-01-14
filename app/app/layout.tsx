import Link from "next/link";
import ThemeToggle from "../../components/theme-toggle";

const appLinks = [
  { href: "/app/explore", label: "Explore" },
  { href: "/app/library", label: "Library" },
  { href: "/app/watchlist", label: "Watchlist" },
  { href: "/app/alerts", label: "Alerts" },
  { href: "/app/settings", label: "Settings" },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/app/explore" className="text-lg font-semibold">
            Hubble
          </Link>
          <nav className="flex items-center gap-5 text-sm text-muted">
            {appLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-fg">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/app/account"
              className="rounded-full border border-border px-4 py-2 text-xs font-semibold text-fg/80 hover:bg-card"
            >
              Account
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}

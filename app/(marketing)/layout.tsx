import Link from "next/link";
import ThemeToggle from "../../components/theme-toggle";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-semibold">
            Hubble
          </Link>
          <nav className="flex items-center gap-6 text-sm text-muted">
            <Link href="/pricing" className="hover:text-fg">
              Pricing
            </Link>
            <Link href="/methodology" className="hover:text-fg">
              Methodology
            </Link>
            <Link href="/app/explore" className="hover:text-fg">
              Explore
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-border bg-surface">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-sm text-muted">
          <p>Hubble — probability-aware market expectations.</p>
          <div className="flex gap-4">
            <Link href="/methodology" className="hover:text-fg">
              Methodology
            </Link>
            <Link href="/pricing" className="hover:text-fg">
              Pricing
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

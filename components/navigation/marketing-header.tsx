import Link from "next/link";
import ThemeToggle from "../theme-toggle";

export default function MarketingHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-surface/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-end gap-4 px-6 py-4">
        <Link href="/sign-in" className="text-sm font-semibold text-fg/80 hover:text-fg">
          Sign in
        </Link>
        <Link
          href="/sign-up"
          className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-fg/80 hover:bg-card"
        >
          Sign up
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}

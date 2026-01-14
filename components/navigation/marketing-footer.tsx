import Link from "next/link";

const footerLinks = [
  { href: "/methodology", label: "Methodology" },
  { href: "/pricing", label: "Pricing" },
  { href: "/app/explore", label: "Explore" },
];

export default function MarketingFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-muted">
        <div>
          <p className="text-base font-semibold text-fg">Hubble</p>
          <p>Probability-aware market expectations.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-fg">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

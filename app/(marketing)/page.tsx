import Link from "next/link";
import Card from "../../components/ui/card";
import { events, eventPackHighlights } from "../../lib/mock-data";

export default function MarketingHome() {
  const featured = events[0];

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-12">
      <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="flex flex-col gap-6">
          <p className="text-xs uppercase tracking-[0.25em] text-muted">Event Expectations</p>
          <h1 className="text-4xl font-semibold leading-tight">
            Turn major world events into probability-aware market expectations.
          </h1>
          <p className="text-lg text-muted">
            Hubble blends prediction market odds, market proxies, and narrative
            triggers into a clear Expected Move view for retail investors.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/app/explore"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              Explore events
            </Link>
            <Link
              href="/pricing"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-fg/90 hover:bg-surface"
            >
              See pricing
            </Link>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-muted">
            <span>Odds × Impact → Expected Move</span>
            <span>Alerts when odds move</span>
            <span>Downloadable pack brief</span>
          </div>
        </div>
        <Card>
          <p className="text-xs uppercase tracking-wide text-muted">Featured event</p>
          <h2 className="mt-2 text-xl font-semibold">{featured.title}</h2>
          <p className="mt-3 text-sm text-muted">{featured.description}</p>
          <div className="mt-6 space-y-3 text-sm">
            <p className="text-muted">Expected move range:</p>
            <p className="text-2xl font-semibold">
              {featured.expectedMove.low}% to {featured.expectedMove.high}%
            </p>
            <div className="flex flex-wrap gap-2">
              {featured.baskets.map((basket) => (
                <span
                  key={basket}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted"
                >
                  {basket}
                </span>
              ))}
            </div>
          </div>
        </Card>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Probability lens",
            description: "Live odds from prediction markets with deltas and liquidity cues.",
          },
          {
            title: "Market impact",
            description: "ETF/proxy baskets and historical analogs to anchor ranges.",
          },
          {
            title: "Trigger playbook",
            description: "Narrative shifts, data releases, and what changes the view.",
          },
        ].map((feature) => (
          <Card key={feature.title} className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-sm text-muted">{feature.description}</p>
          </Card>
        ))}
      </section>

      <section className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <Card className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Event Expectations Pack</h3>
          <p className="text-sm text-muted">
            $10 per event. Premium brief, ongoing updates, and alerting for that
            event.
          </p>
          <ul className="space-y-2 text-sm text-muted">
            {eventPackHighlights.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <Link
            href="/pricing"
            className="mt-2 inline-flex w-fit rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            Buy a pack
          </Link>
        </Card>
        <Card className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">For fast-moving investors</h3>
          <p className="text-sm text-muted">
            Built for headline-driven traders who want clarity without the
            institutional noise.
          </p>
          <div className="grid gap-3 text-sm text-muted">
            <div className="rounded-xl border border-border bg-surface p-3">
              <p className="text-xs uppercase tracking-wide text-muted">Success metrics</p>
              <p className="mt-2">Event Detail → Purchase conversion</p>
              <p>Packs per user per month</p>
              <p>Repeat purchase rate</p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-3">
              <p className="text-xs uppercase tracking-wide text-muted">Alerts</p>
              <p className="mt-2">Odds movement threshold alerts</p>
              <p>Trigger checklist notifications</p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}

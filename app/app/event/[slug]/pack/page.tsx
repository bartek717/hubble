import { notFound } from "next/navigation";
import PageShell from "../../../../../components/page-shell";
import Card from "../../../../../components/ui/card";
import ProbabilityPill from "../../../../../components/probability-pill";
import { events } from "../../../../../lib/mock-data";

type EventPackPageProps = {
  params: { slug: string };
};

export default function EventPackPage({ params }: EventPackPageProps) {
  const event = events.find((item) => item.slug === params.slug);

  if (!event) {
    notFound();
  }

  return (
    <PageShell
      title={`${event.title} — Pack`}
      description="Unlocked Event Expectations Pack with full scenarios and alerts."
      actions={<ProbabilityPill probability={event.probability} delta={event.delta} />}
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Pack</p>
          <h2 className="text-lg font-semibold">Expected move ranges</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { label: "1D", value: `${event.expectedMove.low}% to ${event.expectedMove.high}%` },
              { label: "1W", value: `${event.expectedMove.low - 0.8}% to ${event.expectedMove.high + 0.6}%` },
              { label: "1M", value: `${event.expectedMove.low - 1.4}% to ${event.expectedMove.high + 1.1}%` },
            ].map((row) => (
              <div key={row.label} className="rounded-xl border border-border bg-surface/70 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted">{row.label}</p>
                <p className="mt-2 text-lg font-semibold">{row.value}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-border bg-surface/70 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Impact heatmap</p>
            <p className="mt-2 text-sm text-muted">
              Basket sensitivity matrix across horizons with low / mid / high bands.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface/70 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Analogs</p>
            <ul className="mt-2 space-y-2 text-sm text-muted">
              <li>• 2019 Powell pivot, equities +4.2%</li>
              <li>• 2001 surprise cut, duration bid +3.1%</li>
              <li>• 2015 growth scare, cyclicals -2.0%</li>
            </ul>
          </div>
        </Card>
        <Card className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Live signals</p>
          <h3 className="text-lg font-semibold">Trigger checklist</h3>
          <ul className="space-y-2 text-sm text-muted">
            {event.triggers.map((trigger) => (
              <li key={trigger} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber/70" />
                {trigger}
              </li>
            ))}
          </ul>
          <div className="rounded-xl border border-border bg-surface/70 p-4 text-sm text-muted">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Update log</p>
            <p className="mt-2">Latest odds snapshot refreshed 45 minutes ago.</p>
            <p>Next update scheduled in 4 hours.</p>
          </div>
          <button className="inline-flex w-fit rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white hover:opacity-90">
            Download PDF brief
          </button>
        </Card>
      </div>
    </PageShell>
  );
}

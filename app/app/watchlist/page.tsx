import PageShell from "../../../components/page-shell";
import Card from "../../../components/ui/card";
import ProbabilityPill from "../../../components/probability-pill";
import { events } from "../../../lib/mock-data";

export default function WatchlistPage() {
  return (
    <PageShell
      title="Watchlist"
      description="Track probabilities and trigger alerts across saved events."
    >
      <div className="grid gap-6">
        {events.map((event) => (
          <Card key={event.slug} className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p className="text-sm text-muted">{event.description}</p>
              </div>
              <ProbabilityPill probability={event.probability} delta={event.delta} />
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
              <span className="rounded-full border border-border bg-surface px-3 py-1">
                Alerts on
              </span>
              <span className="rounded-full border border-border bg-surface px-3 py-1">
                Threshold: 5 pts
              </span>
              <button className="rounded-full border border-border bg-surface px-3 py-1">
                Edit alert
              </button>
            </div>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}

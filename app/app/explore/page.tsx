import EventCard from "../../../components/event-card";
import PageShell from "../../../components/page-shell";
import { events } from "../../../lib/mock-data";

export default function ExplorePage() {
  return (
    <PageShell
      title="Explore events"
      description="Trending event expectations with probability-aware market impact."
      actions={
        <div className="flex items-center gap-3">
          <button className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-fg/80">
            Filters
          </button>
          <button className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-fg/80">
            Sort: Trending
          </button>
        </div>
      }
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {events.map((event) => (
          <EventCard key={event.slug} event={event} />
        ))}
      </div>
    </PageShell>
  );
}

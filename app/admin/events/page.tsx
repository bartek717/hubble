import Link from "next/link";
import Card from "../../../components/ui/card";
import PageShell from "../../../components/page-shell";
import { events } from "../../../lib/mock-data";

export default function AdminEventsPage() {
  return (
    <PageShell
      title="Admin events"
      description="Create and manage event briefs, odds sources, and impact ranges."
      actions={
        <button className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white">
          New event
        </button>
      }
    >
      <div className="grid gap-4">
        {events.map((event) => (
          <Card key={event.slug} className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted">Event</p>
                <h3 className="text-base font-semibold">{event.title}</h3>
                <p className="text-sm text-muted">{event.slug}</p>
              </div>
              <Link
                href={`/admin/events/${event.slug}`}
                className="rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-semibold text-fg/80 hover:bg-surface"
              >
                Edit
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}

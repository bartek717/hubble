import Link from "next/link";
import PageShell from "../../../components/page-shell";
import Card from "../../../components/ui/card";
import { events } from "../../../lib/mock-data";

export default function LibraryPage() {
  return (
    <PageShell
      title="Library"
      description="Your purchased Event Expectations Packs."
      actions={
        <Link
          href="/app/explore"
          className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-fg/80"
        >
          Browse new packs
        </Link>
      }
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {events.map((event) => (
          <Card key={event.slug} className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold">{event.title}</h3>
            <p className="text-sm text-muted">{event.description}</p>
            <div className="flex flex-wrap gap-2 text-xs text-muted">
              <span className="rounded-full border border-border bg-surface px-3 py-1">
                Purchased
              </span>
              <span className="rounded-full border border-border bg-surface px-3 py-1">
                Alerts on
              </span>
            </div>
            <Link
              href={`/app/event/${event.slug}/pack`}
              className="mt-2 inline-flex w-fit rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              Open pack
            </Link>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}

import { notFound } from "next/navigation";
import Card from "../../../../components/ui/card";
import PageShell from "../../../../components/page-shell";
import { events } from "../../../../lib/mock-data";

type AdminEventPageProps = {
  params: { id: string };
};

export default function AdminEventPage({ params }: AdminEventPageProps) {
  const event = events.find((item) => item.slug === params.id);

  if (!event) {
    notFound();
  }

  return (
    <PageShell
      title={`Edit: ${event.title}`}
      description="Update resolution criteria, odds sources, and impact estimates."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">Core details</h3>
          <p className="text-sm text-muted">Title, slug, and resolution criteria.</p>
          <div className="rounded-xl border border-border bg-surface p-3 text-sm text-muted">
            Current slug: {event.slug}
          </div>
        </Card>
        <Card className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">Odds sources</h3>
          <p className="text-sm text-muted">Polymarket + Kalshi snapshot adapters.</p>
          <div className="rounded-xl border border-border bg-surface p-3 text-sm text-muted">
            Latest probability: {Math.round(event.probability * 100)}%
          </div>
        </Card>
        <Card className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">Impact estimates</h3>
          <p className="text-sm text-muted">Low / median / high ranges by basket.</p>
          <div className="rounded-xl border border-border bg-surface p-3 text-sm text-muted">
            Median impact: {event.expectedMove.mid}%
          </div>
        </Card>
        <Card className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">Editorial</h3>
          <p className="text-sm text-muted">Triggers, narrative, and analogs.</p>
          <div className="rounded-xl border border-border bg-surface p-3 text-sm text-muted">
            Triggers: {event.triggers.length}
          </div>
        </Card>
      </div>
    </PageShell>
  );
}

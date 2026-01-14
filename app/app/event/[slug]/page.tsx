import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "../../../../components/page-shell";
import Card from "../../../../components/ui/card";
import ProbabilityPill from "../../../../components/probability-pill";
import { events } from "../../../../lib/mock-data";

type EventDetailPageProps = {
  params: { slug: string };
};

export default function EventDetailPage({ params }: EventDetailPageProps) {
  const event = events.find((item) => item.slug === params.slug);

  if (!event) {
    notFound();
  }

  return (
    <PageShell
      title={event.title}
      description={event.description}
      actions={<ProbabilityPill probability={event.probability} delta={event.delta} />}
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Preview</p>
          <h2 className="text-lg font-semibold">Expected move + triggers</h2>
          <p className="text-sm text-muted">
            Resolution criteria, odds trend, and expected move preview for the event.
          </p>
          <div className="rounded-xl border border-border bg-surface/70 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              Expected move (preview)
            </p>
            <p className="mt-2 text-2xl font-semibold">
              {event.expectedMove.low}% to {event.expectedMove.high}%
            </p>
            <p className="text-sm text-muted">Median impact: {event.expectedMove.mid}%</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Triggers</p>
            <ul className="mt-2 space-y-2 text-sm text-muted">
              {event.triggers.map((trigger) => (
                <li key={trigger}>• {trigger}</li>
              ))}
            </ul>
          </div>
        </Card>
        <Card className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Unlock pack</p>
          <h3 className="text-xl font-semibold tracking-tight">
            $10 Event Expectations Pack
          </h3>
          <p className="text-sm text-muted">
            Full scenarios, impact heatmap, analogs, and trigger checklist updates.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/app/checkout?event=${event.slug}`}
              className="inline-flex w-fit rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              Checkout
            </Link>
            <Link
              href={`/app/event/${event.slug}/pack`}
              className="inline-flex w-fit rounded-full border border-border bg-surface px-5 py-2 text-sm font-semibold text-fg/90 hover:bg-card"
            >
              View unlocked demo
            </Link>
          </div>
          <div className="rounded-xl border border-border bg-surface/70 p-4 text-sm text-muted">
            You will be redirected to Stripe Checkout. Pack unlocks immediately on
            payment.
          </div>
        </Card>
      </div>
    </PageShell>
  );
}

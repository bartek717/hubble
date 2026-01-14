import Link from "next/link";
import ProbabilityPill from "./probability-pill";
import Card from "./ui/card";
import type { EventItem } from "../lib/mock-data";

type EventCardProps = {
  event: EventItem;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <Card className="flex flex-col gap-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-muted">Event</p>
          <h3 className="text-lg font-semibold tracking-tight">{event.title}</h3>
        </div>
        <ProbabilityPill probability={event.probability} delta={event.delta} />
      </div>
      <p className="text-sm text-muted">{event.description}</p>
      <div className="flex flex-wrap gap-2">
        {event.baskets.map((basket) => (
          <span
            key={basket}
            className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted"
          >
            {basket}
          </span>
        ))}
      </div>
      <div className="rounded-xl border border-border bg-surface/70 p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          Expected move (median)
        </p>
        <p className="text-lg font-semibold">
          {event.expectedMove.low}% to {event.expectedMove.high}%{" "}
          <span className="text-sm text-muted">(mid {event.expectedMove.mid}%)</span>
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
        <Link
          href={`/app/event/${event.slug}`}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
        >
          View preview
        </Link>
        <Link href="/app/watchlist" className="text-sm text-muted hover:text-fg">
          Add to watchlist
        </Link>
      </div>
    </Card>
  );
}

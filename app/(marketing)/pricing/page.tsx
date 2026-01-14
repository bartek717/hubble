import Link from "next/link";
import Card from "../../../components/ui/card";

export default function PricingPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-12">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.25em] text-muted">Pricing</p>
        <h1 className="text-3xl font-semibold">Event Expectations Pack</h1>
        <p className="text-sm text-muted">
          $10 per event pack. Unlock the premium brief plus live updates and
          alerts.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">$10</h2>
          <p className="text-sm text-muted">Per event pack</p>
          <ul className="space-y-2 text-sm text-muted">
            <li>• Expected Move ranges (1D / 1W / 1M)</li>
            <li>• Basket impact heatmap</li>
            <li>• Trigger checklist + alerts</li>
            <li>• PDF brief + update log</li>
          </ul>
          <Link
            href="/app/explore"
            className="mt-2 inline-flex w-fit rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            Browse packs
          </Link>
        </Card>
        <Card className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Checkout flow</h3>
          <p className="text-sm text-muted">
            Stripe Checkout handles payment. A webhook unlocks the pack and
            routes you back to the unlocked view.
          </p>
          <div className="rounded-xl border border-border bg-surface p-4 text-sm text-muted">
            Invite-only access for MVP. Alerts delivered via email and in-app
            notifications.
          </div>
        </Card>
      </div>
    </div>
  );
}

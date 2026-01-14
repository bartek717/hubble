import Link from "next/link";
import PageShell from "../../../components/page-shell";
import Card from "../../../components/ui/card";

type CheckoutPageProps = {
  searchParams?: { event?: string };
};

export default function CheckoutPage({ searchParams }: CheckoutPageProps) {
  return (
    <PageShell
      title="Checkout"
      description="Complete your $10 Event Expectations Pack purchase."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">Event pack</h3>
          <p className="text-sm text-muted">
            {searchParams?.event
              ? `Event slug: ${searchParams.event}`
              : "Select an event pack to unlock."}
          </p>
          <div className="rounded-xl border border-border bg-surface p-4 text-sm text-muted">
            Stripe Checkout is required for payment. This is a placeholder for the
            session creation flow.
          </div>
          <button className="inline-flex w-fit rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white hover:opacity-90">
            Proceed to Stripe
          </button>
        </Card>
        <Card className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">What you get</h3>
          <ul className="space-y-2 text-sm text-muted">
            <li>• Expected move ranges + scenario matrix</li>
            <li>• Triggers + odds movement alerts</li>
            <li>• Downloadable PDF brief</li>
          </ul>
          <Link
            href="/app/library"
            className="mt-2 inline-flex w-fit rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-fg/80"
          >
            View library
          </Link>
        </Card>
      </div>
    </PageShell>
  );
}

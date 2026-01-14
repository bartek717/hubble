import AccountAuthCard from "../../../components/account-auth-card";
import PageShell from "../../../components/page-shell";
import Card from "../../../components/ui/card";

export default function AccountPage() {
  return (
    <PageShell title="Account" description="Invite-only MVP access and billing details.">
      <div className="grid gap-6 md:grid-cols-2">
        <AccountAuthCard />
        <Card className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Billing</p>
          <h3 className="text-lg font-semibold">Stripe portal</h3>
          <p className="text-sm text-muted">
            Manage purchases and receipts via Stripe customer portal.
          </p>
          <button className="mt-2 inline-flex w-fit rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-fg/80">
            Open portal
          </button>
        </Card>
      </div>
    </PageShell>
  );
}

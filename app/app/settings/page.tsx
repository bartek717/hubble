import PageShell from "../../../components/page-shell";
import Card from "../../../components/ui/card";

export default function SettingsPage() {
  return (
    <PageShell
      title="Settings"
      description="Theme, notifications, and account preferences."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Alerts</p>
          <h3 className="text-lg font-semibold">Notifications</h3>
          <p className="text-sm text-muted">
            Email alerts for probability moves and trigger hits.
          </p>
          <div className="flex items-center gap-3 text-sm text-muted">
            <span className="rounded-full border border-border bg-surface px-3 py-1">
              Email: on
            </span>
            <span className="rounded-full border border-border bg-surface px-3 py-1">
              Push: coming soon
            </span>
          </div>
        </Card>
        <Card className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Preferences</p>
          <h3 className="text-lg font-semibold">Theme</h3>
          <p className="text-sm text-muted">
            Toggle between dark and light modes from the header.
          </p>
        </Card>
      </div>
    </PageShell>
  );
}

import PageShell from "../../../components/page-shell";
import Card from "../../../components/ui/card";

const alerts = [
  {
    title: "Fed cuts rates by June meeting",
    detail: "Probability moved +5pts in last 24h.",
    time: "2 hours ago",
  },
  {
    title: "Oil supply shock in Q2",
    detail: "Trigger hit: OPEC+ surprise cuts.",
    time: "Yesterday",
  },
];

export default function AlertsPage() {
  return (
    <PageShell
      title="Alerts center"
      description="In-app notifications for odds moves and trigger hits."
    >
      <div className="grid gap-4">
        {alerts.map((alert) => (
          <Card key={alert.title} className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Alert</p>
            <h3 className="text-base font-semibold">{alert.title}</h3>
            <p className="text-sm text-muted">{alert.detail}</p>
            <span className="text-xs text-muted">{alert.time}</span>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}

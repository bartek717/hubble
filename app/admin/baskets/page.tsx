import Card from "../../../components/ui/card";
import PageShell from "../../../components/page-shell";

const baskets = [
  { name: "Rates sensitivity", proxies: ["TLT", "IEF", "KRE"] },
  { name: "Energy supply", proxies: ["XLE", "USO", "XOM"] },
  { name: "AI / Semis", proxies: ["SMH", "NVDA", "AVGO"] },
];

export default function AdminBasketsPage() {
  return (
    <PageShell
      title="Baskets"
      description="Define ETF/proxy baskets and their explanatory notes."
      actions={
        <button className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white">
          New basket
        </button>
      }
    >
      <div className="grid gap-4">
        {baskets.map((basket) => (
          <Card key={basket.name} className="flex flex-col gap-2">
            <h3 className="text-base font-semibold">{basket.name}</h3>
            <p className="text-sm text-muted">Proxies: {basket.proxies.join(", ")}</p>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}

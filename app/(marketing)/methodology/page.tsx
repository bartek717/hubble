import Card from "../../../components/ui/card";

export default function MethodologyPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-12">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.35em] text-muted">Methodology</p>
        <h1 className="text-3xl font-semibold tracking-tight">
          Odds × Impact → Expected Move
        </h1>
        <p className="text-sm text-muted">
          Hubble combines prediction market probabilities with historical market
          analogs to estimate a probability-weighted expected move.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Inputs</p>
          <h2 className="text-lg font-semibold">Signals</h2>
          <ul className="space-y-2 text-sm text-muted">
            <li>• Polymarket + Kalshi odds snapshots</li>
            <li>• ETF/proxy basket returns (1D / 1W / 1M)</li>
            <li>• Headline clusters + narrative tags</li>
          </ul>
        </Card>
        <Card className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Modeling</p>
          <h2 className="text-lg font-semibold">V1 heuristics</h2>
          <ul className="space-y-2 text-sm text-muted">
            <li>• Impact ranges from historical analogs</li>
            <li>• Simple sensitivity heuristics for baskets</li>
            <li>• Expected move = probability × median impact estimate</li>
          </ul>
        </Card>
      </div>

      <Card className="flex flex-col gap-3">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">Trust</p>
        <h2 className="text-lg font-semibold">Transparency</h2>
        <p className="text-sm text-muted">
          We surface confidence bands, cite the analogs used, and show what
          triggers would change the view. The goal is clarity, not certainty.
        </p>
      </Card>
    </div>
  );
}

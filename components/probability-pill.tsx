type ProbabilityPillProps = {
  probability: number;
  delta?: number;
};

const getTone = (probability: number) => {
  if (probability >= 0.75) return "bg-prob-4/20 text-prob-4 border-prob-4/30";
  if (probability >= 0.6) return "bg-prob-3/20 text-prob-3 border-prob-3/30";
  if (probability >= 0.45) return "bg-prob-2/20 text-prob-2 border-prob-2/30";
  if (probability >= 0.3) return "bg-prob-1/20 text-prob-1 border-prob-1/30";
  return "bg-prob-0/40 text-muted border-border";
};

const formatDelta = (delta?: number) => {
  if (delta === undefined) return null;
  const sign = delta > 0 ? "+" : "";
  return `${sign}${Math.round(delta * 100)}pts`;
};

export default function ProbabilityPill({ probability, delta }: ProbabilityPillProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${getTone(
        probability,
      )}`}
    >
      {Math.round(probability * 100)}%
      {delta !== undefined && (
        <span className="text-[0.7rem] font-medium text-fg/70">{formatDelta(delta)}</span>
      )}
    </div>
  );
}

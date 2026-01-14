export type EventItem = {
  slug: string;
  title: string;
  description: string;
  probability: number;
  delta: number;
  baskets: string[];
  expectedMove: {
    low: number;
    mid: number;
    high: number;
  };
  triggers: string[];
};

export const events: EventItem[] = [
  {
    slug: "fed-rate-cut-june",
    title: "Fed cuts rates by June meeting",
    description:
      "Markets are pricing a meaningful chance of a mid-year cut as growth cools and inflation normalizes.",
    probability: 0.62,
    delta: 0.05,
    baskets: ["TLT", "XLF", "QQQ"],
    expectedMove: { low: -0.6, mid: 1.2, high: 2.4 },
    triggers: ["CPI prints below 2.5%", "Payrolls miss expectations"],
  },
  {
    slug: "oil-supply-shock",
    title: "Oil supply shock in Q2",
    description:
      "Geopolitical tensions tighten crude supply and push energy prices higher.",
    probability: 0.41,
    delta: -0.03,
    baskets: ["XLE", "USO", "XOM"],
    expectedMove: { low: 1.5, mid: 3.2, high: 5.1 },
    triggers: ["OPEC+ surprise cuts", "Shipping lane disruption"],
  },
  {
    slug: "ai-regulation-package",
    title: "US AI regulation package passes",
    description:
      "A bipartisan framework establishes guardrails for model training and deployment.",
    probability: 0.28,
    delta: 0.02,
    baskets: ["XLK", "SMH", "META"],
    expectedMove: { low: -1.2, mid: -0.4, high: 0.6 },
    triggers: ["Committee markup vote", "Public safety incident"],
  },
];

export const eventPackHighlights = [
  "Expected move range updated daily with new odds.",
  "Scenario matrix across 1D / 1W / 1M horizons.",
  "Analogs referencing 4 prior market reactions.",
  "Trigger checklist with macro and policy milestones.",
];

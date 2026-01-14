import Card from "../../../components/ui/card";
import PageShell from "../../../components/page-shell";

export default function SearchPage() {
  return (
    <PageShell
      title="Search"
      description="Find events, baskets, and triggers by keyword."
      actions={
        <input
          placeholder="Search events, tickers, tags"
          className="w-64 rounded-full border border-border bg-surface px-4 py-2 text-sm text-fg"
        />
      }
    >
      <Card>
        <p className="text-sm text-muted">
          Search is powered by headline clusters and event tags. Try &ldquo;rates&rdquo;,
          &ldquo;oil&rdquo;, or &ldquo;AI regulation&rdquo;.
        </p>
      </Card>
    </PageShell>
  );
}

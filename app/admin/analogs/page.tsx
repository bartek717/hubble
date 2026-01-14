import Card from "../../../components/ui/card";
import PageShell from "../../../components/page-shell";

const analogs = [
  {
    title: "2019 Powell pivot",
    note: "Rate cuts after tightening cycle; equities +4.2% 1W.",
  },
  {
    title: "2001 surprise cut",
    note: "Emergency easing; duration led, cyclicals lagged.",
  },
  {
    title: "2015 China slowdown",
    note: "Risk-off shock; semis -3.1% 1D.",
  },
];

export default function AdminAnalogsPage() {
  return (
    <PageShell
      title="Analogs library"
      description="Historical analogs used to frame impact ranges."
      actions={
        <button className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white">
          New analog
        </button>
      }
    >
      <div className="grid gap-4">
        {analogs.map((analog) => (
          <Card key={analog.title} className="flex flex-col gap-2">
            <h3 className="text-base font-semibold">{analog.title}</h3>
            <p className="text-sm text-muted">{analog.note}</p>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}

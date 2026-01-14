import { ReactNode } from "react";

type PageShellProps = {
  title: string;
  description?: string;
  children: ReactNode;
  actions?: ReactNode;
};

export default function PageShell({ title, description, children, actions }: PageShellProps) {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Hubble</p>
          <h1 className="text-3xl font-semibold">{title}</h1>
          {description ? <p className="mt-2 text-sm text-muted">{description}</p> : null}
        </div>
        {actions}
      </div>
      {children}
    </div>
  );
}

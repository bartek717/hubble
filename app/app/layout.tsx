import AppHeader from "../../components/navigation/app-header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <AppHeader />
      <main>{children}</main>
    </div>
  );
}

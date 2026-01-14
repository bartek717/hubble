import AppAuthGuard from "../../components/auth/app-auth-guard";
import AppHeader from "../../components/navigation/app-header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <AppHeader />
      <main>
        <AppAuthGuard>{children}</AppAuthGuard>
      </main>
    </div>
  );
}

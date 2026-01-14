import AdminHeader from "../../components/navigation/admin-header";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <AdminHeader />
      <main>{children}</main>
    </div>
  );
}

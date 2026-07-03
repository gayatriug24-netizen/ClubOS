import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#F7F4EE]">
      <Sidebar />

      <main className="flex-1 px-12 py-10 bg-[#F7F3EC]">
        {children}
      </main>
    </div>
  );
}
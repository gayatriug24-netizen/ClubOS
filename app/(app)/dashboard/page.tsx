import HeroSection from "@/components/dashboard/HeroSection";
import WeeklyPlanner from "@/components/dashboard/WeeklyPlanner";
import UpcomingEvents from "@/components/dashboard/UpcomingEvents";
import RecentActivity from "@/components/dashboard/RecentActivity";
import QuickActions from "@/components/dashboard/QuickActions";
import AIWorkspace from "@/components/dashboard/AIWorkspace";

export default function DashboardPage() {
  return (
    <main className="space-y-8 pb-10">

      <HeroSection />

      <section className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <WeeklyPlanner />
        <UpcomingEvents />
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <RecentActivity />
        <QuickActions />
      </section>

      <AIWorkspace />

    </main>
  );
}
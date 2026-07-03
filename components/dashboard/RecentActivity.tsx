import {
  CalendarCheck2,
  FileText,
  Camera,
  HeartHandshake,
} from "lucide-react";

const activities = [
  {
    title: "Blood Donation Drive Completed",
    time: "2 hours ago",
    icon: HeartHandshake,
    color: "bg-red-100",
  },
  {
    title: "Monthly Report Generated",
    time: "Yesterday",
    icon: FileText,
    color: "bg-yellow-100",
  },
  {
    title: "Orientation Event Created",
    time: "Today",
    icon: CalendarCheck2,
    color: "bg-green-100",
  },
  {
    title: "84 Photos Uploaded",
    time: "Just Now",
    icon: Camera,
    color: "bg-blue-100",
  },
];

export default function RecentActivity() {
  return (
    <section className="rounded-[30px] border border-[#E7DED2] bg-[#FFFDF9] p-8 shadow-sm">

      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#2E261F]">
          Recent Activity
        </h2>

        <button className="text-sm font-medium text-[#8B6A4F] hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-6">

        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.title}
              className="group flex items-center gap-5 rounded-2xl p-3 transition-all duration-300 hover:bg-[#FAF7F2]"
            >

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${activity.color}`}
              >
                <Icon
                  size={24}
                  className="text-[#6B4226] transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-[#2E261F]">
                  {activity.title}
                </h3>

                <p className="mt-1 text-sm text-[#8B7A6A]">
                  {activity.time}
                </p>
              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}
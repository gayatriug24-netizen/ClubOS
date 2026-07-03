import {
  CalendarPlus,
  Camera,
  FileText,
  ImagePlus,
  Users,
  WandSparkles,
} from "lucide-react";

const actions = [
  {
    title: "Create Event",
    icon: CalendarPlus,
    color: "bg-[#F7E8D8]",
  },
  {
    title: "Upload Photos",
    icon: Camera,
    color: "bg-[#EAF4E7]",
  },
  {
    title: "Generate Report",
    icon: FileText,
    color: "bg-[#F4EEFF]",
  },
  {
    title: "Create Poster",
    icon: ImagePlus,
    color: "bg-[#FFF2E7]",
  },
  {
    title: "Manage Team",
    icon: Users,
    color: "bg-[#EEF7F4]",
  },
  {
    title: "AI Assistant",
    icon: WandSparkles,
    color: "bg-[#FFF5DC]",
  },
];

export default function QuickActions() {
  return (
    <section className="rounded-[30px] border border-[#E7DED2] bg-[#FFFDF9] p-8 shadow-sm">

      <h2 className="text-2xl font-bold text-[#2E261F]">
        Quick Actions
      </h2>

      <p className="mt-2 text-[#746556]">
        Jump into the most common tasks.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="
                group
                rounded-3xl
                border
                border-[#EFE6DA]
                bg-white
                p-5
                text-left
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${action.color}`}
              >
                <Icon
                  size={26}
                  className="text-[#6B4226] transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <h3 className="mt-5 font-semibold text-[#2E261F]">
                {action.title}
              </h3>

            </button>
          );
        })}

      </div>

    </section>
  );
}
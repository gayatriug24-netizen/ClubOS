const week = [
  {
    day: "MON",
    title: "Orientation",
    status: "Completed",
  },
  {
    day: "TUE",
    title: "Team Meeting",
    status: "Today",
  },
  {
    day: "WED",
    title: "Tree Plantation",
    status: "Upcoming",
  },
  {
    day: "THU",
    title: "Blood Donation",
    status: "Upcoming",
  },
  {
    day: "FRI",
    title: "NGO Visit",
    status: "Upcoming",
  },
];

export default function WeeklyPlanner() {
  return (
    <section className="rounded-3xl border border-stone-200 bg-white p-8">

      <div className="mb-7">
        <h2 className="text-3xl font-bold text-stone-900">
          Weekly Planner
        </h2>

        <p className="mt-2 text-stone-500">
          Your club schedule for this week.
        </p>
      </div>

      <div className="space-y-4">

        {week.map((event) => (

          <div
            key={event.day}
            className="flex items-center justify-between rounded-2xl border border-stone-200 bg-white px-5 py-4 transition duration-200 hover:-translate-y-0.5 hover:border-stone-300 hover:shadow-md"
          >

            <div className="flex items-center gap-5">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#F6EFE5] text-sm font-semibold tracking-wide text-stone-700">
                {event.day}
              </div>

              <div>

                <h3 className="text-xl font-semibold text-stone-900">
                  {event.title}
                </h3>

                <p
                  className={`mt-1 text-sm font-medium ${
                    event.status === "Completed"
                      ? "text-emerald-600"
                      : event.status === "Today"
                      ? "text-amber-600"
                      : "text-stone-400"
                  }`}
                >
                  {event.status}
                </p>

              </div>

            </div>

            <div>

              {event.status === "Completed" && (
                <div className="h-3.5 w-3.5 rounded-full bg-emerald-500"></div>
              )}

              {event.status === "Today" && (
                <div className="h-3.5 w-3.5 rounded-full bg-amber-500"></div>
              )}

              {event.status === "Upcoming" && (
                <div className="h-3.5 w-3.5 rounded-full bg-stone-400"></div>
              )}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}
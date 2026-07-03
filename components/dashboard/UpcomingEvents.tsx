import { CalendarDays, MapPin, Clock } from "lucide-react";

const events = [
  {
    day: "05",
    month: "JUL",
    title: "Club Orientation",
    location: "Seminar Hall",
    time: "10:00 AM",
  },
  {
    day: "08",
    month: "JUL",
    title: "NGO Visit",
    location: "Smile Foundation",
    time: "9:30 AM",
  },
  {
    day: "12",
    month: "JUL",
    title: "Community Cleanup",
    location: "Dwarka Sector 10",
    time: "8:00 AM",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="rounded-[30px] border border-[#E7DED2] bg-[#FFFDF9] p-8 shadow-sm">

      <div className="mb-8 flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold text-[#2E261F]">
            Upcoming Events
          </h2>

          <p className="mt-2 text-[#746556]">
            Stay prepared for what's next.
          </p>
        </div>

        <CalendarDays className="h-6 w-6 text-[#8B6A4F]" />

      </div>

      <div className="space-y-5">

        {events.map((event) => (
          <div
            key={event.title}
            className="
              group
              flex
              items-center
              gap-5
              rounded-3xl
              border
              border-[#EFE6DA]
              bg-white
              p-5
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-md
            "
          >

            <div className="flex h-20 w-20 flex-col items-center justify-center rounded-3xl bg-[#F5EBDD]">

              <span className="text-xs font-semibold tracking-wider text-[#8B6A4F]">
                {event.month}
              </span>

              <span className="text-3xl font-bold text-[#2E261F]">
                {event.day}
              </span>

            </div>

            <div className="flex-1">

              <h3 className="text-lg font-semibold text-[#2E261F]">
                {event.title}
              </h3>

              <div className="mt-3 flex items-center gap-4 text-sm text-[#8B7A6A]">

                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  {event.location}
                </div>

                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  {event.time}
                </div>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
import TodaysOverview from "./TodaysOverview";

export default function HeroHeader() {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-[1.8fr_1fr] gap-6">

      {/* Left */}

      <div className="rounded-3xl border border-[#E8DED2] bg-white p-10">

        <p className="text-xs font-semibold uppercase tracking-[0.30em] text-[#9A8A7A]">
          Workspace
        </p>

        <h1 className="mt-5 text-5xl font-bold tracking-tight text-[#2B2118]">
          Good Morning, Gayatri
        </h1>

        <p className="mt-2 text-lg font-medium text-[#7C6C5E]">
          General Secretary
        </p>

        <p className="text-[#9A8A7A]">
          Rotaract NSUT East
        </p>

        <div className="mt-10 flex items-center gap-8">

          <div>
            <p className="text-sm text-[#9A8A7A]">
              Today
            </p>

            <h3 className="mt-1 text-xl font-semibold">
              Monday
            </h3>
          </div>

          <div>
            <p className="text-sm text-[#9A8A7A]">
              Time
            </p>

            <h3 className="mt-1 text-xl font-semibold">
              9:24 AM
            </h3>
          </div>

          <div>
            <p className="text-sm text-[#9A8A7A]">
              Focus
            </p>

            <h3 className="mt-1 text-xl font-semibold">
              Orientation Week
            </h3>
          </div>

        </div>

      </div>

      {/* Right */}

      <TodaysOverview />

    </section>
  );
}
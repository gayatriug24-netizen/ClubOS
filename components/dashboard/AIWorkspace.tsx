import {
  FileText,
  Image,
  PenSquare,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    icon: FileText,
    title: "Generate Monthly Report",
  },
  {
    icon: Image,
    title: "Select Best Event Photos",
  },
  {
    icon: PenSquare,
    title: "Write Instagram Caption",
  },
];

export default function AIWorkspace() {
  return (
    <section className="rounded-3xl border border-stone-200 bg-white p-8">

      <div className="flex items-center gap-3">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F6EFE5]">
          <Sparkles className="h-6 w-6 text-[#6B4226]" />
        </div>

        <div>

          <h2 className="text-3xl font-bold text-stone-900">
            AI Workspace
          </h2>

          <p className="mt-1 text-stone-500">
            Let ClubOS help you finish work faster.
          </p>

        </div>

      </div>

      <div className="mt-8 space-y-4">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="group flex w-full items-center justify-between rounded-2xl border border-stone-200 bg-white px-5 py-4 transition duration-200 hover:border-[#D7C2AF] hover:bg-[#FCF8F3]"
            >

              <div className="flex items-center gap-4">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F8F3ED]">
                  <Icon className="h-5 w-5 text-[#6B4226]" />
                </div>

                <span className="text-base font-medium text-stone-800">
                  {action.title}
                </span>

              </div>

              <ArrowRight className="h-5 w-5 text-stone-400 transition group-hover:translate-x-1" />

            </button>
          );
        })}

      </div>

      <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#6B4226] py-4 text-base font-semibold text-white transition hover:bg-[#5B351D]">

        <Sparkles className="h-5 w-5" />

        Open AI Assistant

      </button>

    </section>
  );
}
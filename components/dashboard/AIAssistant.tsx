import {
  Sparkles,
  ArrowRight,
  FileText,
  ImageIcon,
  PenSquare,
} from "lucide-react";

export default function AIAssistant() {
  return (
    <section className="rounded-[30px] border border-[#E7DED2] bg-gradient-to-br from-[#FFFDF9] to-[#F7F1E8] p-8 shadow-sm">

      <div className="flex items-center gap-4">

        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#F5EBDD]">

          <Sparkles
            className="text-[#6B4226]"
            size={32}
          />

        </div>

        <div>

          <h2 className="text-2xl font-bold text-[#2E261F]">
            AI Workspace
          </h2>

          <p className="text-[#746556]">
            Let ClubOS help you finish work faster.
          </p>

        </div>

      </div>

      <div className="mt-8 space-y-4">

        <div className="flex items-center justify-between rounded-2xl bg-white p-4">

          <div className="flex items-center gap-3">

            <FileText className="text-[#6B4226]" />

            <span>Generate Monthly Report</span>

          </div>

          <ArrowRight size={18} />

        </div>

        <div className="flex items-center justify-between rounded-2xl bg-white p-4">

          <div className="flex items-center gap-3">

            <ImageIcon className="text-[#6B4226]" />

            <span>Select Best Event Photos</span>

          </div>

          <ArrowRight size={18} />

        </div>

        <div className="flex items-center justify-between rounded-2xl bg-white p-4">

          <div className="flex items-center gap-3">

            <PenSquare className="text-[#6B4226]" />

            <span>Write Instagram Caption</span>

          </div>

          <ArrowRight size={18} />

        </div>

      </div>

      <button
        className="
          mt-8
          w-full
          rounded-2xl
          bg-[#6B4226]
          py-4
          font-medium
          text-white
          transition-all
          duration-300
          hover:bg-[#7C5132]
          hover:-translate-y-1
        "
      >
        Open AI Assistant
      </button>

    </section>
  );
}
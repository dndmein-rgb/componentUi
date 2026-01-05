import { Rocket, ArrowRight } from "lucide-react";

export default function Alert07() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative bg-zinc-900 border border-zinc-800 shadow-lg rounded-2xl p-4 overflow-hidden">
        <div className="flex items-center gap-4">
            <div className="absolute -left-4 -top-4 w-20 h-20 rounded-full bg-violet-600/30 blur-2xl" />
            <div className="relative flex-shrink-0 w-12 h-12 flex items-center justify-center bg-violet-500/10 border border-violet-500/20 rounded-xl">
              <Rocket className="h-6 w-6 text-violet-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-white">
                Upgrade to Pro
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Unlock all features and get priority support.
              </p>
            </div>
            <button className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors">
                <ArrowRight className="h-4 w-4 text-zinc-400" />
            </button>
        </div>
      </div>
    </div>
  );
}

import { PartyPopper } from "lucide-react";

export default function Alert08() {
  const progress = 75; // Example progress

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4">
        <div className="flex items-start gap-4">
          <PartyPopper className="h-6 w-6 text-zinc-500 mt-0.5" />
          <div className="flex-1">
            <h3 className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
              Profile Completion
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 mb-2">
              You are almost there! Complete your profile to get more visibility.
            </p>
            <div className="flex items-center gap-2">
                <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-1.5">
                    <div className="bg-green-500 h-1.5 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
                <span className="text-xs font-mono text-zinc-500">{progress}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

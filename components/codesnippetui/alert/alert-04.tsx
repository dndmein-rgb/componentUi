import { Info, ExternalLink } from "lucide-react";

export default function Alert04() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-400 rounded-r-lg p-4">
        <div className="flex">
          <div className="pr-3 pt-0.5">
            <Info className="h-5 w-5 text-blue-500 dark:text-blue-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-1">
              New Feature Available
            </h3>
            <p className="text-[13px] text-blue-700 dark:text-blue-400 mb-3">
              We've just released a new feature that you might find useful.
            </p>
            <div className="flex gap-3">
                <button className="flex items-center gap-1.5 text-xs font-medium text-blue-600 dark:text-blue-300 hover:underline">
                    Learn More <ExternalLink className="h-3.5 w-3.5" />
                </button>
                <button className="text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:underline">
                    Dismiss
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

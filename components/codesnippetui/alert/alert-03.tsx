import { XCircle, X } from "lucide-react";

export default function Alert03() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/60 shadow-[0_1px_6px_0_rgba(239,68,68,0.2)] rounded-xl p-4">
        <button className="absolute top-3 right-3 text-red-500/80 hover:text-red-500 dark:text-red-400/80 dark:hover:text-red-400">
            <X className="h-5 w-5" />
        </button>
        <div className="flex gap-3">
          <div className="p-1">
            <XCircle className="h-6 w-6 text-red-500 dark:text-red-400" />
          </div>

          <div className="space-y-0.5 pr-4">
            <h3 className="text-sm font-semibold text-red-800 dark:text-red-300">
              Error
            </h3>
            <p className="text-[13px] text-red-700 dark:text-red-400">
              Failed to save your changes. Please try again.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

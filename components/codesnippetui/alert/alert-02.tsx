import { TriangleAlert } from "lucide-react";

export default function Alert02() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800/60 shadow-[0_1px_6px_0_rgba(250,204,21,0.2)] rounded-xl p-4">
        <div className="flex gap-3">
          <div className="p-1">
            <TriangleAlert className="h-6 w-6 text-yellow-500 dark:text-yellow-400" />
          </div>

          <div className="space-y-0.5">
            <h3 className="text-sm font-semibold text-yellow-800 dark:text-yellow-300">
              Warning
            </h3>
            <p className="text-[13px] text-yellow-700 dark:text-yellow-400">
              Your subscription is about to expire.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

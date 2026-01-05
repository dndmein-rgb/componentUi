import { Star } from "lucide-react";

export default function Alert06() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-3.5">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="bg-zinc-100 dark:bg-zinc-800 p-2 rounded-lg">
                    <Star className="h-5 w-5 text-zinc-500 fill-zinc-500" />
                </div>
                <div>
                    <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">New feature unlocked!</span>
                </div>
            </div>
            <div className="flex items-center gap-2">
                 <span className="text-[11px] font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md px-2 py-0.5">New</span>
            </div>
        </div>
      </div>
    </div>
  );
}

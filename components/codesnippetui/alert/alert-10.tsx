import { Cookie } from "lucide-react";

export default function Alert10() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 shadow-lg">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-shrink-0">
            <Cookie className="h-6 w-6 text-zinc-500" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-zinc-700 dark:text-zinc-300">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
            </p>
          </div>
          <div className="flex gap-2 mt-2 sm:mt-0">
            <button className="px-4 py-1.5 text-xs font-semibold text-white bg-zinc-900 dark:bg-white dark:text-black rounded-lg">
              Accept
            </button>
            <button className="px-4 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

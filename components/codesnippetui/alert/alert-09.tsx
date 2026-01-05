import { ListChecks } from "lucide-react";

export default function Alert09() {
  const changes = [
    "New AI-powered code generation.",
    "Enhanced UI components.",
    "Improved performance and bug fixes.",
  ];

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-lg p-4">
        <h3 className="flex items-center gap-2.5 text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-3">
          <ListChecks className="h-5 w-5 text-zinc-500" />
          What's new in version 2.0
        </h3>
        <ul className="space-y-1.5 pl-4">
          {changes.map((change, i) => (
            <li key={i} className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                <div className="w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                {change}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

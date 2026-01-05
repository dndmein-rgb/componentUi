import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

interface TaskItem {
  id: string;
  label: string;
  completed: boolean;
  dueDate?: string;
  priority?: "high" | "medium" | "low";
}

const TASK_ITEMS: TaskItem[] = [
  { id: "1", label: "Design the new dashboard", completed: true, dueDate: "Jan 28", priority: "high" },
  { id: "2", label: "Develop the API for user authentication", completed: false, dueDate: "Feb 02", priority: "high" },
  { id: "3", label: "Write documentation for the new feature", completed: false, dueDate: "Feb 10", priority: "medium" },
  { id: "4", label: "Review pull requests", completed: true, dueDate: "Jan 27", priority: "low" },
];

const priorityStyles = {
    high: "border-red-500/50 bg-red-500/10 text-red-700 dark:text-red-300",
    medium: "border-yellow-500/50 bg-yellow-500/10 text-yellow-700 dark:text-yellow-300",
    low: "border-green-500/50 bg-green-500/10 text-green-700 dark:text-green-300",
}

export default function List_03() {
  return (
    <div className="w-full max-w-lg mx-auto">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">Today's Tasks</h3>
        <div className="space-y-3">
            {TASK_ITEMS.map((task) => (
            <div
                key={task.id}
                className={cn(
                    "flex items-center gap-3 p-3 rounded-lg border",
                    "bg-white dark:bg-zinc-900",
                    task.completed 
                        ? "border-zinc-200 dark:border-zinc-800" 
                        : "border-zinc-300 dark:border-zinc-700 shadow-sm"
                )}
            >
                <Checkbox
                    id={`task-${task.id}`}
                    checked={task.completed}
                    className="w-5 h-5"
                />
                <label
                    htmlFor={`task-${task.id}`}
                    className={cn(
                        "flex-1 text-sm",
                        task.completed 
                            ? "text-zinc-500 dark:text-zinc-500 line-through" 
                            : "text-zinc-800 dark:text-zinc-200"
                    )}
                >
                    {task.label}
                </label>
                {task.priority && (
                    <Badge variant="outline" className={cn("text-xs", priorityStyles[task.priority])}>
                        {task.priority}
                    </Badge>
                )}
                {task.dueDate && (
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 min-w-[50px] text-right">
                        {task.dueDate}
                    </span>
                )}
            </div>
            ))}
      </div>
    </div>
  );
}

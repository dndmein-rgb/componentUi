import { cn } from "@/lib/utils";
import { ChevronRight, User, Bell, Lock } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SettingsItem {
  id: string;
  label: string;
  icon: LucideIcon;
  iconBgColor: string;
}

const SETTINGS_ITEMS: SettingsItem[] = [
  { id: "1", label: "Account", icon: User, iconBgColor: "bg-blue-500" },
  { id: "2", label: "Notifications", icon: Bell, iconBgColor: "bg-red-500" },
  { id: "3", label: "Privacy & Security", icon: Lock, iconBgColor: "bg-green-500" },
];

export default function List_02() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 divide-y divide-zinc-200 dark:divide-zinc-800">
        {SETTINGS_ITEMS.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-3 cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", item.iconBgColor)}>
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {item.label}
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-zinc-400" />
          </div>
        ))}
      </div>
    </div>
  );
}

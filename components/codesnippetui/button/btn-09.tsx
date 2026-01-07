"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";

export default function Btn09() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="flex items-center gap-4 p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800">
        <span className="font-medium text-sm text-zinc-800 dark:text-zinc-200">
            {isToggled ? "Dark Mode" : "Light Mode"}
        </span>
        <div className="relative">
            <Switch
                checked={isToggled}
                onCheckedChange={setIsToggled}
                className="data-[state=checked]:bg-zinc-900 dark:data-[state=checked]:bg-white"
            />
            <div className="absolute inset-0 flex items-center justify-between px-1 pointer-events-none">
                <Sun className={`w-3.5 h-3.5 text-yellow-500 transition-opacity ${isToggled ? 'opacity-0' : 'opacity-100'}`} />
                <Moon className={`w-3.5 h-3.5 text-blue-300 transition-opacity ${isToggled ? 'opacity-100' : 'opacity-0'}`} />
            </div>
        </div>
    </div>
  );
}

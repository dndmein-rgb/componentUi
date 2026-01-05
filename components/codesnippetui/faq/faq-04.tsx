"use client";

import { useState } from "react";
import { Search, ChevronRight, HelpCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function Faq04() {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="w-80 h-full bg-zinc-50 dark:bg-zinc-950 border-l border-zinc-200 dark:border-zinc-800 p-4 flex flex-col gap-4">
            <div className="flex items-center gap-2 px-1">
                <HelpCircle className="w-5 h-5 text-indigo-500" />
                <h2 className="font-bold text-zinc-900 dark:text-zinc-100">Help Center</h2>
            </div>
            
            <div className="relative">
                <Input 
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder="Search docs..." 
                    className={cn(
                        "bg-white dark:bg-zinc-900 transition-all border-zinc-200 dark:border-zinc-800",
                        isFocused && "ring-2 ring-indigo-500/20 border-indigo-500"
                    )}
                />
                <kbd className="absolute right-2 top-2 px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-[10px] text-zinc-400 border border-zinc-200 dark:border-zinc-700">
                    /
                </kbd>
            </div>

            <div className="space-y-1">
                {["Getting Started", "Account settings", "Security"].map((item) => (
                    <button 
                        key={item} 
                        className="w-full flex items-center justify-between p-2 text-sm text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition-colors group"
                    >
                        {item}
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                ))}
            </div>
        </div>
    );
}
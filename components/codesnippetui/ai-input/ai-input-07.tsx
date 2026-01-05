"use client";

import { Search, History, ArrowRight, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function AIInput_07() {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const suggestions = [
    "How to deploy?",
    "Tailwind colors",
    "Next.js 15 features",
  ];

  return (
    <div className="w-full py-4">
      <div className="relative max-w-xl w-full mx-auto">
        <div
          className={cn(
            "relative flex items-center bg-zinc-100 dark:bg-zinc-900 rounded-2xl transition-all duration-300 border-2",
            isFocused
              ? "border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 shadow-lg"
              : "border-transparent"
          )}
        >
          <Search className="w-5 h-5 ml-4 text-zinc-400" />
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            placeholder="Search documentation..."
            className="w-full bg-transparent border-none focus:ring-0 py-4 px-4 text-sm"
          />
          {inputValue && (
            <button
              onClick={() => setInputValue("")}
              className="mr-4 text-zinc-400 hover:text-zinc-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        {isFocused && (
          <div className="absolute top-full w-full mt-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2">
            {suggestions.map((s, i) => (
              <button
                key={i}
                className="w-full flex items-center justify-between px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <History className="w-4 h-4 text-zinc-400" /> {s}
                </div>
                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

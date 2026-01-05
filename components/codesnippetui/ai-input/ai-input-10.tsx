"use client";

import { Sparkles, ArrowUpRight, Zap } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function AIInput_10() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full py-4">
      <div className="relative max-w-xl w-full mx-auto">
        <div
          className={cn(
            "relative overflow-hidden transition-all duration-500 ease-in-out bg-zinc-100 dark:bg-zinc-900 rounded-xl",
            isExpanded ? "p-3 h-32" : "p-1 h-12 flex items-center"
          )}
        >
          {!isExpanded ? (
            <button
              onClick={() => setIsExpanded(true)}
              className="w-full flex items-center gap-2 px-3 text-sm text-zinc-500"
            >
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span>Quick AI assist...</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-auto opacity-50" />
            </button>
          ) : (
            <div className="flex flex-col h-full animate-in fade-in duration-500">
              <textarea
                autoFocus
                className="flex-1 bg-transparent border-none focus:ring-0 text-sm resize-none p-1"
                placeholder="How can I help?"
                onBlur={(e) => !e.target.value && setIsExpanded(false)}
              />
              <div className="flex justify-between items-center mt-2">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-tighter">
                    AI Ready
                  </span>
                </div>
                <button className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 p-1.5 rounded-lg">
                  <Zap className="w-3.5 h-3.5 fill-current" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
"use client";

import { Sparkles, Zap, ArrowUpRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export default function Input_10() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({ minHeight: 38, maxHeight: 120 });

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className={cn(
        "relative transition-all duration-300 ease-in-out border rounded-2xl overflow-hidden",
        isExpanded 
          ? "bg-white dark:bg-zinc-950 border-zinc-300 dark:border-zinc-700 shadow-xl" 
          : "bg-zinc-100 dark:bg-zinc-900 border-transparent h-[46px]"
      )}>
        <div className={cn("flex items-center px-3", !isExpanded && "h-full")}>
          {!isExpanded ? (
            <button 
              onClick={() => setIsExpanded(true)}
              className="w-full flex items-center gap-2 text-sm text-zinc-500 group"
            >
              <Sparkles className="w-4 h-4 text-amber-500 group-hover:rotate-12 transition-transform" />
              <span>Ask AI...</span>
              <ArrowUpRight className="w-3 h-3 ml-auto opacity-40" />
            </button>
          ) : (
            <div className="w-full py-2 flex flex-col gap-2">
              <Textarea
                ref={textareaRef}
                autoFocus
                value={inputValue}
                onChange={(e) => { setInputValue(e.target.value); adjustHeight(); }}
                onBlur={(e) => !e.target.value && setIsExpanded(false)}
                placeholder="How can I help?"
                className="w-full bg-transparent border-none focus-visible:ring-0 resize-none p-1 text-sm min-h-[38px]"
              />
              <div className="flex items-center justify-between pt-1 border-t border-zinc-100 dark:border-zinc-800">
                <div className="flex items-center gap-1.5">
                  {isProcessing ? (
                    <Loader2 className="w-3 h-3 animate-spin text-zinc-400" />
                  ) : (
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  )}
                  <span className="text-[9px] uppercase tracking-widest font-bold text-zinc-400">
                    {isProcessing ? "Processing" : "Ready"}
                  </span>
                </div>
                <button 
                  onClick={() => {
                    setIsProcessing(true);
                    setTimeout(() => setIsProcessing(false), 2000);
                  }}
                  className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 p-1.5 rounded-lg hover:scale-105 transition-transform"
                >
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
"use client";

import { Search, History, ArrowRight, X, Library } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export default function Input_07() {
  const [inputValue, setInputValue] = useState("");
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({ minHeight: 48, maxHeight: 150 });

  return (
    <div className="w-full max-w-2xl mx-auto space-y-2">
      <div className="flex gap-2 mb-2">
        {["Recent Docs", "API Refs", "GitHub"].map((chip) => (
          <button key={chip} className="text-[10px] px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:bg-zinc-200 transition-colors border border-zinc-200 dark:border-zinc-700">
            {chip}
          </button>
        ))}
      </div>
      <div className="relative bg-white dark:bg-zinc-950 border-2 border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden focus-within:border-blue-500 transition-colors shadow-sm">
        <div className="flex items-start">
          <div className="p-4 pr-0">
            <Search className="w-5 h-5 text-zinc-400" />
          </div>
          <Textarea
            ref={textareaRef}
            value={inputValue}
            onChange={(e) => { setInputValue(e.target.value); adjustHeight(); }}
            placeholder="Search knowledge base or ask..."
            className="flex-1 bg-transparent border-none focus-visible:ring-0 resize-none py-4 px-4 text-sm"
          />
          <div className="p-3">
            <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
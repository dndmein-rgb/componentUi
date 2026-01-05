"use client";

import { Command, Search, Hash, Globe, FileText } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export default function AIInput_02() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 52,
    maxHeight: 200,
  });
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="w-full py-4">
      <div className="relative max-w-xl w-full mx-auto border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-900 shadow-xl overflow-hidden">
        <div className="flex items-start px-4 pt-3 gap-3">
          <Search className="w-5 h-5 mt-2 text-zinc-400" />
          <Textarea
            ref={textareaRef}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              adjustHeight();
            }}
            placeholder="Type a command or ask AI..."
            className="flex-1 bg-transparent border-none focus-visible:ring-0 resize-none py-2 text-sm"
          />
          <div className="mt-2 hidden sm:flex items-center gap-1 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-[10px] font-medium text-zinc-400">
            <Command className="w-3 h-3" /> K
          </div>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-zinc-50/50 dark:bg-black/20 border-t border-zinc-100 dark:border-zinc-800">
          <button className="flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] font-medium bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
            <Hash className="w-3 h-3" /> Context
          </button>
          <button className="flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] font-medium text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
            <Globe className="w-3 h-3" /> Web
          </button>
        </div>
      </div>
    </div>
  );
}
"use client";

import { Code2, Braces, Terminal, Send } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export default function AIInput_05() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 52,
    maxHeight: 200,
  });
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="w-full py-4">
      <div className="relative max-w-xl w-full mx-auto border border-zinc-200 dark:border-zinc-800 rounded-lg bg-[#1e1e1e] shadow-2xl">
        <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-zinc-900/50">
          <div className="flex items-center gap-2 text-zinc-400">
            <Code2 className="w-4 h-4" />
            <span className="text-[11px] font-mono uppercase tracking-wider">
              Prompt Editor
            </span>
          </div>
          <div className="flex gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          </div>
        </div>
        <div className="flex">
          <div className="w-12 bg-zinc-900/30 text-zinc-600 font-mono text-xs flex flex-col items-center pt-4 select-none">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <Textarea
            ref={textareaRef}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              adjustHeight();
            }}
            className="flex-1 bg-transparent border-none focus-visible:ring-0 resize-none p-4 text-zinc-100 font-mono text-sm leading-relaxed"
            placeholder="// Describe the logic you want to generate..."
          />
        </div>
        <div className="p-3 flex justify-end bg-zinc-900/50">
          <button className="flex items-center gap-2 px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-medium transition-colors">
            <Terminal className="w-3.5 h-3.5" /> Run Logic
          </button>
        </div>
      </div>
    </div>
  );
}
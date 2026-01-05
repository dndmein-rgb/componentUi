"use client";

import { Bold, Italic, List, Link, Eye, Save, Sparkles, Hash } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export default function Input_09() {
  const [inputValue, setInputValue] = useState("");
  const [isPreview, setIsPreview] = useState(false);
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({ minHeight: 160, maxHeight: 400 });

  return (
    <div className="w-full max-w-3xl mx-auto rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-3 py-2 bg-zinc-50 dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-1">
          <button className="p-1.5 rounded hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"><Bold className="w-4 h-4" /></button>
          <button className="p-1.5 rounded hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"><Italic className="w-4 h-4" /></button>
          <button className="p-1.5 rounded hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"><List className="w-4 h-4" /></button>
          <div className="w-px h-4 bg-zinc-300 dark:bg-zinc-700 mx-1" />
          <button 
            onClick={() => setIsPreview(!isPreview)}
            className={cn("flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium transition-colors", 
              isPreview ? "bg-indigo-100 text-indigo-600" : "text-zinc-500 hover:bg-zinc-200")}>
            <Eye className="w-3.5 h-3.5" /> {isPreview ? "Editing" : "Preview"}
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-zinc-400 font-mono hidden sm:inline">{inputValue.length} chars</span>
          <button className="p-1.5 text-zinc-400 hover:text-zinc-600"><Save className="w-4 h-4" /></button>
        </div>
      </div>
      
      <div className="relative">
        <Textarea
          ref={textareaRef}
          value={inputValue}
          onChange={(e) => { setInputValue(e.target.value); adjustHeight(); }}
          placeholder="Draft your AI instructions with markdown..."
          className={cn(
            "w-full bg-transparent border-none focus-visible:ring-0 resize-none p-6 text-sm leading-relaxed",
            isPreview && "opacity-0 pointer-events-none"
          )}
        />
        {isPreview && (
          <div className="absolute inset-0 p-6 text-sm prose prose-zinc dark:prose-invert max-w-none overflow-y-auto">
            {inputValue || <span className="text-zinc-400 italic">Nothing to preview...</span>}
          </div>
        )}
      </div>

      <div className="p-3 bg-zinc-50 dark:bg-zinc-900/50 border-t border-zinc-200 dark:border-zinc-800 flex justify-end">
        <button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
          <Sparkles className="w-4 h-4 fill-current" />
          Generate Content
        </button>
      </div>
    </div>
  );
}
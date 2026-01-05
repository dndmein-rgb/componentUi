"use client";

import {
  Bold,
  Italic,
  List,
  Link2,
  Eye,
  Save,
  Send,
} from "lucide-react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export default function AIInput_09() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 52,
    maxHeight: 200,
  });
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="w-full py-4">
      <div className="relative max-w-xl w-full mx-auto border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-white dark:bg-zinc-950 shadow-sm">
        <div className="flex items-center gap-1 p-2 border-b border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/50">
          <button className="p-1.5 rounded hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
            <Bold className="w-4 h-4" />
          </button>
          <button className="p-1.5 rounded hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
            <Italic className="w-4 h-4" />
          </button>
          <button className="p-1.5 rounded hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
            <List className="w-4 h-4" />
          </button>
          <div className="w-px h-4 bg-zinc-300 dark:bg-zinc-700 mx-1" />
          <button className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-zinc-200 dark:hover:bg-zinc-800 text-xs font-medium text-zinc-600 dark:text-zinc-400">
            <Eye className="w-3.5 h-3.5" /> Preview
          </button>
        </div>
        <Textarea
          ref={textareaRef}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            adjustHeight();
          }}
          className="w-full border-none focus-visible:ring-0 p-4 resize-none"
          placeholder="Write your long-form prompt here..."
        />
        <div className="flex items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-900/30">
          <span className="text-[11px] text-zinc-400 font-mono">
            {inputValue.split(/\s+/).filter(Boolean).length} words
          </span>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs font-medium text-zinc-600 dark:text-zinc-400">
              <Save className="w-3.5 h-3.5" /> Save Draft
            </button>
            <button className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-black text-xs font-medium">
              <Send className="w-3.5 h-3.5" /> Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
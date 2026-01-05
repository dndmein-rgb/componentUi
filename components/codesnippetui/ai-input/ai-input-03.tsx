"use client";

import { Paperclip, Smile, SendHorizontal } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export default function AIInput_03() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 52,
    maxHeight: 200,
  });
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="w-full py-4">
      <div className="relative max-w-xl w-full mx-auto flex items-end gap-2">
        <div className="flex-1 bg-zinc-100 dark:bg-zinc-800 rounded-[24px] px-4 py-1.5 flex items-end border border-transparent focus-within:border-zinc-300 dark:focus-within:border-zinc-600 transition-all">
          <button className="p-2 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">
            <Smile className="w-5 h-5" />
          </button>
          <Textarea
            ref={textareaRef}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              adjustHeight();
            }}
            placeholder="Message AI..."
            className="flex-1 bg-transparent border-none focus-visible:ring-0 resize-none py-2 text-sm min-h-[40px]"
          />
          <button className="p-2 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">
            <Paperclip className="w-5 h-5" />
          </button>
        </div>
        <button
          className={cn(
            "mb-0.5 p-3 rounded-full transition-all duration-300 active:scale-95",
            inputValue
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-zinc-200 dark:bg-zinc-800 text-zinc-400"
          )}
        >
          <SendHorizontal className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
"use client";

import { AtSign, Users, SmilePlus, SendHorizontal } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export default function Input_08() {
  const [inputValue, setInputValue] = useState("");
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({ minHeight: 44, maxHeight: 180 });

  return (
    <div className="w-full max-w-xl mx-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-lg">
      <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-100 dark:border-zinc-800">
        <div className="flex -space-x-2">
          {[1, 2].map((i) => (
            <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 border-2 border-white dark:border-zinc-900" />
          ))}
          <div className="w-6 h-6 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-[10px] font-bold border-2 border-white dark:border-zinc-900 text-zinc-500">+1</div>
        </div>
        <span className="text-[10px] text-zinc-400 font-medium italic">Sarah is typing...</span>
      </div>
      <div className="flex items-end p-2 gap-2">
        <button className="p-2 text-zinc-400 hover:text-zinc-600 transition-colors">
          <AtSign className="w-5 h-5" />
        </button>
        <Textarea
          ref={textareaRef}
          value={inputValue}
          onChange={(e) => { setInputValue(e.target.value); adjustHeight(); }}
          placeholder="Ask team assistant..."
          className="flex-1 bg-transparent border-none focus-visible:ring-0 resize-none py-2 text-sm"
        />
        <button className="p-2 text-blue-500">
          <SendHorizontal className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
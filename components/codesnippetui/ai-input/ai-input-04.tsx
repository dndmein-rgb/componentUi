"use client";

import { Send, Zap } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export default function AIInput_04() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 52,
    maxHeight: 200,
  });
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="w-full py-4">
      <div className="relative max-w-xl w-full mx-auto rounded-[28px] overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 animate-gradient-xy group-hover:scale-110 transition-transform duration-500"></div>
        <div className="relative bg-white/70 dark:bg-black/70 backdrop-blur-xl rounded-[26px] p-2 flex items-center gap-2">
          <div className="pl-4">
            <Zap className="w-5 h-5 text-violet-500" />
          </div>
          <Textarea
            ref={textareaRef}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              adjustHeight();
            }}
            placeholder="Unleash AI magic..."
            className="flex-1 bg-transparent border-none focus-visible:ring-0 resize-none py-3 text-sm placeholder:text-zinc-500"
          />
          <button className="h-10 w-10 flex items-center justify-center rounded-2xl bg-zinc-900 dark:bg-white text-white dark:text-black hover:scale-105 transition-transform">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
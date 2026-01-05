"use client";

import { Mic, X, Square, Terminal } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export default function Input_06() {
  const [isRecording, setIsRecording] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({ minHeight: 52, maxHeight: 200 });

  return (
    <div className="w-full max-w-xl mx-auto p-4">
      <div className="relative flex flex-col items-center gap-4">
        {/* Pulsing Ring Background */}
        <div className={cn(
          "absolute -top-4 w-24 h-24 rounded-full transition-all duration-500",
          isRecording ? "bg-red-500/20 animate-ping opacity-100" : "opacity-0"
        )} />
        
        <button
          onClick={() => setIsRecording(!isRecording)}
          className={cn(
            "relative z-10 w-16 h-16 rounded-full flex items-center justify-center transition-all shadow-xl",
            isRecording ? "bg-red-500 text-white" : "bg-zinc-900 dark:bg-white text-white dark:text-black"
          )}
        >
          {isRecording ? <Square className="w-6 h-6 fill-current" /> : <Mic className="w-6 h-6" />}
        </button>

        <div className="w-full relative group bg-zinc-100 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 transition-all focus-within:ring-2 focus-within:ring-red-500/20">
          <Textarea
            ref={textareaRef}
            value={inputValue}
            onChange={(e) => { setInputValue(e.target.value); adjustHeight(); }}
            placeholder={isRecording ? "Listening..." : "Or type your instructions..."}
            className="w-full bg-transparent border-none focus-visible:ring-0 resize-none py-4 px-5 text-sm"
          />
          {isRecording && (
            <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500 animate-pulse rounded-b-2xl" />
          )}
        </div>
      </div>
    </div>
  );
}
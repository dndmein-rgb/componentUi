"use client";

import { Mic, Keyboard, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function AIInput_06() {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <div className="w-full py-4">
      <div className="relative max-w-xl w-full mx-auto flex flex-col items-center gap-6 py-8">
        <div className="relative">
          {isRecording && (
            <>
              <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping scale-150" />
              <div className="absolute inset-0 bg-red-500/10 rounded-full animate-pulse scale-[2.5]" />
            </>
          )}
          <button
            onClick={() => setIsRecording(!isRecording)}
            className={cn(
              "relative z-10 w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300",
              isRecording
                ? "bg-red-500 text-white"
                : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500"
            )}
          >
            {isRecording ? (
              <X className="w-8 h-8" />
            ) : (
              <Mic className="w-8 h-8" />
            )}
          </button>
        </div>
        <div className="text-center space-y-2">
          <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
            {isRecording ? "Listening..." : "Tap to Speak"}
          </h3>
          <p className="text-sm text-zinc-500">
            Ask me anything with your voice
          </p>
        </div>
        <button className="flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-zinc-600 transition-colors">
          <Keyboard className="w-4 h-4" /> Use Keyboard instead
        </button>
      </div>
    </div>
  );
}
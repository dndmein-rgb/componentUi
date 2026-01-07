"use client";

import { cn } from "@/lib/utils";
import { Download, Check } from "lucide-react";
import { useState } from "react";

type DownloadState = "idle" | "downloading" | "completed";

export default function Btn06() {
  const [state, setState] = useState<DownloadState>("idle");
  const [progress, setProgress] = useState(0);

  const handleDownload = () => {
    if (state !== "idle") return;

    setState("downloading");
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setState("completed");
          setTimeout(() => {
              setState("idle");
              setProgress(0);
          }, 2000);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  };

  return (
    <button
      onClick={handleDownload}
      disabled={state !== "idle"}
      className={cn(
        "relative w-48 h-12 rounded-lg overflow-hidden",
        "bg-zinc-800 text-white",
        "font-semibold text-sm",
        "transition-all duration-300",
        "flex items-center justify-center",
        "disabled:opacity-80 disabled:cursor-not-allowed"
      )}
    >
        <div 
            className="absolute top-0 left-0 h-full bg-green-500/80 transition-all duration-150"
            style={{ width: `${progress}%` }}
        />
      <div className="relative z-10 flex items-center gap-2">
        {state === "idle" && <><Download className="w-4 h-4" /> <span>Download File</span></>}
        {state === "downloading" && `Downloading... ${progress}%`}
        {state === "completed" && <><Check className="w-5 h-5" /> <span>Completed</span></>}
      </div>
    </button>
  );
}

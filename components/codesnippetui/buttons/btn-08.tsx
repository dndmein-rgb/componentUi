"use client";

import { cn } from "@/lib/utils";
import { Trash2 } from "lucide-react";
import { useState } from "react";

export default function Btn08() {
  const [isConfirming, setIsConfirming] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsConfirming(true)}
      onMouseLeave={() => setIsConfirming(false)}
      onFocus={() => setIsConfirming(true)}
      onBlur={() => setIsConfirming(false)}
      className={cn(
        "relative w-36 h-10 rounded-lg",
        "bg-zinc-100 dark:bg-zinc-800",
        "text-zinc-800 dark:text-zinc-200",
        "font-semibold text-sm",
        "transition-all duration-300 overflow-hidden"
      )}
    >
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center gap-2 transition-transform duration-300",
          isConfirming ? "-translate-y-full" : "translate-y-0"
        )}
      >
        <Trash2 className="w-4 h-4" />
        <span>Delete</span>
      </div>
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center transition-transform duration-300 bg-red-500 text-white",
          isConfirming ? "translate-y-0" : "translate-y-full"
        )}
      >
        <span>Are you sure?</span>
      </div>
    </button>
  );
}

"use client";

import { AtSign, Plus, UserCircle2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function AIInput_08() {
  return (
    <div className="w-full py-4">
      <div className="relative max-w-xl w-full mx-auto p-4 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-950">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full border-2 border-white dark:border-zinc-950 bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center overflow-hidden"
              >
                <UserCircle2 className="w-4 h-4 text-zinc-500" />
              </div>
            ))}
          </div>
          <span className="text-[10px] text-zinc-400 font-medium">
            +2 others typing...
          </span>
        </div>
        <div className="relative flex items-center gap-2">
          <button className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-500">
            <Plus className="w-4 h-4" />
          </button>
          <div className="flex-1 relative">
            <input
              placeholder="Type @ to mention team or ask AI..."
              className="w-full bg-zinc-50 dark:bg-zinc-900 border-none rounded-xl py-2 px-4 text-sm"
            />
            <AtSign className="absolute right-3 top-2.5 w-4 h-4 text-zinc-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
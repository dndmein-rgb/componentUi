"use client";

import { cn } from "@/lib/utils";
import { UserPlus, Check } from "lucide-react";
import { useState } from "react";

export default function Btn05() {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <button
      onClick={() => setIsFollowing(!isFollowing)}
      className={cn(
        "flex items-center justify-center w-32 h-10 rounded-full",
        "font-semibold text-sm",
        "transition-all duration-300 ease-in-out",
        isFollowing
          ? "bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200"
          : "bg-blue-500 text-white hover:bg-blue-600",
        "active:scale-95"
      )}
    >
      {isFollowing ? (
        <div className="flex items-center gap-1.5">
          <Check className="w-4 h-4" />
          <span>Following</span>
        </div>
      ) : (
        <div className="flex items-center gap-1.5">
          <UserPlus className="w-4 h-4" />
          <span>Follow</span>
        </div>
      )}
    </button>
  );
}

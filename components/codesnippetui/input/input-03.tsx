"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface FloatingLabelInputProps {
  label: string;
  type?: "text" | "email" | "password";
}

export default function Input_03({
  label,
  type = "text",
}: FloatingLabelInputProps) {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const isFloating = isFocused || value;

  return (
    <div className="w-full max-w-xs">
      <div className="relative">
        <label
          htmlFor={label}
          className={cn(
            "absolute left-3 transition-all duration-200 ease-in-out",
            "pointer-events-none",
            isFloating
              ? "top-1.5 text-xs text-zinc-500"
              : "top-1/2 -translate-y-1/2 text-base text-zinc-400"
          )}
        >
          {label}
        </label>
        <input
          id={label}
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={cn(
            "w-full px-3 pt-6 pb-2", // Adjust padding for floating label
            "rounded-md",
            "bg-white dark:bg-zinc-900",
            "border border-zinc-300 dark:border-zinc-700",
            "text-base text-zinc-900 dark:text-zinc-100",
            "focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
          )}
        />
      </div>
    </div>
  );
}

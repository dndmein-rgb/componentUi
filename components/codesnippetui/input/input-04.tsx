"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface InputWithButtonProps {
  placeholder?: string;
  buttonText?: string;
  onSubmit?: (value: string) => void;
}

export default function Input_04({
  placeholder = "Enter your email",
  buttonText = "Subscribe",
  onSubmit,
}: InputWithButtonProps) {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    onSubmit?.(value);
  };

  return (
    <div className="w-full max-w-sm">
      <div className="relative flex items-center">
        <input
          type="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className={cn(
            "w-full pl-4 pr-32 py-3", // Make space for the button
            "rounded-full",
            "bg-zinc-100 dark:bg-zinc-800/50",
            "border border-zinc-200 dark:border-zinc-700/50",
            "text-sm text-zinc-900 dark:text-zinc-100",
            "placeholder:text-zinc-500",
            "focus:outline-none focus:ring-2 focus:ring-zinc-400/50 dark:focus:ring-white/20"
          )}
        />
        <button
          onClick={handleSubmit}
          className={cn(
            "absolute right-1.5 top-1/2 -translate-y-1/2",
            "flex items-center gap-2 px-4 py-2",
            "rounded-full",
            "bg-zinc-900 dark:bg-white",
            "text-white dark:text-zinc-900",
            "text-sm font-semibold",
            "transition-transform active:scale-95"
          )}
        >
          {buttonText}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

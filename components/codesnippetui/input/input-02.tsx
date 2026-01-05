"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";

interface IconInputProps {
  icon?: React.ReactNode;
  placeholder?: string;
}

export default function Input_02({
  icon = <Mail className="w-5 h-5 text-zinc-400" />,
  placeholder = "Email",
}: IconInputProps) {
  const [value, setValue] = useState("");

  return (
    <div className="w-full max-w-xs">
      <div
        className={cn(
          "flex items-center gap-2",
          "px-3 py-2.5",
          "rounded-lg",
          "bg-zinc-100 dark:bg-zinc-900",
          "border border-transparent",
          "focus-within:bg-white dark:focus-within:bg-zinc-950",
          "focus-within:border-zinc-200 dark:focus-within:border-zinc-800",
          "transition-all duration-300"
        )}
      >
        {icon}
        <input
          type="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className={cn(
            "w-full bg-transparent",
            "text-sm text-zinc-900 dark:text-zinc-100",
            "placeholder:text-zinc-500",
            "focus:outline-none"
          )}
        />
      </div>
    </div>
  );
}

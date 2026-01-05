"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

interface SearchInputProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export default function Input_05({
  placeholder = "Search for components, hooks, and more...",
  onSearch,
}: SearchInputProps) {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-lg">
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition duration-300 animate-tilt"></div>
        <div className="relative flex items-center">
            <Search className="absolute left-5 w-5 h-5 text-zinc-400" />
            <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className={cn(
                "w-full pl-12 pr-4 py-4",
                "rounded-full",
                "bg-white dark:bg-zinc-900",
                "border border-zinc-200 dark:border-zinc-800",
                "text-base text-zinc-900 dark:text-zinc-100",
                "placeholder:text-zinc-500",
                "focus:outline-none focus:ring-2 focus:ring-blue-500"
            )}
            />
        </div>
      </div>
    </form>
  );
}

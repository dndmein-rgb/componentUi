"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Faq05() {
    const [query, setQuery] = useState("");

    return (
        <div className="max-w-2xl mx-auto mt-20 p-4">
            <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold mb-4">
                    <Zap className="w-3 h-3 fill-current" /> Semantic Search
                </div>
                <h1 className="text-3xl font-bold dark:text-white">What can I help you find?</h1>
            </div>

            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-focus-within:opacity-40 transition duration-500"></div>
                <div className="relative flex items-center bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-2 shadow-xl">
                    <Sparkles className="w-5 h-5 ml-3 text-zinc-400" />
                    <input 
                        className="w-full bg-transparent border-none focus:ring-0 px-4 py-3 text-lg placeholder:text-zinc-400 dark:text-white"
                        placeholder="Ask a question about our API..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-lg transition-all active:scale-95">
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
            
            <div className="mt-4 flex flex-wrap justify-center gap-2">
                <span className="text-xs text-zinc-400 pt-1">Try asking:</span>
                {["How do I reset my API key?", "Billing cycles"].map((t) => (
                    <button key={t} className="text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-indigo-500 transition-colors">
                        "{t}"
                    </button>
                ))}
            </div>
        </div>
    );
}
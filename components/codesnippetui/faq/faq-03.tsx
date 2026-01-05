"use client";

import { useState } from "react";
import { Search, Grid, List as ListIcon, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function Faq03() {
    const [searchQuery, setSearchQuery] = useState("");
    const [view, setView] = useState<'grid' | 'list'>('grid');

    return (
        <div className="w-full max-w-6xl mx-auto p-6 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                    <Input 
                        placeholder="Search resources..." 
                        className="pl-10 bg-zinc-50 dark:bg-zinc-800 border-none rounded-xl"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex bg-zinc-100 dark:bg-zinc-800 p-1 rounded-lg">
                        <button 
                            onClick={() => setView('grid')}
                            className={cn("p-1.5 rounded-md transition-all", view === 'grid' ? "bg-white dark:bg-zinc-700 shadow-sm" : "text-zinc-500")}
                        >
                            <Grid className="w-4 h-4" />
                        </button>
                        <button 
                            onClick={() => setView('list')}
                            className={cn("p-1.5 rounded-md transition-all", view === 'list' ? "bg-white dark:bg-zinc-700 shadow-sm" : "text-zinc-500")}
                        >
                            <ListIcon className="w-4 h-4" />
                        </button>
                    </div>
                    <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium border border-zinc-200 dark:border-zinc-800 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900">
                        <Filter className="w-4 h-4" /> Filters
                    </button>
                </div>
            </div>
            
            <div className={cn("grid gap-4", view === 'grid' ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1")}>
                {/* Placeholder Cards */}
                {[1, 2, 3].map((i) => (
                    <div key={i} className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:shadow-md transition-shadow">
                        <Badge className="mb-2 bg-blue-50 text-blue-600 dark:bg-blue-900/30">Guide</Badge>
                        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Advanced Prompting {i}</h3>
                        <p className="text-sm text-zinc-500 mt-1">Learn how to optimize your AI outputs with context...</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
"use client";

import { Search, FileText, Settings, User, Clock, X } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

export default function Faq06() {
    const [isOpen, setIsOpen] = useState(true);

    // Function to handle closing
    const handleClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    // Listen for Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") handleClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleClose]);

    // Prevent body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] bg-zinc-950/40 backdrop-blur-sm px-4 animate-in fade-in duration-200"
            onClick={handleClose} // Close on backdrop click
        >
            <div 
                className="w-full max-w-lg bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
                {/* Search Header */}
                <div className="flex items-center border-b border-zinc-100 dark:border-zinc-800 px-4 py-3">
                    <Search className="w-5 h-5 text-zinc-400 mr-3" />
                    <input 
                        autoFocus
                        placeholder="Search for anything..."
                        className="w-full bg-transparent border-none focus:ring-0 text-zinc-900 dark:text-zinc-100 outline-none"
                    />
                    <button 
                        onClick={handleClose}
                        className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors"
                    >
                        <X className="w-4 h-4 text-zinc-400" />
                    </button>
                </div>
                
                {/* Results List */}
                <div className="p-2 max-h-[60vh] overflow-y-auto">
                    <div className="px-3 py-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Recent</div>
                    <div className="space-y-1">
                        {[
                            { icon: FileText, label: "Invoice_2024.pdf", cat: "Documents" },
                            { icon: Settings, label: "API Configuration", cat: "Settings" },
                            { icon: User, label: "Team Permissions", cat: "Admin" }
                        ].map((item, idx) => (
                            <button 
                                key={idx} 
                                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors group"
                            >
                                <item.icon className="w-4 h-4 text-zinc-400 group-hover:text-indigo-500" />
                                <span className="text-sm font-medium flex-1 text-left text-zinc-700 dark:text-zinc-300">{item.label}</span>
                                <span className="text-[10px] text-zinc-400">{item.cat}</span>
                            </button>
                        ))}
                    </div>
                </div>
                
                {/* Footer / Shortcuts */}
                <div className="bg-zinc-50 dark:bg-zinc-900/50 px-4 py-2.5 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center gap-4 text-[10px] text-zinc-400">
                        <span className="flex items-center gap-1">
                            <kbd className="border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-1.5 py-0.5 rounded shadow-xs text-zinc-500">↵</kbd> 
                            select
                        </span>
                        <span className="flex items-center gap-1">
                            <kbd className="border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-1.5 py-0.5 rounded shadow-xs text-zinc-500">esc</kbd> 
                            close
                        </span>
                    </div>
                    <div className="text-[10px] text-zinc-400 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" /> 
                        <span>History</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
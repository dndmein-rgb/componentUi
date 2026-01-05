"use client";

import { useState } from "react";
import { Layout, CreditCard, ShieldCheck, LifeBuoy } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Faq07() {
    const [activeTab, setActiveTab] = useState('billing');

    const tabs = [
        { id: 'general', label: 'General', icon: Layout },
        { id: 'billing', label: 'Billing', icon: CreditCard },
        { id: 'security', label: 'Security', icon: ShieldCheck },
        { id: 'support', label: 'Support', icon: LifeBuoy },
    ];

    return (
        <div className="w-full max-w-4xl mx-auto py-12 px-4">
            <div className="flex overflow-x-auto pb-4 gap-2 no-scrollbar">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                            "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all border",
                            activeTab === tab.id 
                                ? "bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-black dark:border-white shadow-lg" 
                                : "bg-white text-zinc-600 border-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800 hover:border-zinc-400"
                        )}
                    >
                        <tab.icon className="w-4 h-4" />
                        {tab.label}
                    </button>
                ))}
            </div>
            
            <div className="mt-8 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Simulated Content */}
                <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                    <h3 className="text-xl font-bold mb-2">Showing results for {activeTab}</h3>
                    <p className="text-zinc-500">Explore our comprehensive guide on {activeTab} policies and features...</p>
                </div>
            </div>
        </div>
    );
}
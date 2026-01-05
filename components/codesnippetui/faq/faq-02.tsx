"use client";

import { useState } from "react";
import { Search, ChevronRight, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  id: string;
  question: string;
  answer: string | React.ReactNode;
  category: FAQCategory;
}

type FAQCategory = 'getting-started' | 'billing' | 'features' | 'support';

const CATEGORIES: Record<FAQCategory, { label: string; icon: React.ReactNode }> = {
  'getting-started': { label: 'Getting Started', icon: <ChevronRight className="w-4 h-4" /> },
  'billing': { label: 'Billing', icon: <ChevronRight className="w-4 h-4" /> },
  'features': { label: 'Features', icon: <ChevronRight className="w-4 h-4" /> },
  'support': { label: 'Support', icon: <ChevronRight className="w-4 h-4" /> },
};

const FAQ_ITEMS: FAQItemProps[] = [
    {
        id: "getting-started-1",
        category: "getting-started",
        question: "How do I get started with the platform?",
        answer: "Getting started is easy! Simply sign up for an account and follow our quick setup guide. We'll walk you through each step of the process.",
    },
    {
        id: "billing-1",
        category: "billing",
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
    },
    {
        id: "features-1",
        category: "features",
        question: "What are the key features?",
        answer: "Our platform includes real-time analytics, team collaboration tools, automated workflows, and customizable dashboards.",
    },
    {
        id: "support-1",
        category: "support",
        question: "How can I get help?",
        answer: "Our support team is available 24/7 through our help center, email support, or live chat. We typically respond within 2 hours.",
    },
    {
        id: "getting-started-2",
        category: "getting-started",
        question: "Do you offer a free trial?",
        answer: "Yes, we offer a 14-day free trial for all our plans. No credit card is required to get started.",
    },
];

function FAQItem({ question, answer }: Omit<FAQItemProps, 'id' | 'category'>) {
    return (
        <AccordionItem value={question} className="border-b dark:border-zinc-800">
            <AccordionTrigger className="text-left hover:no-underline">
                {question}
            </AccordionTrigger>
            <AccordionContent className="text-zinc-600 dark:text-zinc-400">
                {answer}
            </AccordionContent>
        </AccordionItem>
    );
}

export default function Faq02() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<FAQCategory>('getting-started');

  const filteredFAQs = FAQ_ITEMS.filter(faq =>
    faq.category === activeCategory &&
    (faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
     String(faq.answer).toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="w-full bg-white dark:bg-zinc-950">
        <div className="container mx-auto max-w-6xl py-12 px-4">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
                    Frequently Asked Questions
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400 mt-2">
                    Here are some of our most commonly asked questions.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
                {/* Sidebar */}
                <div className="md:w-1/3 lg:w-1/4">
                    <div className="sticky top-24">
                        <div className="relative mb-4">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                            <Input
                                type="search"
                                placeholder="Search..."
                                className="pl-9 bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <nav className="space-y-1">
                            {Object.entries(CATEGORIES).map(([key, { label, icon }]) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveCategory(key as FAQCategory)}
                                    className={cn(
                                        "w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                        activeCategory === key
                                            ? "bg-zinc-100 dark:bg-zinc-800/50 text-zinc-900 dark:text-white"
                                            : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/30"
                                    )}
                                >
                                    {icon}
                                    {label}
                                </button>
                            ))}
                        </nav>
                        <div className="mt-8 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900 border dark:border-zinc-800">
                           <HelpCircle className="w-6 h-6 text-zinc-500 mb-2"/>
                           <h4 className="font-semibold text-sm text-zinc-900 dark:text-white mb-1">Can't find an answer?</h4>
                           <p className="text-xs text-zinc-500 dark:text-zinc-400">Contact us and we'll get back to you as soon as possible.</p>
                        </div>
                    </div>
                </div>

                {/* FAQ Content */}
                <div className="md:w-2/3 lg:w-3/4">
                    <h3 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-white capitalize">
                        {CATEGORIES[activeCategory].label}
                    </h3>
                    <Accordion type="multiple" className="w-full">
                        {filteredFAQs.length > 0 ? (
                            filteredFAQs.map((faq) => (
                                <FAQItem key={faq.id} {...faq} />
                            ))
                        ) : (
                            <p className="text-zinc-500 text-center py-8">No questions found.</p>
                        )}
                    </Accordion>
                </div>
            </div>
        </div>
    </div>
  );
}

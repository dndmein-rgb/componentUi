"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";
import Nextjs from "@/components/icons/next";
import ReactIcon from "@/components/icons/react";
import ShadcnIcon from "@/components/icons/shadcn";
import { useState } from "react";
import Motion from "../icons/motion";
import TailwindCSS from "../icons/tailwindcss";
import { Badge } from "../ui/badge";

export default function Features() {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const handleMouseEnter = (iconName: string) => {
        setHoveredItem(iconName);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    return (
        <div className="w-full max-w-4xl mx-auto py-16">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                    Built with the best technologies
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                    Our components are crafted using industry-standard tools and frameworks for optimal performance and developer experience.
                </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.3,
                        delay: 0.1,
                        ease: [0.23, 1, 0.32, 1],
                    }}
                    className={cn(
                        "flex flex-col items-center gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    )}
                    onMouseEnter={() => handleMouseEnter("TailwindCSS")}
                    onMouseLeave={handleMouseLeave}
                >
                    <TailwindCSS className="w-12 h-12 text-blue-500" aria-label="TailwindCSS" />
                    <motion.span
                        animate={{
                            scale: hoveredItem === "TailwindCSS" ? 1.1 : 1,
                            fontWeight:
                                hoveredItem === "TailwindCSS" ? 600 : 500,
                        }}
                        className="text-sm font-medium text-zinc-900 dark:text-zinc-100"
                    >
                        TailwindCSS
                    </motion.span>
                    <Badge variant="secondary" className="text-xs">Utility-first</Badge>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.3,
                        delay: 0.2,
                        ease: [0.23, 1, 0.32, 1],
                    }}
                    className={cn(
                        "flex flex-col items-center gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    )}
                    onMouseEnter={() => handleMouseEnter("Motion")}
                    onMouseLeave={handleMouseLeave}
                >
                    <Motion className="w-12 h-12 text-indigo-500" aria-label="Motion" />
                    <motion.span
                        animate={{
                            scale: hoveredItem === "Motion" ? 1.1 : 1,
                            fontWeight: hoveredItem === "Motion" ? 600 : 500,
                        }}
                        className="text-sm font-medium text-zinc-900 dark:text-zinc-100"
                    >
                        Motion
                    </motion.span>
                    <Badge variant="secondary" className="text-xs">Animations</Badge>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.3,
                        delay: 0.3,
                        ease: [0.23, 1, 0.32, 1],
                    }}
                    className={cn(
                        "flex flex-col items-center gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    )}
                    onMouseEnter={() => handleMouseEnter("Shadcn UI")}
                    onMouseLeave={handleMouseLeave}
                >
                    <ShadcnIcon
                        className="w-12 h-12 text-emerald-500"
                        aria-label="Shadcn/ui"
                    />
                    <motion.span
                        animate={{
                            scale: hoveredItem === "Shadcn UI" ? 1.1 : 1,
                            fontWeight: hoveredItem === "Shadcn UI" ? 600 : 500,
                        }}
                        className="text-sm font-medium text-zinc-900 dark:text-zinc-100"
                    >
                        shadcn/ui
                    </motion.span>
                    <Badge variant="secondary" className="text-xs">Accessible</Badge>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.3,
                        delay: 0.4,
                        ease: [0.23, 1, 0.32, 1],
                    }}
                    className={cn(
                        "flex flex-col items-center gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    )}
                    onMouseEnter={() => handleMouseEnter("Next.js")}
                    onMouseLeave={handleMouseLeave}
                >
                    <Nextjs className="w-12 h-12" aria-label="Next.js" />
                    <motion.span
                        animate={{
                            scale: hoveredItem === "Next.js" ? 1.1 : 1,
                            fontWeight: hoveredItem === "Next.js" ? 600 : 500,
                        }}
                        className="text-sm font-medium text-zinc-900 dark:text-zinc-100"
                    >
                        Next.js
                    </motion.span>
                    <Badge variant="secondary" className="text-xs">Full-stack</Badge>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.3,
                        delay: 0.5,
                        ease: [0.23, 1, 0.32, 1],
                    }}
                    className={cn(
                        "flex flex-col items-center gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    )}
                    onMouseEnter={() => handleMouseEnter("React")}
                    onMouseLeave={handleMouseLeave}
                >
                    <ReactIcon className="w-12 h-12 text-blue-400" aria-label="React" />
                    <motion.span
                        animate={{
                            scale: hoveredItem === "React" ? 1.1 : 1,
                            fontWeight: hoveredItem === "React" ? 600 : 500,
                        }}
                        className="text-sm font-medium text-zinc-900 dark:text-zinc-100"
                    >
                        React
                    </motion.span>
                    <Badge variant="secondary" className="text-xs">Component-based</Badge>
                </motion.div>
            </div>
        </div>
    );
}
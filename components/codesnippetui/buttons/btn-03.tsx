"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function Btn03() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative flex items-center gap-2 px-6 py-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-full font-medium"
    >
      <span>Explore Features</span>
      <motion.div
        animate={{
          x: isHovered ? 4 : 0,
          y: isHovered ? -4 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <ArrowUpRight className="w-4 h-4" />
      </motion.div>
    </motion.button>
  );
}

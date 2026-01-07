"use client";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useState, MouseEvent } from "react";

export default function Btn10() {
  const [spotlightStyle, setSpotlightStyle] = useState({});

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    setSpotlightStyle({
      background: `radial-gradient(circle at ${clientX - left}px ${clientY - top}px, rgba(255, 255, 255, 0.2), transparent 40%)`
    });
  };

  const handleMouseLeave = () => {
    setSpotlightStyle({});
  };

  return (
    <button
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative h-12 px-8 rounded-xl",
        "bg-zinc-900 text-white",
        "overflow-hidden",
        "transition-all duration-300",
        "group"
      )}
    >
      <span
        className="absolute inset-0 transition-all duration-300"
        style={spotlightStyle}
      />
      <span className="relative flex items-center gap-2">
        <span>View Details</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </button>
  );
}

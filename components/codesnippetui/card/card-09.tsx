import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

interface Card09Props {
  media?: {
    title?: string;
    duration?: string;
  };
}

const defaultProps: Card09Props = {
  media: {
    title: "Intro to Neumorphism",
    duration: "12:45",
  },
};

export default function Card_09({ media = defaultProps.media }: Card09Props) {
  return (
    <div
      className={cn(
        "w-full max-w-xs mx-auto",
        "bg-zinc-100 dark:bg-[#2D2D2D]",
        "rounded-3xl p-6",
        "shadow-neumorphic-light dark:shadow-neumorphic-dark",
        "transition-all duration-300"
      )}
    >
      <div className="aspect-square bg-zinc-200 dark:bg-zinc-800 rounded-2xl mb-4 shadow-inner-light dark:shadow-inner-dark">
        {/* Placeholder for an image or visual element */}
      </div>
      <h3 className="font-semibold text-zinc-800 dark:text-zinc-200">
        {media?.title}
      </h3>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
        {media?.duration}
      </p>
      <button
        className="w-full flex items-center justify-center gap-2 py-3 bg-zinc-100 dark:bg-[#2D2D2D] rounded-xl text-zinc-600 dark:text-zinc-300 font-medium shadow-neumorphic-light dark:shadow-neumorphic-dark active:shadow-inner-light dark:active:shadow-inner-dark"
      >
        <Play className="w-4 h-4" />
        Play
      </button>
    </div>
  );
}

// In your tailwind.config.js, you would add these custom shadows:
/*
theme: {
  extend: {
    boxShadow: {
      'neumorphic-light': '9px 9px 16px #d1d1d1, -9px -9px 16px #ffffff',
      'inner-light': 'inset 9px 9px 16px #d1d1d1, inset -9px -9px 16px #ffffff',
      'neumorphic-dark': '9px 9px 16px #242424, -9px -9px 16px #363636',
      'inner-dark': 'inset 9px 9px 16px #242424, inset -9px -9px 16px #363636',
    },
  },
},
*/

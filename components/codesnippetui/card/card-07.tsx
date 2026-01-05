import { cn } from "@/lib/utils";
import { Zap } from "lucide-react";

interface Card07Props {
  cta?: {
    title?: string;
    description?: string;
  };
}

const defaultProps: Card07Props = {
  cta: {
    title: "Unlock Your Potential",
    description: "Get started with our premium features today and take your productivity to the next level.",
  },
};

export default function Card_07({ cta = defaultProps.cta }: Card07Props) {
  return (
    <div
      className={cn(
        "w-full max-w-md mx-auto",
        "relative rounded-2xl overflow-hidden text-white p-8",
        "bg-gradient-to-br from-purple-600 to-indigo-700",
        "shadow-2xl shadow-purple-500/20"
      )}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-20" />
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="p-3 bg-white/10 rounded-full mb-4">
            <Zap className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-extrabold mb-2">
          {cta?.title}
        </h3>
        <p className="text-sm text-indigo-200 mb-6 max-w-xs">
          {cta?.description}
        </p>
        <button className="w-full max-w-xs px-5 py-3 bg-white text-indigo-700 rounded-xl text-sm font-bold transition-transform active:scale-95 hover:bg-indigo-100">
          Get Started
        </button>
      </div>
    </div>
  );
}

// Add this to your globals.css or a suitable CSS file
/*
.bg-grid-pattern {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}
*/

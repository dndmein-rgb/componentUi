import { cn } from "@/lib/utils";
import { Send } from "lucide-react";

export default function Btn07() {
  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center h-12 px-8 rounded-full",
        "overflow-hidden",
        "bg-blue-600 text-white font-medium",
        "shadow-lg shadow-blue-500/30",
        "transition-all duration-300",
        "group"
      )}
    >
      <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent opacity-0 transform -translate-x-10 -translate-y-10 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
      <span className="relative flex items-center gap-2">
        <Send className="w-4 h-4" />
        <span>Submit</span>
      </span>
    </button>
  );
}

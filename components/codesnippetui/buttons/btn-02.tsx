import { cn } from "@/lib/utils";
import { Zap } from "lucide-react";

interface Btn02Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
}

export default function Btn02({
    className,
    children = "Get Started",
    ...props
}: Btn02Props) {
    return (
        <button
            className={cn(
                "relative inline-flex items-center justify-center h-12 px-8 rounded-full",
                "overflow-hidden",
                "text-white font-medium",
                "transition-all duration-300",
                "group",
                className
            )}
            {...props}
        >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-500 group-hover:from-purple-700 group-hover:to-indigo-700 group-hover:scale-110" />
            <div className="relative flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>{children}</span>
            </div>
        </button>
    );
}

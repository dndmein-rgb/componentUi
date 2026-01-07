import { cn } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";

interface Btn04Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    price?: string;
}

export default function Btn04({
    className,
    price = "$99",
    ...props
}: Btn04Props) {
    return (
        <button
            className={cn(
                "flex items-center justify-center h-12 rounded-xl",
                "bg-green-600 text-white",
                "hover:bg-green-700",
                "transition-all duration-300",
                "shadow-lg shadow-green-500/20",
                "group",
                className
            )}
            {...props}
        >
            <div className="flex items-center gap-4 px-6">
                <ShoppingCart className="w-5 h-5" />
                <div className="w-px h-6 bg-green-500" />
                <span className="font-semibold">Buy Now</span>
                <span className="font-bold text-lg">{price}</span>
            </div>
        </button>
    );
}

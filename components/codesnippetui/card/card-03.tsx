import { cn } from "@/lib/utils";
import { Star, ShoppingCart } from "lucide-react";

interface Card03Props {
  product?: {
    name?: string;
    image?: string;
    rating?: number;
    reviews?: number;
    price?: string;
  };
  onAddToCart?: () => void;
}

const defaultProps: Card03Props = {
  product: {
    name: "Wireless Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
    rating: 4.5,
    reviews: 120,
    price: "$99.99",
  },
};

export default function Card_03({
  product = defaultProps.product,
  onAddToCart,
}: Card03Props) {
  return (
    <div
      className={cn(
        "w-full max-w-[300px] mx-auto",
        "bg-white dark:bg-zinc-900",
        "border border-zinc-200/80 dark:border-zinc-800",
        "rounded-xl shadow-md overflow-hidden",
        "transition-all duration-300 hover:shadow-xl"
      )}
    >
      <div className="relative aspect-[4/3] bg-zinc-100 dark:bg-zinc-800">
        <img
          src={product?.image}
          alt={product?.name}
          className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal"
        />
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
          {product?.name}
        </h3>
        <div className="flex items-center gap-1 mb-3">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="text-xs text-zinc-600 dark:text-zinc-400">
            {product?.rating} ({product?.reviews} reviews)
          </span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
            {product?.price}
          </p>
          <button
            onClick={onAddToCart}
            className="flex items-center gap-2 px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-lg text-sm font-medium transition-transform active:scale-95"
          >
            <ShoppingCart className="w-4 h-4" />
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

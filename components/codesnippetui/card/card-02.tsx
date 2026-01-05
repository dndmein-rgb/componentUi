import { cn } from "@/lib/utils";
import { Heart, MoreHorizontal } from "lucide-react";

// Minimal props for a simpler card
interface Card02Props {
  author?: {
    name?: string;
    avatar?: string;
  };
  image?: string;
  isLiked?: boolean;
  onLike?: () => void;
}

const defaultProps: Card02Props = {
  author: {
    name: "John Doe",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop",
  },
  image: "https://images.unsplash.com/photo-1704208249829-9379874a275e?q=80&w=2080&auto=format&fit=crop",
  isLiked: false,
};

export default function Card_02({
  author = defaultProps.author,
  image = defaultProps.image,
  isLiked = defaultProps.isLiked,
  onLike,
}: Card02Props) {
  return (
    <div
      className={cn(
        "w-full max-w-[350px] mx-auto",
        "bg-white dark:bg-zinc-950",
        "border border-zinc-200 dark:border-zinc-800",
        "rounded-2xl shadow-sm overflow-hidden",
        "group"
      )}
    >
      <div className="p-3 flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-2">
          <img
            src={author?.avatar}
            alt={author?.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <h3 className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
            {author?.name}
          </h3>
        </div>
        <button
          type="button"
          className="p-1 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800"
        >
          <MoreHorizontal className="w-4 h-4 text-zinc-500" />
        </button>
      </div>
      <div className="relative aspect-square">
        <img src={image} alt="Card content" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <button
          onClick={onLike}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30 active:scale-95"
        >
          <Heart
            className={cn(
              "w-5 h-5",
              isLiked ? "fill-red-500 text-red-500" : "fill-transparent"
            )}
          />
        </button>
      </div>
    </div>
  );
}

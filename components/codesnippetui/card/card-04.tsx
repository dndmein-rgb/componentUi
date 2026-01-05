import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface Card04Props {
  article?: {
    category?: string;
    title?: string;
    image?: string;
    author?: {
      name?: string;
      avatar?: string;
    };
  };
}

const defaultProps: Card04Props = {
  article: {
    category: "Technology",
    title: "The Future of Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop",
    author: {
      name: "Jane Smith",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    },
  },
};

export default function Card_04({ article = defaultProps.article }: Card04Props) {
  return (
    <div
      className={cn(
        "w-full max-w-sm mx-auto",
        "relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group"
      )}
    >
      <img
        src={article?.image}
        alt={article?.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full p-6 text-white">
        <span className="text-xs font-semibold uppercase tracking-wider bg-white/20 backdrop-blur-sm px-2 py-1 rounded-md mb-2 inline-block">
          {article?.category}
        </span>
        <h3 className="text-2xl font-bold mb-4">{article?.title}</h3>
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <img
                    src={article?.author?.avatar}
                    alt={article?.author?.name}
                    className="w-9 h-9 rounded-full object-cover border-2 border-white/50"
                />
                <span className="text-sm font-medium">{article?.author?.name}</span>
            </div>
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors">
                <ArrowRight className="w-5 h-5" />
            </button>
        </div>
      </div>
    </div>
  );
}

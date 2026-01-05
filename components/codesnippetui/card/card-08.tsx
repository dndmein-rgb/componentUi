import { cn } from "@/lib/utils";

interface Card08Props {
  testimonial?: {
    quote?: string;
    author?: {
      name?: string;
      role?: string;
      avatar?: string;
    };
  };
}

const defaultProps: Card08Props = {
  testimonial: {
    quote: "This is a game-changer. The simplicity and power of the tools are unmatched. Highly recommended for any developer.",
    author: {
      name: "Sarah Johnson",
      role: "Lead Developer, TechCorp",
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2070&auto=format&fit=crop",
    },
  },
};

export default function Card_08({ testimonial = defaultProps.testimonial }: Card08Props) {
  return (
    <div
      className={cn(
        "w-full max-w-md mx-auto",
        "bg-zinc-50 dark:bg-zinc-900",
        "border border-zinc-200/80 dark:border-zinc-800/80",
        "rounded-xl p-8"
      )}
    >
      <div className="relative">
        <span className="absolute -top-4 -left-4 font-serif text-8xl text-zinc-100 dark:text-zinc-800/50">
          “
        </span>
        <blockquote className="relative text-lg font-medium text-zinc-800 dark:text-zinc-200 leading-relaxed">
          {testimonial?.quote}
        </blockquote>
      </div>
      <div className="flex items-center gap-4 mt-6">
        <img
          src={testimonial?.author?.avatar}
          alt={testimonial?.author?.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">
            {testimonial?.author?.name}
          </h4>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {testimonial?.author?.role}
          </p>
        </div>
      </div>
    </div>
  );
}

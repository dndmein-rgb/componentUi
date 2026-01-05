import { cn } from "@/lib/utils";
import { Clock, MapPin } from "lucide-react";

interface Card05Props {
  item?: {
    title?: string;
    description?: string;
    image?: string;
    location?: string;
    time?: string;
  };
}

const defaultProps: Card05Props = {
  item: {
    title: "Community Meetup",
    description: "Join us for a day of networking and learning.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2232&auto=format&fit=crop",
    location: "City Hall, Downtown",
    time: "Sat, Jan 25, 10:00 AM",
  },
};

export default function Card_05({ item = defaultProps.item }: Card05Props) {
  return (
    <div
      className={cn(
        "w-full max-w-xl mx-auto",
        "flex items-center gap-4",
        "bg-white dark:bg-zinc-900",
        "border border-zinc-200 dark:border-zinc-800",
        "rounded-xl shadow-sm overflow-hidden p-3"
      )}
    >
      <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden">
        <img
          src={item?.image}
          alt={item?.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          {item?.title}
        </h3>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 mb-2">
          {item?.description}
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs text-zinc-500">
            <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{item?.location}</span>
            </div>
            <div className="hidden sm:block w-px h-3 bg-zinc-300 dark:bg-zinc-700" />
            <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{item?.time}</span>
            </div>
        </div>
      </div>
    </div>
  );
}

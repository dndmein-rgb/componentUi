import { cn } from "@/lib/utils";
import { UserPlus } from "lucide-react";

interface Card06Props {
  user?: {
    name?: string;
    username?: string;
    avatar?: string;
    bio?: string;
    followers?: number;
    following?: number;
  };
}

const defaultProps: Card06Props = {
  user: {
    name: "Emily White",
    username: "emilywhite",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    bio: "UI/UX Designer | Passionate about creating beautiful and functional interfaces.",
    followers: 12500,
    following: 340,
  },
};

export default function Card_06({ user = defaultProps.user }: Card06Props) {
  // Function to format large numbers
  const formatNumber = (num: number = 0) => {
    if (num >= 1000) return `${(num / 1000).toFixed(1)}k`;
    return num;
  };

  return (
    <div
      className={cn(
        "w-full max-w-sm mx-auto",
        "bg-white dark:bg-zinc-950",
        "border border-zinc-200 dark:border-zinc-800",
        "rounded-2xl shadow-lg p-6"
      )}
    >
      <div className="flex flex-col items-center text-center">
        <img
          src={user?.avatar}
          alt={user?.name}
          className="w-24 h-24 rounded-full object-cover mb-4 ring-4 ring-white dark:ring-zinc-950"
        />
        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
          {user?.name}
        </h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
          @{user?.username}
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-5">
          {user?.bio}
        </p>
        <div className="flex items-center justify-center gap-6 mb-5">
            <div className="text-center">
                <span className="font-bold text-lg text-zinc-900 dark:text-zinc-100">{formatNumber(user?.followers)}</span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 block">Followers</span>
            </div>
            <div className="text-center">
                <span className="font-bold text-lg text-zinc-900 dark:text-zinc-100">{formatNumber(user?.following)}</span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 block">Following</span>
            </div>
        </div>
        <button
          className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-semibold transition-transform active:scale-95 hover:bg-blue-700"
        >
          <UserPlus className="w-4 h-4" />
          Follow
        </button>
      </div>
    </div>
  );
}

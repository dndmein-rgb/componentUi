import { cn } from "@/lib/utils";

interface UserItem {
  id: string;
  name: string;
  username: string;
  avatar: string;
  isFollowing: boolean;
}

const USER_ITEMS: UserItem[] = [
  { id: "1", name: "Alex Turner", username: "alex_t", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop", isFollowing: false },
  { id: "2", name: "Mia Wong", username: "miaw", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop", isFollowing: true },
  { id: "3", name: "Leo Kim", username: "leo.kim", avatar: "https://images.unsplash.com/photo-1527982988738-c323493e83d8?q=80&w=2080&auto=format&fit=crop", isFollowing: false },
];

export default function List_05() {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md border border-zinc-200/50 dark:border-zinc-800/50">
        <div className="p-4 border-b border-zinc-200/50 dark:border-zinc-800/50">
            <h3 className="font-semibold text-zinc-900 dark:text-white">Who to follow</h3>
        </div>
        <div className="space-y-2 p-2">
            {USER_ITEMS.map((user) => (
            <div
                key={user.id}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
            >
                <div className="flex items-center gap-3">
                    <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200">{user.name}</p>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400">@{user.username}</p>
                    </div>
                </div>
                <button className={cn(
                    "px-3 py-1 text-xs font-semibold rounded-full transition-colors",
                    user.isFollowing
                        ? "bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200"
                        : "bg-zinc-900 dark:bg-white text-white dark:text-black"
                )}>
                    {user.isFollowing ? "Following" : "Follow"}
                </button>
            </div>
            ))}
        </div>
        <div className="p-3 text-center">
            <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">Show more</a>
        </div>
      </div>
    </div>
  );
}

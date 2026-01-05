import { cn } from "@/lib/utils";
import Image from "next/image";
import { Plus } from "lucide-react";

interface Profile04Props {
    user?: {
        name?: string;
        username?: string;
        avatar?: string;
        stats?: {
            posts: number;
            followers: string;
            following: number;
        }
    }
}

const defaultUser: Profile04Props['user'] = {
    name: "Lana Steiner",
    username: "lanasteiner",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    stats: {
        posts: 128,
        followers: "4.2M",
        following: 240
    }
};

export default function Profile_04({ user = defaultUser }: Profile04Props) {
  return (
    <div className="w-full max-w-xs mx-auto">
        <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-purple-900/20 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <div className="flex flex-col items-center">
                <div className="relative mb-4">
                    <Image
                        src={user?.avatar || ''}
                        alt={user?.name || ''}
                        width={96}
                        height={96}
                        className="rounded-full object-cover"
                    />
                    <button className="absolute -bottom-1 -right-1 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-white border-2 border-white dark:border-zinc-950">
                        <Plus className="w-4 h-4"/>
                    </button>
                </div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white">{user?.name}</h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">@{user?.username}</p>

                <div className="flex items-center justify-center gap-6 mt-6 w-full border-t border-zinc-200 dark:border-zinc-800 pt-6">
                    <div className="text-center">
                        <p className="font-bold text-lg text-zinc-900 dark:text-white">{user?.stats?.posts}</p>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400">Posts</p>
                    </div>
                     <div className="text-center">
                        <p className="font-bold text-lg text-zinc-900 dark:text-white">{user?.stats?.followers}</p>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400">Followers</p>
                    </div>
                     <div className="text-center">
                        <p className="font-bold text-lg text-zinc-900 dark:text-white">{user?.stats?.following}</p>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400">Following</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

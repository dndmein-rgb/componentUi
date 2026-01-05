import { cn } from "@/lib/utils";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

interface Profile03Props {
    user?: {
        name?: string;
        email?: string;
        avatar?: string;
    }
}

const defaultUser: Profile03Props['user'] = {
    name: "Cody Fisher",
    email: "cody.fisher@example.com",
    avatar: "https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?q=80&w=2070&auto=format&fit=crop",
};

export default function Profile_03({ user = defaultUser }: Profile03Props) {
  return (
    <div className="w-full max-w-xs mx-auto">
      <div
        className={cn(
          "flex items-center justify-between p-2",
          "bg-zinc-100 dark:bg-zinc-800/50",
          "rounded-full",
          "border border-zinc-200 dark:border-zinc-700/50",
          "cursor-pointer hover:bg-zinc-200/60 dark:hover:bg-zinc-700/50 transition-colors"
        )}
      >
        <div className="flex items-center gap-2">
          <Image
            src={user?.avatar || ''}
            alt={user?.name || ''}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <div className="flex-1">
            <p className="text-sm font-semibold text-zinc-900 dark:text-white truncate">
              {user?.name}
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
              {user?.email}
            </p>
          </div>
        </div>
        <ChevronDown className="w-5 h-5 text-zinc-500 dark:text-zinc-400 shrink-0 mx-2" />
      </div>
    </div>
  );
}

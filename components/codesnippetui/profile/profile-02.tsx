import { cn } from "@/lib/utils";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

interface Profile02Props {
    user?: {
        name?: string;
        role?: string;
        avatar?: string;
        coverImage?: string;
        bio?: string;
        email?: string;
        phone?: string;
        location?: string;
    }
}

const defaultUser: Profile02Props['user'] = {
    name: "Olivia Rhye",
    role: "Product Designer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2070&auto=format&fit=crop",
    bio: "Passionate about creating beautiful and intuitive user experiences. Currently shaping the future of design at Acme Inc.",
    email: "olivia.rhye@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA"
};

export default function Profile_02({ user = defaultUser }: Profile02Props) {
  return (
    <div className="w-full max-w-4xl mx-auto">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-800">
            <div className="h-40 md:h-56 relative">
                <Image
                    src={user?.coverImage || ''}
                    alt="Cover image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-2xl"
                />
            </div>
            <div className="p-6 md:p-8">
                <div className="flex items-end -mt-16 md:-mt-20">
                    <div className="relative">
                        <Image
                            src={user?.avatar || ''}
                            alt={user?.name || ''}
                            width={128}
                            height={128}
                            className="rounded-full ring-4 ring-white dark:ring-zinc-900 object-cover w-24 h-24 md:w-32 md:h-32"
                        />
                    </div>
                    <div className="ml-4 flex-1">
                        <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">{user?.name}</h1>
                        <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">{user?.role}</p>
                    </div>
                    <button className="px-4 py-2 bg-zinc-900 text-white dark:bg-white dark:text-black rounded-lg text-sm font-semibold">
                        Edit Profile
                    </button>
                </div>

                <div className="mt-6 border-t border-zinc-200 dark:border-zinc-700 pt-6">
                    <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-200">About</h3>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{user?.bio}</p>
                </div>
                
                <div className="mt-6 border-t border-zinc-200 dark:border-zinc-700 pt-6">
                     <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-200 mb-4">Contact Information</h3>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                            <Mail className="w-4 h-4"/>
                            <span>{user?.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                            <Phone className="w-4 h-4"/>
                            <span>{user?.phone}</span>
                        </div>
                         <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 col-span-full">
                            <MapPin className="w-4 h-4"/>
                            <span>{user?.location}</span>
                        </div>
                     </div>
                </div>

            </div>
        </div>
    </div>
  );
}

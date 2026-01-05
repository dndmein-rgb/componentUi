import { ShieldCheck } from "lucide-react";

export default function Alert05() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative p-[2px] rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-400 animate-gradient-xy"></div>
        <div className="relative bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-[10px] p-4">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <ShieldCheck className="h-7 w-7 text-green-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-zinc-800 dark:text-white">
                  Security Update
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
                  Your account is now protected with two-factor authentication.
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

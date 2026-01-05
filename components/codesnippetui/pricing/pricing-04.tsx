import { cn } from "@/lib/utils";
import { Check, Zap } from "lucide-react";

interface SaaSPlanProps {
  planName?: string;
  price?: number;
  features?: string[];
  ctaText?: string;
  isFeatured?: boolean;
}

const defaultProps: SaaSPlanProps = {
  planName: "Pro",
  price: 49,
  features: ["Unlimited projects", "Team collaboration", "Advanced analytics", "Priority support"],
  ctaText: "Choose Plan",
  isFeatured: true,
};

export default function Pricing_04({
  planName = defaultProps.planName,
  price = defaultProps.price,
  features = defaultProps.features,
  ctaText = defaultProps.ctaText,
  isFeatured = defaultProps.isFeatured,
}: SaaSPlanProps) {
  return (
    <div
      className={cn(
        "w-full max-w-sm mx-auto rounded-2xl p-1",
        isFeatured 
            ? "bg-gradient-to-br from-purple-500 to-blue-500" 
            : "bg-zinc-200 dark:bg-zinc-800"
      )}
    >
      <div className="bg-white dark:bg-zinc-900 rounded-xl p-6">
        {isFeatured && (
          <div className="flex justify-end mb-2">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded-full">
              <Zap className="w-3 h-3" />
              Most Popular
            </div>
          </div>
        )}
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
          {planName}
        </h3>
        <p className="text-zinc-500 dark:text-zinc-400 mt-1">
            For growing teams and businesses.
        </p>
        <div className="mt-6">
          <span className="text-5xl font-extrabold text-zinc-900 dark:text-white">
            ${price}
          </span>
          <span className="text-base font-medium text-zinc-500">/mo</span>
        </div>
        <ul className="mt-6 space-y-3">
          {features?.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-zinc-500" />
              <span className="text-sm text-zinc-600 dark:text-zinc-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>
        <button
          className={cn(
            "w-full mt-8 py-3 rounded-lg font-semibold",
            isFeatured
              ? "bg-gradient-to-br from-purple-500 to-blue-500 text-white hover:opacity-90"
              : "bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700"
          )}
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
}

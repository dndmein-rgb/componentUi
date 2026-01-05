import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

interface FeatureListProps {
  title?: string;
  price?: string;
  period?: string;
  features?: string[];
  buttonText?: string;
}

const defaultProps: FeatureListProps = {
  title: "Community",
  price: "Free",
  period: "Forever",
  features: ["Community support", "10 projects", "Basic analytics", "Email support"],
  buttonText: "Sign up for free",
};

export default function Pricing_03({
  title = defaultProps.title,
  price = defaultProps.price,
  period = defaultProps.period,
  features = defaultProps.features,
  buttonText = defaultProps.buttonText,
}: FeatureListProps) {
  return (
    <div
      className={cn(
        "w-full max-w-sm mx-auto",
        "bg-white dark:bg-zinc-900/50",
        "border border-zinc-200 dark:border-zinc-800",
        "rounded-2xl p-6"
      )}
    >
      <h3 className="text-lg font-semibold text-zinc-800 dark:text-white mb-2">
        {title}
      </h3>
      <div className="flex items-baseline gap-2 mb-6">
        <span className="text-4xl font-bold text-zinc-900 dark:text-white">{price}</span>
        {period && <span className="text-sm text-zinc-500">/ {period}</span>}
      </div>
      <ul className="space-y-3 mb-8">
        {features?.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span className="text-sm text-zinc-600 dark:text-zinc-300">{feature}</span>
          </li>
        ))}
      </ul>
      <button className="w-full py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-lg font-semibold hover:bg-zinc-200 dark:hover:bg-zinc-700">
        {buttonText}
      </button>
    </div>
  );
}

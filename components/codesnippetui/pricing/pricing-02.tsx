"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { Switch } from "@/components/ui/switch";

interface Plan {
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PLANS: Plan[] = [
  {
    name: "Starter",
    price: { monthly: 19, yearly: 190 },
    description: "For individuals and small teams.",
    features: ["10 Projects", "Basic Analytics", "Email Support"],
  },
  {
    name: "Pro",
    price: { monthly: 49, yearly: 490 },
    description: "For growing businesses.",
    features: ["Unlimited Projects", "Advanced Analytics", "Priority Support", "Team Collaboration"],
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: { monthly: 99, yearly: 990 },
    description: "For large organizations.",
    features: ["All Pro features", "Dedicated Account Manager", "Custom Integrations", "24/7 Support"],
  },
];

export default function Pricing_02() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="w-full bg-white dark:bg-zinc-950 py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-white">
            Choose Your Plan
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mt-2">
            Simple, transparent pricing. No hidden fees.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-10">
          <span className={cn("font-medium", !isYearly ? "text-zinc-900 dark:text-white" : "text-zinc-500")}>Monthly</span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
            aria-label="Toggle billing period"
          />
          <span className={cn("font-medium", isYearly ? "text-zinc-900 dark:text-white" : "text-zinc-500")}>Yearly</span>
          <span className="text-xs bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-2 py-1 rounded-full">-20%</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "rounded-2xl p-6 border",
                plan.isPopular 
                    ? "bg-zinc-900 dark:bg-zinc-800 border-zinc-900 dark:border-zinc-700 text-white" 
                    : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800"
              )}
            >
              {plan.isPopular && (
                 <div className="text-xs text-center font-semibold bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-full px-3 py-1 mb-4 inline-block">MOST POPULAR</div>
              )}
              <h3 className={cn(
                  "text-xl font-semibold", 
                  plan.isPopular ? "text-white" : "text-zinc-900 dark:text-white"
              )}>
                  {plan.name}
              </h3>
              <p className={cn("mt-1 text-sm", plan.isPopular ? "text-zinc-300" : "text-zinc-500")}>{plan.description}</p>
              
              <div className="mt-6">
                <span className="text-4xl font-bold">
                  ${isYearly ? plan.price.yearly / 12 : plan.price.monthly}
                </span>
                <span className={cn("text-sm", plan.isPopular ? "text-zinc-400" : "text-zinc-500")}>/month</span>
              </div>
              
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className={cn("w-4 h-4", plan.isPopular ? "text-green-400" : "text-green-500")} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={cn(
                  "w-full mt-8 py-2.5 rounded-lg font-semibold text-sm",
                  plan.isPopular 
                    ? "bg-white text-zinc-900 hover:bg-zinc-200"
                    : "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200"
              )}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

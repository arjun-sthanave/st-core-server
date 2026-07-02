import { Check, Minus } from "lucide-react";
import type { PricingPlan } from "../constant/types/pricing";

export default function PriceCard({ plan }: { plan: PricingPlan }) {
  return (
    <div
      className={[
        "group relative flex h-full min-h-[540px] cursor-pointer flex-col  rounded-2xl border transition-all duration-300 ease-out",
        "hover:scale-105 hover:shadow-card",
        plan.popular
          ? "border-primary-400/60 bg-primary-600/10 hover:border-primary-300 hover:bg-primary-600/20"
          : "border-white/10 bg-white/5 hover:border-primary-500/60 hover:bg-primary-600/10",
      ].join(" ")}
    >
      {plan.popular ? (
        <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-primary-300 px-4 py-1 text-xs font-bold uppercase tracking-wide text-primary-900">
          Most Popular
        </span>
      ) : null}

      <div className="p-8">
        <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-primary-200">
          {plan.name} plan
        </h3>

        <div className="mt-6 flex items-end gap-2">
          <span className="text-6xl font-bold leading-none text-white">
            ${plan.price}
          </span>
          <span className="pb-2 text-sm text-white/50">per month</span>
        </div>

        <button
          className={[
            "mt-8 w-full rounded-xl px-4 py-4 text-sm font-semibold transition-all duration-300",
            plan.popular
              ? "bg-primary-300 text-primary-900 group-hover:bg-primary-200 group-hover:shadow-soft"
              : "bg-white/10 text-white group-hover:bg-primary-600 group-hover:text-white",
          ].join(" ")}
        >
          {plan.button}
        </button>
      </div>

      <div className="flex flex-1 flex-col border-t border-white/10 p-8">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/80">
          Features
        </p>

        <p className="mt-3 text-sm leading-6 text-white/50">{plan.description}</p>

        <ul className="mt-8 flex flex-1 flex-col justify-center space-y-4">
          {plan.features.map((feature) => (
            <li
              key={feature.text}
              className={[
                "flex items-center gap-3 text-sm",
                feature.included ? "text-white/80" : "text-white/40",
              ].join(" ")}
            >
              <span
                className={[
                  "flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors duration-300",
                  feature.included
                    ? "bg-primary-500 text-white group-hover:bg-primary-400"
                    : "border border-white/20 bg-white/5 text-white/40",
                ].join(" ")}
              >
                {feature.included ? (
                  <Check size={12} strokeWidth={3} />
                ) : (
                  <Minus size={12} strokeWidth={3} />
                )}
              </span>
              {feature.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

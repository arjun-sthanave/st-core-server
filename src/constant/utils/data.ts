import type { AboutFeature } from "../types/about";
import type { HeroStats } from "../types/home";
import type { PricingPlan } from "../types/pricing";

import { Activity, Shield } from "lucide-react";

export const HERO_STATS: HeroStats[] = [
  { value: "99.99%", label: "SLA GUARANTEED" },
  { value: "256-bit", label: "ENCRYPTION" },
  { value: "Tier 4", label: "DATA CENTERS" },
];

export const ABOUT_FEATURES: AboutFeature[] = [
  {
    icon: Shield,
    title: "Unrivaled Privacy",
    description:
      "Zero-trust architecture with end-to-end encryption and strict data sovereignty.",
  },
  {
    icon: Activity,
    title: "99.99% Uptime",
    description:
      "Multi-layered redundancy across global Tier 4 data centers.",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Standard",
    price: 49,
    description: "Essential infrastructure for growing teams.",
    features: [
      { text: "8 vCPU", included: true },
      { text: "16GB RAM", included: true },
      { text: "500GB NVMe", included: true },
      { text: "Priority Support", included: false },
    ],
    button: "Select Plan",
  },
  {
    name: "Professional",
    price: 99,
    description: "Everything in Standard plus advanced performance.",
    features: [
      { text: "16 vCPU", included: true },
      { text: "32GB RAM", included: true },
      { text: "1TB NVMe", included: true },
      { text: "Priority Support", included: true },
    ],
    button: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: 199,
    description: "Everything in Professional plus dedicated support.",
    features: [
      { text: "32 vCPU", included: true },
      { text: "64GB RAM", included: true },
      { text: "2TB NVMe", included: true },
      { text: "24/7 Dedicated Support", included: true },
    ],
    button: "Contact Sales",
  },
];

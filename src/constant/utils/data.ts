import type { AboutFeature } from "../types/about";
import type { ContactItem } from "../types/contact";
import type { HeroStats } from "../types/home";
import type { PricingPlan } from "../types/pricing";
import { Activity, Mail, MapPin, Shield, Terminal } from "lucide-react";
import serverImg from "../../assets/img/server.jpg";
import {
    FacebookIcon,
    InstagramIcon,
    LinkedinIcon,
    TwitterIcon,
} from "../../component/icon/SocialIcons";
import type { SocialLink } from "../types/footer";
  
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

export const CONTACT_ITEMS: ContactItem[] = [
  {
    icon: Mail,
    title: "General Support",
    value: "support@protonservers.io",
    iconClassName: "bg-primary-600/20 text-primary-300",
  },
  {
    icon: MapPin,
    title: "Global Headquarters",
    value: "Bahnhofstrasse 10, 8001 Zurich, Switzerland",
    iconClassName: "bg-cyan-500/15 text-cyan-300",
  },
  {
    icon: Terminal,
    title: "Emergency NOC",
    value: "ssh noc@emergency.protonservers.io",
    iconClassName: "bg-primary-600/20 text-primary-300",
  },
];

export const inquiryTypes = [
    "General Inquiry",
    "Sales",
    "Technical Support",
    "Partnership",
  ];




  export const portfolioImages = [
    serverImg,
    serverImg,
    serverImg,
    serverImg,
    serverImg,
    serverImg,
  ];
  

  export const socialLinks: SocialLink[] = [
    { icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/SthanaveTechnologies" },
    { icon: TwitterIcon, label: "Twitter", href: "https://x.com/SthanaveTech" },
    { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/company/sthanave-technologies/" },
    { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/sthanavetech?igsh=MTNsZTEzNGtsYTV1Mw%3D%3D" },
  ];
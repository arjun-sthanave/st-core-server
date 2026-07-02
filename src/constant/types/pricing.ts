export type PricingFeature = {
  text: string;
  included: boolean;
};

export type PricingPlan = {
  name: string;
  price: number;
  description: string;
  features: PricingFeature[];
  button: string;
  popular?: boolean;
};

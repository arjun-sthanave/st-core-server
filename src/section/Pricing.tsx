import { PRICING_PLANS } from "../constant/utils/data";
import PriceCard from "../component/PriceCard";
export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Transparent Pricing
          </h2>
          <p className="mt-4 text-base text-white/70 md:text-lg">
            Choose the perfect infrastructure for your growing enterprise needs.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
      {
        PRICING_PLANS.map((plan) => (
          <PriceCard key={plan.name} plan={plan} />
        ))
      }
          
        </div>
      </div>
    </section>
  );
}

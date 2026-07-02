import { Activity, Shield } from "lucide-react";
import serverImg from "../assets/img/server.jpg";

const features = [
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

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <img
              src={serverImg}
              alt="Enterprise server infrastructure"
              className="h-full min-h-[320px] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Sovereign Infrastructure
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Architected for Enterprise Security
            </h2>

            <p className="mt-6 text-base leading-7 text-white/70 md:text-lg">
              At ProtonServers, we believe that true digital sovereignty requires
              more than just fast hardware. It demands a fundamental commitment
              to privacy, transparency, and uncompromising security standards.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600/20 text-primary-300">
                      <Icon size={18} />
                    </div>

                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/60">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <p className="mt-8 text-right text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Established 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

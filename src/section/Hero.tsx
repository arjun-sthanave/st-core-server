import { ArrowRight, Globe, Server } from "lucide-react";
import { HERO_STATS } from "../constant/utils/data";
import serverImg from "../assets/img/server.jpg";
export default function Hero() {
  return (
    <section id="hero" className="section">
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-2 text-xs font-semibold tracking-wide text-primary-200">
              <span className="h-2 w-2 rounded-full bg-success" />
              ENTERPRISE GRADE NODES ACTIVE
            </div>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Secure, Scalable, Sovereign Infrastructure
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/70 md:text-lg">
              High-performance server infrastructure designed for enterprises that
              value security without compromise. Deploy globally in minutes on our
              hardened network.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="btn-primary inline-flex items-center justify-center gap-2">
                Deploy Now
                <ArrowRight size={18} />
              </button>

              <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-white transition hover:bg-white/10">
                <Globe size={18} />
                View Network Map
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {HERO_STATS.map((item) => (
                <div key={item.label}>
                  <p className="text-xl font-bold text-white md:text-2xl">
                    {item.value}
                  </p>
                  <p className="mt-1 text-[10px] font-medium tracking-wider text-white/50 md:text-xs">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-5 shadow-card backdrop-blur-xl">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600/20 text-primary-300">
                  <Server size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Instance: PH-01-ZURICH
                  </p>
                  <p className="text-xs text-white/50">Primary cluster</p>
                </div>
              </div>

              <span className="rounded-full bg-success/15 px-3 py-1 text-xs font-medium text-success">
                Operational
              </span>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/60 p-4 font-mono text-xs leading-6 text-white/70">
              <p>$ proton-cli deploy --cluster &quot;eu-central&quot;</p>
              <p className="text-white/50">... Initializing secure handshake</p>
              <p className="text-white/50">... Verifying hardware root of trust</p>
              <p className="text-success">✓ Secure cluster established in 42ms</p>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-white/50">Network Latency</p>
                <p className="mt-1 text-lg font-semibold text-white">12ms</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-white/50">CPU Utilization</p>
                <p className="mt-1 text-lg font-semibold text-white">24.5%</p>
                <div className="mt-2 h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[24.5%] rounded-full bg-primary-500" />
                </div>
              </div>
            </div>

            <div className="mt-4 h-60 rounded-xl border border-white/10 bg-gradient-to-br from-cyan-500/20 via-primary-600/20 to-purple-900/40">
              <img src={serverImg} alt="Server" className="w-full h-full object-cover" />
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
}

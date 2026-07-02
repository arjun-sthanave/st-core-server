import { CONTACT_ITEMS, inquiryTypes } from "../constant/utils/data";


export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Get in Touch
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-white/70 md:text-lg">
              Our dedicated support team is available 24/7 to assist with your
              infrastructure needs. Reach out for sales, technical support, or
              partnership inquiries.
            </p>

            <div className="mt-10 space-y-6">
              {CONTACT_ITEMS.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div
                      className={[
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                        item.iconClassName,
                      ].join(" ")}
                    >
                      <Icon size={18} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-white/60">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/50">
                Network Status
              </p>
              <div className="mt-3 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-success shadow-[0_0_10px_rgba(22,163,74,0.8)]" />
                <p className="text-sm font-semibold text-white">
                  All Systems Operational
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-white/50">
                    Full Name
                  </span>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-primary-500/60 focus:ring-2 focus:ring-primary-500/20"
                  />
                </label>

                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-white/50">
                    Business Email
                  </span>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-primary-500/60 focus:ring-2 focus:ring-primary-500/20"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-white/50">
                  Inquiry Type
                </span>
                <select
                  defaultValue=""
                  className="mt-2 w-full appearance-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition focus:border-primary-500/60 focus:ring-2 focus:ring-primary-500/20"
                >
                  <option value="" disabled className="bg-[#0b0a12]">
                    Select an option
                  </option>
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type} className="bg-[#0b0a12]">
                      {type}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-white/50">
                  Message
                </span>
                <textarea
                  rows={5}
                  placeholder="How can we help you?"
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-primary-500/60 focus:ring-2 focus:ring-primary-500/20"
                />
              </label>

              <button type="submit" className="btn-primary w-full py-4">
                Submit Inquiry
              </button>

              <p className="text-center text-xs text-white/40">
                Data protected by end-to-end sovereign encryption.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

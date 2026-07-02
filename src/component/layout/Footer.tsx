import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { NAVIGATION } from "../../constant/navigation";
import { portfolioImages, socialLinks } from "../../constant/utils/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="container-custom py-14">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <img src={logo} alt="STHANAVE logo" className="h-14 w-auto" />

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/70">
              Forge a digital path with resilience, elegance, diversity.
            </p>

            <div className="mt-6 space-y-4">
              <a
                href="tel:+919244950142"
                className="flex items-center gap-3 text-sm text-white/80 transition hover:text-primary-300"
              >
                <Phone size={16} className="text-primary-400" />
                +91 92449 50142
              </a>

              <a
                href="mailto:info@sthanave.co.in"
                className="flex items-center gap-3 text-sm text-white/80 transition hover:text-primary-300"
              >
                <Mail size={16} className="text-primary-400" />
                info@sthanave.co.in
              </a>

              <p className="flex items-start gap-3 text-sm text-white/80">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary-400" />
                Kadambari Nagar Durg, IN 491001
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Our Navigation</h3>

            <ul className="mt-5 space-y-3">
              {NAVIGATION.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className="text-sm text-white/70 transition hover:text-primary-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Our Portfolio</h3>

            <div className="mt-5 grid grid-cols-3 gap-2">
              {portfolioImages.map((image, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-md border border-white/10"
                >
                  <img
                    src={image}
                    alt={`Portfolio project ${index + 1}`}
                    className="h-16 w-full object-cover transition duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>

            <p className="mt-5 text-sm leading-6 text-white/70">
              Stay connected. Follow our journey for the latest updates and
              innovations.
            </p>

            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:border-primary-500/50 hover:bg-primary-600/20 hover:text-primary-300"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          © {new Date().getFullYear()} STHANAVE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

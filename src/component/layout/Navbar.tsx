import { Link, NavLink } from "react-router-dom";

import { useState } from "react";
import { NAVIGATION } from "../../constant/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black/60 backdrop-blur-xl border-b border-white/10 border-b border-border">

      <div className="container-custom">

        <div className="flex h-16 items-center justify-between">

          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-primary-200"
          >
            ST-CORE
            <span className="text-primary-500">Servers</span>
          </Link>

          {/* Desktop Menu */}

          <nav className="hidden md:flex items-center gap-10">

            {NAVIGATION.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-primary-300 after:absolute after:left-4 after:right-4 after:-bottom-1 after:h-[2px] after:bg-primary-300 after:rounded-full"
                      : "text-text-secondary hover:text-primary-300 hover:bg-white/10"
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}

          </nav>

          {/* Right Side */}

          <div className="flex items-center gap-3">

            <Link
              to="/pricing"
              className="btn-primary hidden sm:inline-flex"
            >
              Get Started
            </Link>

            {/* Mobile */}

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
            >
              {open ? (
                <X size={20} strokeWidth={2} />
              ) : (
                <Menu size={20} strokeWidth={2} />
              )}
            </button>

          </div>

        </div>

      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="md:hidden border-t border-white/10">

          <div className="container-custom py-4">
            <div className="mx-auto w-full max-w-sm rounded-2xl border border-white/10 p-2 shadow-soft ">

            {NAVIGATION.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold text-white bg-white/10"
                    : "flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-medium text-white/80 hover:bg-white  hover:text-white transition"
                }
              >
                {item.title}
              </NavLink>
            ))}

            <Link
              to="/pricing"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-primary-600 px-4 py-3 text-sm font-semibold text-primary-300 hover:bg-primary-700 transition"
            >
              Get Started
            </Link>

            </div>
          </div>

        </div>
      )}
    </header>
  );
}
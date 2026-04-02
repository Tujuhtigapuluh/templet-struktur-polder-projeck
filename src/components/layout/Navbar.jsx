import { Menu, Moon, Sun, Waves } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import Sidebar from "@/components/layout/Sidebar";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200/70 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="inline-flex items-center gap-2 text-slate-900 dark:text-slate-100">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary text-white">
            <Waves size={20} />
          </span>
          <span>
            <span className="block text-sm font-semibold leading-none">PT. Delta Polder</span>
            <span className="block text-xs text-slate-500 dark:text-slate-400">Indonesia</span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-medium transition ${isActive ? "text-primary" : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>

      <Sidebar open={open} onClose={() => setOpen(false)} />
    </header>
  );
}

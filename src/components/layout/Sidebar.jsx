import { motion } from "framer-motion";
import { X } from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
];

/** @param {{open:boolean, onClose:() => void}} props */
export default function Sidebar({ open, onClose }) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 lg:hidden" onClick={onClose}>
      <motion.aside
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        exit={{ x: 300 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="ml-auto h-full w-72 bg-white p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <button onClick={onClose} className="mb-8 inline-flex rounded-md p-2 text-slate-600 hover:bg-slate-100">
          <X size={20} />
        </button>
        <nav className="space-y-4">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={onClose}
              className={({ isActive }) =>
                `block rounded-md px-4 py-3 font-medium transition ${isActive ? "bg-blue-50 text-primary" : "text-slate-700 hover:bg-slate-50"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </motion.aside>
    </div>
  );
}
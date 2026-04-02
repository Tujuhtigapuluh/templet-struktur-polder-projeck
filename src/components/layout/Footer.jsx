import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { COMPANY } from "@/utils/constants";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
];

const services = ["Perencanaan Polder", "Sistem Drainase", "Instalasi Pompa", "Monitoring IoT"];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="text-lg font-semibold text-white">{COMPANY.name}</h3>
          <p className="mt-3 text-sm text-slate-400">
            Mitra strategis untuk pengelolaan polder terpadu berbasis rekayasa, operasional, dan monitoring data.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {quickLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Layanan</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            {services.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Kontak</h4>
          <ul className="mt-3 space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>{COMPANY.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0" />
              <span>{COMPANY.phone}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0" />
              <span>{COMPANY.email}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-5 text-center text-sm text-slate-500">
        Copyright {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
      </div>
    </footer>
  );
}

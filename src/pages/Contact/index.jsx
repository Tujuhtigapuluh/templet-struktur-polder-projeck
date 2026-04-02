import { ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet";
import ContactForm from "@/components/forms/ContactForm";
import SectionTitle from "@/components/common/SectionTitle";
import useSEO from "@/hooks/useSEO";
import { COMPANY } from "@/utils/constants";

const faqData = [
  { q: "Apakah bisa konsultasi sebelum survei lapangan?", a: "Bisa. Kami mulai dari diskusi kebutuhan, lalu susun scope survei yang relevan." },
  { q: "Berapa lama proses perencanaan awal?", a: "Rata-rata 2-4 minggu tergantung skala kawasan dan kelengkapan data." },
  { q: "Apakah melayani maintenance jangka panjang?", a: "Ya, kami memiliki skema kontrak maintenance tahunan dan inspeksi periodik." },
];

function FaqItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-lg border border-slate-200 dark:border-slate-800">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between px-4 py-3 text-left font-medium"
      >
        {item.q}
        <ChevronDown size={16} className={`transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open ? <p className="border-t border-slate-200 px-4 py-3 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-300">{item.a}</p> : null}
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      {useSEO({ title: "Kontak", description: "Hubungi PT. Delta Polder Indonesia untuk konsultasi pengelolaan polder, drainase, dan sistem pompa." })}
      <main>
        <section className="bg-slate-900 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold lg:text-6xl">Hubungi Tim Kami</h1>
            <p className="mt-4 max-w-2xl text-slate-200">Kami siap membantu menyusun solusi pengelolaan polder yang paling sesuai dengan kebutuhan kawasan Anda.</p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <SectionTitle title="Form Kontak" subtitle="Isi detail kebutuhan Anda dan tim kami akan merespons segera." />
              <ContactForm />
            </div>
            <div className="space-y-6">
              <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                <SectionTitle title="Informasi Kontak" />
                <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                  <li className="flex gap-2"><MapPin size={18} className="mt-0.5" /> {COMPANY.address}</li>
                  <li className="flex gap-2"><Phone size={18} /> {COMPANY.phone}</li>
                  <li className="flex gap-2"><Mail size={18} /> {COMPANY.email}</li>
                </ul>
              </div>
              <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
                <MapContainer center={[-6.97, 110.42]} zoom={12} className="h-72 w-full">
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />
                  <CircleMarker center={[-6.97, 110.42]} radius={10} pathOptions={{ color: "#059669" }}>
                    <Popup>PT. Delta Polder Indonesia</Popup>
                  </CircleMarker>
                </MapContainer>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 lg:pb-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionTitle center title="FAQ" subtitle="Pertanyaan yang paling sering diajukan sebelum memulai proyek." />
            <div className="space-y-3">
              {faqData.map((item) => (
                <FaqItem key={item.q} item={item} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

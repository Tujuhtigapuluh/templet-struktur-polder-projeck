import { Activity, Cpu, Droplets, Hammer, Map, ShieldCheck } from "lucide-react";
import Button from "@/components/common/Button";
import SectionTitle from "@/components/common/SectionTitle";
import useSEO from "@/hooks/useSEO";

const services = [
  { name: "Perencanaan Polder", icon: Map, description: "Kajian hidrologi dan masterplan polder.", features: ["Studi topografi", "Analisis debit", "Rencana anggaran"] },
  { name: "Konstruksi Tanggul", icon: ShieldCheck, description: "Pembangunan tanggul primer dan sekunder.", features: ["Proteksi erosi", "Material tahan lama", "Quality control"] },
  { name: "Sistem Drainase", icon: Droplets, description: "Jaringan drainase terpadu lintas kawasan.", features: ["Saluran utama", "Box culvert", "Normalisasi"] },
  { name: "Instalasi Pompa", icon: Activity, description: "Pompa banjir dengan skema operasi adaptif.", features: ["Pompa sentrifugal", "Panel kontrol", "Commissioning"] },
  { name: "Monitoring IoT", icon: Cpu, description: "Sensor tinggi muka air dan dashboard realtime.", features: ["Telemetri", "Alert otomatis", "Analitik data"] },
  { name: "Perawatan & Perbaikan", icon: Hammer, description: "Program preventive dan corrective maintenance.", features: ["Inspeksi berkala", "Perbaikan cepat", "Laporan periodik"] },
];

export default function ServicesPage() {
  return (
    <>
      {useSEO({ title: "Layanan", description: "Layanan lengkap PT. Delta Polder Indonesia dari perencanaan hingga pemeliharaan sistem polder." })}
      <main>
        <section className="bg-slate-900 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold lg:text-6xl">Layanan Pengelolaan Polder</h1>
            <p className="mt-4 max-w-2xl text-slate-200">Pendekatan end-to-end untuk memastikan sistem polder berjalan andal sepanjang tahun.</p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Enam Layanan Inti" subtitle="Semua layanan dirancang modular agar sesuai kebutuhan kawasan Anda." />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article key={service.name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <service.icon className="text-primary" />
                  <h3 className="mt-4 text-xl font-semibold">{service.name}</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-300">{service.description}</p>
                  <ul className="mt-4 space-y-1 text-sm text-slate-500 dark:text-slate-400">
                    {service.features.map((feature) => (
                      <li key={feature}>- {feature}</li>
                    ))}
                  </ul>
                  <Button size="sm" className="mt-5 hover:scale-100">
                    Konsultasi Layanan
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

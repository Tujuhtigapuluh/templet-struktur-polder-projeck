import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet";
import SectionTitle from "@/components/common/SectionTitle";
import useSEO from "@/hooks/useSEO";

const timeline = [
  { year: "2000", text: "Perusahaan berdiri dengan fokus rekayasa drainase kawasan pesisir." },
  { year: "2008", text: "Memulai proyek lintas provinsi untuk modernisasi sistem polder." },
  { year: "2016", text: "Mengadopsi pengukuran berbasis sensor dan analitik operasional." },
  { year: "2024", text: "Menjalankan pusat monitoring terpadu untuk klien pemerintah dan swasta." },
];

const values = ["Profesional", "Inovatif", "Terpercaya", "Kolaboratif", "Tangguh", "Berkelanjutan"];

export default function AboutPage() {
  return (
    <>
      {useSEO({ title: "Tentang Kami", description: "Profil perusahaan PT. Delta Polder Indonesia dan perjalanan kami sejak tahun 2000." })}
      <main>
        <section className="bg-slate-900 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm uppercase tracking-[0.18em] text-blue-200">Company Profile</p>
            <h1 className="mt-4 text-4xl font-bold lg:text-6xl">Membangun Ketahanan Kawasan Bersama Polder Modern</h1>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Sejarah Perusahaan" subtitle="Perjalanan panjang kami dalam menciptakan sistem pengelolaan air yang andal." />
            <div className="space-y-6">
              {timeline.map((item) => (
                <div key={item.year} className="flex gap-4 rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                  <div className="w-16 shrink-0 text-xl font-bold text-primary">{item.year}</div>
                  <p className="text-slate-600 dark:text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <SectionTitle title="Visi" subtitle="Menjadi perusahaan terdepan dalam pengelolaan polder dan mitigasi banjir berbasis teknologi." />
            </div>
            <div>
              <SectionTitle title="Misi" subtitle="Menyediakan layanan rekayasa, pembangunan, dan operasi polder yang aman, efisien, dan berkelanjutan." />
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Nilai Utama" subtitle="Nilai yang kami pegang dalam setiap proyek dan kolaborasi." />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <div key={value} className="rounded-lg border border-slate-200 bg-white p-5 font-medium dark:border-slate-800 dark:bg-slate-900">
                  {value}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Sertifikasi" subtitle="Komitmen mutu dan manajemen risiko melalui standar internasional." />
            <div className="flex flex-wrap gap-4">
              {["ISO 9001", "ISO 14001", "ISO 45001"].map((cert) => (
                <div key={cert} className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold dark:border-slate-700">
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16 lg:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Lokasi Kantor" subtitle="Kantor pusat kami berada di Semarang sebagai pusat operasional regional." />
            <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
              <MapContainer center={[-6.97, 110.42]} zoom={12} className="h-[420px] w-full">
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />
                <CircleMarker center={[-6.97, 110.42]} radius={10} pathOptions={{ color: "#1e40af" }}>
                  <Popup>Kantor PT. Delta Polder Indonesia</Popup>
                </CircleMarker>
              </MapContainer>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

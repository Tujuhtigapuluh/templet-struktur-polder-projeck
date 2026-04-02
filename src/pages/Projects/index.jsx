import { useMemo, useState } from "react";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import SectionTitle from "@/components/common/SectionTitle";
import useSEO from "@/hooks/useSEO";

const projectData = [
  { id: 1, category: "Drainase", name: "Drainase Kawasan Industri A", location: "Semarang", year: 2024, area: "320 Ha", status: "Selesai", image: "https://picsum.photos/seed/proj1/700/420" },
  { id: 2, category: "Tanggul", name: "Penguatan Tanggul Utara", location: "Gresik", year: 2023, area: "510 Ha", status: "Berjalan", image: "https://picsum.photos/seed/proj2/700/420" },
  { id: 3, category: "Pompa", name: "Stasiun Pompa Delta", location: "Bekasi", year: 2022, area: "280 Ha", status: "Selesai", image: "https://picsum.photos/seed/proj3/700/420" },
  { id: 4, category: "Drainase", name: "Revitalisasi Saluran Primer", location: "Jakarta", year: 2021, area: "190 Ha", status: "Selesai", image: "https://picsum.photos/seed/proj4/700/420" },
  { id: 5, category: "Pompa", name: "Modernisasi Rumah Pompa", location: "Pekalongan", year: 2024, area: "150 Ha", status: "Berjalan", image: "https://picsum.photos/seed/proj5/700/420" },
];

const tabs = ["Semua", "Drainase", "Tanggul", "Pompa"];

export default function ProjectsPage() {
  const [tab, setTab] = useState("Semua");
  const [selected, setSelected] = useState(null);

  const projects = useMemo(() => {
    if (tab === "Semua") {
      return projectData;
    }
    return projectData.filter((project) => project.category === tab);
  }, [tab]);

  return (
    <>
      {useSEO({ title: "Proyek", description: "Portofolio proyek drainase, tanggul, dan pompa yang dikerjakan PT. Delta Polder Indonesia." })}
      <main>
        <section className="bg-slate-900 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold lg:text-6xl">Portofolio Proyek</h1>
            <p className="mt-4 max-w-2xl text-slate-200">Proyek nyata yang menunjukkan dampak sistem polder yang dirancang secara matang.</p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Daftar Proyek" subtitle="Filter proyek berdasarkan kategori pekerjaan utama." />
            <div className="mb-8 flex flex-wrap gap-2">
              {tabs.map((item) => (
                <button
                  key={item}
                  onClick={() => setTab(item)}
                  className={`rounded-md px-4 py-2 text-sm font-medium transition ${tab === item ? "bg-primary text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200"}`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article key={project.id} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                  <img src={project.image} alt={project.name} className="h-44 w-full object-cover" />
                  <div className="space-y-2 p-5">
                    <Badge label={project.category} />
                    <h3 className="text-lg font-semibold">{project.name}</h3>
                    <p className="text-sm text-slate-500">{project.location} | {project.year} | {project.area}</p>
                    <button onClick={() => setSelected(project)} className="text-sm font-semibold text-primary hover:underline">
                      Lihat Detail
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {selected ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4" onClick={() => setSelected(null)}>
            <div className="w-full max-w-xl rounded-xl bg-white p-6 shadow-xl dark:bg-slate-900" onClick={(event) => event.stopPropagation()}>
              <h3 className="text-2xl font-bold">{selected.name}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">Lokasi: {selected.location}</p>
              <p className="text-slate-600 dark:text-slate-300">Tahun: {selected.year}</p>
              <p className="text-slate-600 dark:text-slate-300">Luas Kawasan: {selected.area}</p>
              <p className="text-slate-600 dark:text-slate-300">Status: {selected.status}</p>
              <Button className="mt-6 hover:scale-100" onClick={() => setSelected(null)}>
                Tutup
              </Button>
            </div>
          </div>
        ) : null}
      </main>
    </>
  );
}

import { SquareArrowOutUpRight } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import useSEO from "@/hooks/useSEO";

const team = [
  { name: "Budi Santoso", role: "Direktur Utama", photo: "https://picsum.photos/seed/team1/500/500" },
  { name: "Rina Maharani", role: "Direktur Operasional", photo: "https://picsum.photos/seed/team2/500/500" },
  { name: "Agus Kurniawan", role: "Manajer Proyek", photo: "https://picsum.photos/seed/team3/500/500" },
  { name: "Dewi Lestari", role: "Lead Engineer", photo: "https://picsum.photos/seed/team4/500/500" },
  { name: "Fajar Wibowo", role: "Koordinator Lapangan", photo: "https://picsum.photos/seed/team5/500/500" },
  { name: "Nadia Pramesti", role: "Data & IoT Specialist", photo: "https://picsum.photos/seed/team6/500/500" },
];

export default function TeamPage() {
  return (
    <>
      {useSEO({ title: "Tim", description: "Temui tim inti PT. Delta Polder Indonesia yang menangani proyek polder di seluruh Indonesia." })}
      <main>
        <section className="bg-slate-900 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold lg:text-6xl">Tim Profesional Kami</h1>
            <p className="mt-4 max-w-2xl text-slate-200">Sinergi ahli teknik, operasional, dan data untuk hasil proyek yang presisi.</p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Struktur Tim" subtitle="Anggota tim inti yang memimpin perencanaan hingga implementasi." />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <article key={member.name} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                  <img src={member.photo} alt={member.name} className="h-64 w-full object-cover" />
                  <div className="flex items-center justify-between p-5">
                    <div>
                      <h3 className="font-semibold">{member.name}</h3>
                      <p className="text-sm text-slate-500">{member.role}</p>
                    </div>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-primary">
                      <SquareArrowOutUpRight size={18} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

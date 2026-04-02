import { motion } from "framer-motion";
import { ArrowRight, Droplets, Gauge, Waves, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import SectionTitle from "@/components/common/SectionTitle";
import StatsCounter from "@/components/common/StatsCounter";
import NewsletterForm from "@/components/forms/NewsletterForm";
import useSEO from "@/hooks/useSEO";
import { STATS } from "@/utils/constants";

const services = [
  { title: "Sistem Drainase", icon: Droplets, description: "Perencanaan drainase kawasan untuk memastikan aliran air stabil saat puncak hujan." },
  { title: "Pompa & Kontrol Air", icon: Gauge, description: "Instalasi pompa utama dan sistem otomasi debit air berbasis data operasional." },
  { title: "Konstruksi Tanggul", icon: Wrench, description: "Penguatan tanggul kritis dengan desain tahan erosi dan inspeksi berkala." },
];

const projects = [
  { image: "https://picsum.photos/seed/polder1/800/500", title: "Revitalisasi Polder Timur", description: "Semarang, 2023 - Integrasi pompa dan drainase area pelabuhan." },
  { image: "https://picsum.photos/seed/polder2/800/500", title: "Sistem Tanggul Delta", description: "Gresik, 2022 - Peningkatan ketahanan tanggul sepanjang 4.2 km." },
  { image: "https://picsum.photos/seed/polder3/800/500", title: "IoT Monitoring Air", description: "Bekasi, 2024 - Dashboard real-time elevasi dan debit air." },
];

const testimonials = [
  "Tim Delta Polder sangat cepat membaca masalah genangan kami dan mengeksekusi solusi tepat.",
  "Sistem monitoring yang dibangun sangat membantu pengambilan keputusan harian di lapangan.",
  "Pendekatan teknis dan komunikasi ke stakeholder berjalan rapi dari awal sampai serah terima.",
];

export default function HomePage() {
  return (
    <>
      {useSEO({
        title: "Beranda",
        description: "PT. Delta Polder Indonesia menghadirkan solusi terpadu untuk perencanaan, konstruksi, dan operasional polder.",
      })}

      <main>
        <section className="relative isolate overflow-hidden bg-slate-900 text-white">
          <img
            src="https://picsum.photos/seed/polder-hero/1920/1080"
            alt="Area pengelolaan polder"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/50" />
          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-sm uppercase tracking-[0.18em] text-blue-200">
              PT. Delta Polder Indonesia
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }} className="mt-4 max-w-3xl text-4xl font-bold leading-tight lg:text-6xl">
              Solusi Terpadu Pengelolaan Polder
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }} className="mt-5 max-w-2xl text-lg text-slate-200">
              Dari perencanaan teknis hingga operasional harian, kami membantu kawasan pesisir dan perkotaan tetap aman dari risiko banjir.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.24 }} className="mt-8 flex flex-wrap gap-3">
              <Link to="/services">
                <Button size="lg" className="hover:scale-100">
                  Layanan Kami
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                  Hubungi Kami
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {STATS.map((item) => (
              <StatsCounter key={item.label} value={item.value} suffix={item.suffix} label={item.label} />
            ))}
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="Layanan Utama"
              subtitle="Tiga fondasi utama yang membuat pengelolaan polder berjalan efektif dari hulu ke hilir."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:scale-105 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
                >
                  <service.icon className="text-primary" />
                  <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-300">{service.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <img src="https://picsum.photos/seed/polder-team/1000/700" alt="Tim PT Delta Polder" className="rounded-xl object-cover shadow-lg" />
            <div>
              <SectionTitle
                title="Tim Rekayasa yang Turun ke Lapangan"
                subtitle="Kami menggabungkan pengalaman teknis, operasi lapangan, dan pendekatan kolaboratif dengan pemerintah maupun swasta."
              />
              <Link to="/about" className="inline-flex items-center gap-2 text-primary hover:underline">
                Tentang Kami <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Proyek Terbaru" subtitle="Cuplikan implementasi terbaru kami di berbagai wilayah pesisir dan perkotaan." />
            <div className="grid gap-6 md:grid-cols-3">
              {projects.map((project) => (
                <Card key={project.title} image={project.image} title={project.title} description={project.description} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary to-secondary py-16 text-white lg:py-20">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold lg:text-4xl">Siap Mengelola Polder Anda?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-blue-50">
              Diskusikan kebutuhan kawasan Anda bersama tim kami untuk mendapatkan strategi pengelolaan yang tepat.
            </p>
            <Link to="/contact" className="mt-8 inline-flex">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Mulai Konsultasi
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Apa Kata Klien" subtitle="Kepercayaan dibangun dari hasil nyata dan respons cepat di lapangan." />
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <blockquote key={item} className="rounded-xl border border-slate-200 bg-white p-6 text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                  "{item}"
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 py-16 dark:border-slate-800">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <SectionTitle center title="Update Insight Polder" subtitle="Dapatkan informasi studi kasus, teknologi, dan panduan pengelolaan polder terbaru." />
            <NewsletterForm />
          </div>
        </section>
      </main>
    </>
  );
}

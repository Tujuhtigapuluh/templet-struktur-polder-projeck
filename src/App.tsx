import { useEffect } from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AboutPage from "@/pages/About";
import ContactPage from "@/pages/Contact";
import HomePage from "@/pages/Home";
import ProjectsPage from "@/pages/Projects";
import ServicesPage from "@/pages/Services";
import TeamPage from "@/pages/Team";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
}

function NotFoundPage() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-4">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">404</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">Halaman tidak ditemukan</h1>
        <p className="mt-4 text-slate-600">Tautan mungkin sudah berubah atau halaman belum tersedia.</p>
        <a
          href="/"
          className="mt-6 inline-flex rounded-md bg-primary px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Kembali ke Beranda
        </a>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

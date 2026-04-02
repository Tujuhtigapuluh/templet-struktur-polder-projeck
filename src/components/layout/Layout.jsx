import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

/** @param {{children: import('react').ReactNode}} props */
export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />
      <div className="pt-20">{children}</div>
      <Footer />
    </div>
  );
}

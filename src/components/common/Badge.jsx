const variants = {
  success: "bg-emerald-100 text-emerald-800",
  warning: "bg-amber-100 text-amber-800",
  info: "bg-blue-100 text-blue-800",
};

/** @param {{label:string, variant?:'success'|'warning'|'info'}} props */
export default function Badge({ label, variant = "info" }) {
  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${variants[variant]}`}>
      {label}
    </span>
  );
}
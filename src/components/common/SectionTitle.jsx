/** @param {{title:string, subtitle?:string, center?:boolean}} props */
export default function SectionTitle({ title, subtitle, center = false }) {
  return (
    <div className={`${center ? "text-center" : "text-left"} mb-10`}>
      <h2 className="text-3xl font-bold text-slate-900 lg:text-4xl">{title}</h2>
      <div className={`mt-3 h-1 w-20 bg-accent ${center ? "mx-auto" : ""}`} />
      {subtitle ? <p className="mt-4 text-lg text-slate-600">{subtitle}</p> : null}
    </div>
  );
}
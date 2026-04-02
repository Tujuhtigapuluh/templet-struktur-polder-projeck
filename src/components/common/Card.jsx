/** @param {{image:string,title:string,description:string}} props */
export default function Card({ image, title, description }) {
  return (
    <article className="overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="space-y-2 p-5">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </article>
  );
}
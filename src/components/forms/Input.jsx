/** @param {{label:string,name:string,value:string,onChange:(event: any)=>void,onBlur?:(event:any)=>void,placeholder?:string,type?:string,error?:string,icon?:import('react').ReactNode,required?:boolean}} props */
export default function Input({
  label,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  type = "text",
  error,
  icon,
  required = false,
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
        {label} {required ? <span className="text-red-500">*</span> : null}
      </span>
      <span className="relative block">
        {icon ? <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">{icon}</span> : null}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={`w-full rounded-md border bg-white px-3 py-2.5 text-slate-900 outline-none transition focus:ring-2 dark:bg-slate-900 dark:text-slate-100 ${icon ? "pl-10" : ""} ${error ? "border-red-400 ring-red-200" : "border-slate-300 focus:border-primary focus:ring-blue-100 dark:border-slate-700"}`}
        />
      </span>
      {error ? <span className="mt-1 block text-xs text-red-500">{error}</span> : null}
    </label>
  );
}

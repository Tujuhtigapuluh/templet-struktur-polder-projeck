/** @param {{label:string,name:string,value:string,onChange:(event:any)=>void,placeholder?:string,error?:string,maxLength?:number,rows?:number}} props */
export default function Textarea({
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
  maxLength = 500,
  rows = 5,
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">{label}</span>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        maxLength={maxLength}
        className={`w-full rounded-md border bg-white px-3 py-2.5 text-slate-900 outline-none transition focus:ring-2 dark:bg-slate-900 dark:text-slate-100 ${error ? "border-red-400 ring-red-200" : "border-slate-300 focus:border-primary focus:ring-blue-100 dark:border-slate-700"}`}
      />
      <div className="mt-1 flex justify-between text-xs">
        <span className="text-red-500">{error || ""}</span>
        <span className="text-slate-500">{value.length}/{maxLength}</span>
      </div>
    </label>
  );
}

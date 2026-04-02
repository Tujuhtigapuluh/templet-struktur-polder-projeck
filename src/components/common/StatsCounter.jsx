import { useEffect, useState } from "react";

/** @param {{value:number,label:string,suffix?:string}} props */
export default function StatsCounter({ value, label, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const stepTime = Math.max(Math.floor(duration / value), 10);
    const timer = setInterval(() => {
      start += Math.ceil(value / 40);
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-center">
      <p className="text-4xl font-bold text-primary lg:text-5xl">
        {new Intl.NumberFormat("id-ID").format(count)}
        {suffix}
      </p>
      <p className="mt-2 text-slate-600">{label}</p>
    </div>
  );
}
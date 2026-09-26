export function DashboardCard({ title, value, detail }: { title: string; value: string; detail: string }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{title}</p>
      <div className="mt-3 text-3xl font-black text-white">{value}</div>
      <p className="mt-2 text-sm text-slate-300">{detail}</p>
    </div>
  );
}

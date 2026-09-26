export function MissionCard({ mission }: { mission: any }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-1 text-xs font-semibold text-blue-200">{mission.type}</span>
        <span className="text-xs uppercase tracking-[0.2em] text-slate-400">{mission.duration}</span>
      </div>
      <h3 className="mt-4 text-xl font-bold text-white">{mission.title}</h3>
      <div className="mt-4 h-2 rounded-full bg-slate-800">
        <div className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" style={{ width: `${mission.progress}%` }} />
      </div>
      <p className="mt-3 text-sm text-slate-300">Progress: {mission.progress}%</p>
    </div>
  );
}

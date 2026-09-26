export function SkillHeatmap({ skills }: { skills: any[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {skills.map((skill) => (
        <div key={skill.name} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
          <div className="mb-3 flex items-center justify-between gap-2">
            <span className="text-sm font-medium text-slate-200">{skill.name}</span>
            <span className="text-xs text-slate-400">{skill.level}%</span>
          </div>
          <div className="h-2.5 w-full rounded-full bg-slate-800">
            <div className={`h-2.5 rounded-full ${skill.color}`} style={{ width: `${skill.level}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

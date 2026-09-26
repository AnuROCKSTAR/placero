export function CompanyCard({ company }: { company: any }) {
  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 transition hover:border-blue-500/40">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">{company.industry}</p>
          <h3 className="mt-2 text-2xl font-bold text-white">{company.name}</h3>
        </div>
        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">Ready</span>
      </div>

      <p className="mt-4 text-sm text-slate-300">{company.description}</p>

      <div className="mt-5 space-y-3">
        <div>
          <p className="mb-1 text-xs uppercase tracking-[0.2em] text-slate-400">Roles</p>
          <div className="flex flex-wrap gap-2">
            {company.roles.map((role: string) => (
              <span key={role} className="rounded-full border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs text-slate-200">{role}</span>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-1 text-xs uppercase tracking-[0.2em] text-slate-400">Key skills</p>
          <div className="flex flex-wrap gap-2">
            {company.skills.map((skill: string) => (
              <span key={skill} className="rounded-full border border-blue-500/40 bg-blue-500/10 px-2.5 py-1 text-xs text-blue-100">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

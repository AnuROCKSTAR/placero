import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

const roadmap = [
  { phase: 'Days 1–30', focus: 'Foundational concepts and daily consistency', tasks: ['Complete 3 concept modules', 'Practice 1 mock interview', 'Review one mistake journal entry'] },
  { phase: 'Days 31–60', focus: 'Company-specific readiness', tasks: ['Solve role-based questions', 'Prepare project proof', 'Update resume bullets'] },
  { phase: 'Days 61–90', focus: 'Interview optimization and proof, not just learning', tasks: ['Refine weak areas', 'Record final communication practice', 'Present proof portfolio'] }
];

export default function PlanPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">30 / 60 / 90 Day plan</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Prepare specifically for your target company and role.</h1>
        </div>

        <div className="space-y-6">
          {roadmap.map((phase) => (
            <div key={phase.phase} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">{phase.phase}</h2>
                <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-200">AI-generated plan</span>
              </div>
              <p className="text-lg text-slate-300">Focus: {phase.focus}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {phase.tasks.map((task) => (
                  <li key={task} className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-400" /> {task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

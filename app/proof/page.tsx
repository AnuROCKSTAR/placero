import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

const proofs = [
  { title: 'Heat Exchanger Optimization', skill: 'Aspen Plus', evidence: ['Simulation', 'Sensitivity analysis', 'Technical report', 'GitHub repo'] },
  { title: 'Smart Energy Dashboard', skill: 'Python + Data Analysis', evidence: ['Dashboard', 'Charts', 'Insights', 'Portfolio case study'] },
  { title: 'Embedded Safety Monitor', skill: 'IoT + Sensors', evidence: ['Prototype', 'BOM', 'Testing log', 'Demo video'] }
];

export default function ProofPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Proof lab</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Build proof, not only claims.</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {proofs.map((project) => (
            <div key={project.title} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.2em] text-blue-300">{project.skill}</p>
                <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-300">Verified</span>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-white">{project.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {project.evidence.map((item) => (
                  <li key={item} className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-400" /> {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
          <h2 className="text-2xl font-bold text-white">Evidence score</h2>
          <div className="mt-5 space-y-4 text-sm text-slate-300">
            <div>
              <div className="mb-1 flex justify-between"><span>Technical depth</span><span>86%</span></div>
              <div className="h-2 rounded-full bg-slate-800"><div className="h-2 w-[86%] rounded-full bg-blue-500" /></div>
            </div>
            <div>
              <div className="mb-1 flex justify-between"><span>Documentation</span><span>74%</span></div>
              <div className="h-2 rounded-full bg-slate-800"><div className="h-2 w-[74%] rounded-full bg-cyan-400" /></div>
            </div>
            <div>
              <div className="mb-1 flex justify-between"><span>Quantified impact</span><span>48%</span></div>
              <div className="h-2 rounded-full bg-slate-800"><div className="h-2 w-[48%] rounded-full bg-amber-400" /></div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

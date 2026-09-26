import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

const bullets = [
  'Led the optimization of a process design project by defining the problem, evaluating constraints, and validating results using engineering data.',
  'Built a real-time monitoring dashboard to track system performance and highlight operational bottlenecks.',
  'Improved process decision-making by presenting findings, using cost-aware analysis, and validating impact through measurable metrics.'
];

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Resume bullet lab</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Turn plain project text into stronger evidence.</h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
            <h2 className="text-xl font-bold text-white">Original statement</h2>
            <textarea className="mt-4 h-48 w-full rounded-2xl border border-slate-700 bg-slate-950 p-4 text-white" defaultValue="Worked on an energy optimization project for a process setup." />
            <button className="mt-5 rounded-full bg-blue-600 px-5 py-2.5 font-semibold text-white">Improve bullet</button>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
            <h2 className="text-xl font-bold text-white">AI improved version</h2>
            <div className="mt-4 rounded-2xl border border-blue-500/30 bg-blue-500/10 p-4 text-sm text-blue-100">
              {bullets[0]}
            </div>
            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <p>• Adds context and outcome orientation</p>
              <p>• Uses impact-driven action verbs</p>
              <p>• Clarifies responsibility and business relevance</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

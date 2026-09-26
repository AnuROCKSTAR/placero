import Link from 'next/link';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

const steps = [
  { title: 'Profile', detail: 'Tell us about your branch, goals, and target timeline.' },
  { title: 'Skills', detail: 'Capture your current technical and communication strengths.' },
  { title: 'Companies', detail: 'Choose the companies and roles you want to target.' },
  { title: 'Plan', detail: 'Generate your first preparation roadmap and daily mission.' },
  { title: 'Start', detail: 'Your placement profile is ready.' }
];

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Onboarding</p>
          <h1 className="mt-3 text-4xl font-black text-white">Your Placement Profile is Ready</h1>
        </div>

        <div className="mb-10 grid gap-4 md:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                {index + 1}
              </div>
              <p className="font-semibold text-white">{step.title}</p>
              <p className="mt-2 text-sm text-slate-400">{step.detail}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
            <h2 className="text-2xl font-bold text-white">Student details</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <input className="rounded-2xl border border-slate-700 bg-slate-950 p-3 text-white" placeholder="Name" />
              <input className="rounded-2xl border border-slate-700 bg-slate-950 p-3 text-white" placeholder="College" />
              <input className="rounded-2xl border border-slate-700 bg-slate-950 p-3 text-white" placeholder="Degree" />
              <input className="rounded-2xl border border-slate-700 bg-slate-950 p-3 text-white" placeholder="Branch" />
              <input className="rounded-2xl border border-slate-700 bg-slate-950 p-3 text-white" placeholder="Current CGPA" />
              <input className="rounded-2xl border border-slate-700 bg-slate-950 p-3 text-white" placeholder="Target company" />
              <input className="rounded-2xl border border-slate-700 bg-slate-950 p-3 text-white md:col-span-2" placeholder="Programming languages" />
              <input className="rounded-2xl border border-slate-700 bg-slate-950 p-3 text-white md:col-span-2" placeholder="Projects and internships" />
            </div>
            <div className="mt-6 flex justify-end">
              <Link href="/dashboard" className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500">
                Continue to dashboard
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
            <h3 className="text-xl font-bold text-white">AI readiness report</h3>
            <div className="mt-5 space-y-4 text-sm text-slate-300">
              <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-blue-200">Readiness snapshot</p>
                <div className="mt-2 text-3xl font-black text-white">74%</div>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
                <p className="font-semibold text-white">Your strongest area</p>
                <p className="mt-2">Problem solving and analytical reasoning.</p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
                <p className="font-semibold text-white">Next best move</p>
                <p className="mt-2">Practice one engineering concept and record one mock interview answer this week.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

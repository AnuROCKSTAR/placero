import Link from 'next/link';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { dashboardStats } from '../lib/data';
import { calculateReadiness } from '../lib/scoring';

export default function DashboardPage() {
  const readiness = calculateReadiness({
    assessment: 74,
    missions: 81,
    evidence: 67,
    communication: 72,
    companyFit: 80
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Dashboard</p>
            <h1 className="mt-2 text-3xl font-bold text-white">Good morning, Alex 👋</h1>
          </div>
          <Link href="/companies" className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-500">
            View target company
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {dashboardStats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
              <div className="mt-3 flex items-end justify-between">
                <span className="text-3xl font-black text-white">{stat.value}</span>
                <span className="text-sm text-emerald-300">{stat.delta}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Placement readiness</h2>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">+6% this week</span>
            </div>
            <div className="mt-5 flex items-center gap-5">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-[12px] border-blue-500/80 border-t-cyan-300 bg-slate-950 text-2xl font-black text-white">
                {readiness}%
              </div>
              <div className="flex-1 space-y-3 text-sm text-slate-300">
                <div>
                  <div className="mb-1 flex justify-between"><span>Technical readiness</span><span>82%</span></div>
                  <div className="h-2 rounded-full bg-slate-800"><div className="h-2 w-[82%] rounded-full bg-blue-500" /></div>
                </div>
                <div>
                  <div className="mb-1 flex justify-between"><span>Communication</span><span>68%</span></div>
                  <div className="h-2 rounded-full bg-slate-800"><div className="h-2 w-[68%] rounded-full bg-cyan-400" /></div>
                </div>
                <div>
                  <div className="mb-1 flex justify-between"><span>Project proof</span><span>74%</span></div>
                  <div className="h-2 rounded-full bg-slate-800"><div className="h-2 w-[74%] rounded-full bg-emerald-500" /></div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
            <h2 className="text-xl font-bold text-white">Today&apos;s mission</h2>
            <ul className="mt-5 space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-400" /> Solve 5 material-balance questions — 15 min</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400" /> Review industrial process safety case — 8 min</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" /> Record one interview answer — 5 min</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

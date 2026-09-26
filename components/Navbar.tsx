import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { demoStudent, companySeed, missionSeed, skillSeed } from '../lib/data';
import { calculateReadiness } from '../lib/scoring';
import { CompanyCard } from '../components/CompanyCard';
import { MissionCard } from '../components/MissionCard';
import { SkillHeatmap } from '../components/SkillHeatmap';

export default function HomePage() {
  const readiness = calculateReadiness({
    assessment: 72,
    missions: 84,
    evidence: 61,
    communication: 68,
    companyFit: 77
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        <section className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
                Learn • Practice • Prove • Improve
              </div>

              <h1 className="max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Don&apos;t just prepare for placements.
                <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-200 bg-clip-text text-transparent">
                  Prove you&apos;re ready.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg text-slate-300">
                Placement OS turns placement preparation into a personalized system of practice, evidence, feedback, and progress.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/auth/signup" className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-500">
                  Build My Placement Plan
                </Link>
                <Link href="/companies" className="rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800">
                  Explore Companies
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-300">
                <div>
                  <div className="text-2xl font-bold text-white">9.4k+</div>
                  <div>students improved</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">210+</div>
                  <div>questions & modules</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">18+</div>
                  <div>branch tracks</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-blue-500/20 via-cyan-500/15 to-blue-500/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[30px] border border-slate-700 bg-slate-900/80 p-5 shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-slate-700 bg-slate-800">
                      <Image src="/logo.svg" alt="Placero logo" fill sizes="48px" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Good morning</p>
                      <h2 className="mt-1 text-2xl font-bold">{demoStudent.name}</h2>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                    7-day streak 🔥
                  </span>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-700 bg-slate-800/90 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Placement Readiness</p>
                    <div className="mt-3 flex items-end gap-2">
                      <span className="text-4xl font-black text-white">{readiness}</span>
                      <span className="pb-2 text-sm text-slate-400">%</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-700 bg-slate-800/90 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Mission today</p>
                    <div className="mt-3 text-3xl font-black text-white">3 tasks</div>
                    <p className="mt-2 text-sm text-slate-300">42 minutes</p>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-800/90 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">Current target</span>
                    <span className="text-sm font-semibold text-blue-300">Reliance Industries</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-sm text-slate-300">
                    <span>Strongest skill</span>
                    <span className="font-semibold text-emerald-300">Process Calculations</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-sm text-slate-300">
                    <span>Weakest skill</span>
                    <span className="font-semibold text-amber-300">Industrial Safety</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {missionSeed.slice(0, 3).map((mission) => (
              <MissionCard key={mission.title} mission={mission} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Company war room</p>
              <h3 className="mt-2 text-3xl font-bold text-white">Target companies</h3>
            </div>
            <Link href="/companies" className="text-sm font-semibold text-blue-300 hover:text-blue-200">
              View all →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {companySeed.slice(0, 6).map((company) => (
              <CompanyCard key={company.name} company={company} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Skill intelligence</p>
            <h3 className="mt-2 text-3xl font-bold text-white">Readiness heatmap</h3>
          </div>
          <SkillHeatmap skills={skillSeed.slice(0, 8)} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

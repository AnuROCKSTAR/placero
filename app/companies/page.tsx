import Link from 'next/link';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { companySeed, skillSeed } from '../lib/data';
import { CompanyCard } from '../components/CompanyCard';
import { SkillHeatmap } from '../components/SkillHeatmap';

export default function CompaniesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Preparation</p>
            <h1 className="mt-2 text-3xl font-bold text-white">Company War Room</h1>
          </div>
          <Link href="/dashboard" className="rounded-full border border-slate-700 bg-slate-900 px-5 py-2 text-sm font-semibold text-slate-100 hover:border-slate-500">
            Go to dashboard
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {companySeed.map((company) => (
            <CompanyCard key={company.name} company={company} />
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
          <h2 className="text-2xl font-bold text-white">Skill radar</h2>
          <div className="mt-6">
            <SkillHeatmap skills={skillSeed.slice(0, 10)} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

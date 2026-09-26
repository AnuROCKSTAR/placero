import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { skillSeed, missionSeed } from '../lib/data';
import { SkillHeatmap } from '../components/SkillHeatmap';
import { MissionCard } from '../components/MissionCard';

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Skill lab</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Skill Heatmap</h1>
        </div>

        <SkillHeatmap skills={skillSeed} />

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white">Recommended daily missions</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {missionSeed.map((mission) => (
              <MissionCard key={mission.title} mission={mission} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

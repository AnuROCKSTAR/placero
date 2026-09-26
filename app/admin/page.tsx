import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

const adminActions = [
  'Add companies',
  'Edit verification status',
  'Create new skills',
  'Review reported content',
  'Manage badges and analytics',
  'Review student performance'
];

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Admin dashboard</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Platform operations</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {adminActions.map((action) => (
            <div key={action} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 text-sm text-slate-200">
              {action}
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
            <h2 className="text-xl font-bold text-white">System analytics</h2>
            <div className="mt-5 space-y-4 text-sm text-slate-300">
              <div className="flex justify-between"><span>Active students</span><span>9.4k</span></div>
              <div className="flex justify-between"><span>Tailored company plans</span><span>3.2k</span></div>
              <div className="flex justify-between"><span>AI responses today</span><span>8.7k</span></div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
            <h2 className="text-xl font-bold text-white">Verification queue</h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li>Reliance Industries — verified</li>
              <li>Microsoft — verified</li>
              <li>Adobe — pending update</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

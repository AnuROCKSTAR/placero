import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

const questions = [
  'Tell me about yourself.',
  'Explain your final-year project.',
  'Why this company?',
  'Why should we hire you?',
  'Tell me about a failure you learned from.'
];

export default function MockInterviewPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Voice mock interview</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Practice with structure and feedback.</h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
            <h2 className="text-xl font-bold text-white">Question bank</h2>
            <ul className="mt-5 space-y-3">
              {questions.map((question, index) => (
                <li key={question} className="flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-950 p-3 text-sm text-slate-200">
                  <span>{index + 1}. {question}</span>
                  <button className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-200">Practice</button>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Recording studio</h2>
              <button className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">Record answer</button>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <p className="text-sm text-slate-300">Question: Why should we hire you?</p>
              <div className="mt-5 h-20 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-700" />
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Duration</p>
                <p className="mt-2 text-2xl font-black text-white">1:42</p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Filler words</p>
                <p className="mt-2 text-2xl font-black text-white">8</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { AIChatBox } from '../components/AIChatBox';

export default function AIPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">AI career coach</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Ask Placement AI</h1>
        </div>
        <AIChatBox />
      </main>
      <Footer />
    </div>
  );
}

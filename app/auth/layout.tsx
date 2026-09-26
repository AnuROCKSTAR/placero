import Link from 'next/link';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">{children}</div>
      <Footer />
    </div>
  );
}

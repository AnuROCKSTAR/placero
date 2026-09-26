import Link from 'next/link';

export default function SignInPage() {
  return (
    <div className="mx-auto max-w-md rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl">
      <div className="mb-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Welcome back</p>
        <h1 className="mt-3 text-3xl font-bold text-white">Sign in to Placero</h1>
      </div>

      <form className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">Email</label>
          <input type="email" className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none ring-0 transition focus:border-blue-500" placeholder="you@example.com" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">Password</label>
          <input type="password" className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none ring-0 transition focus:border-blue-500" placeholder="••••••••" />
        </div>
        <button type="submit" className="w-full rounded-2xl bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-500">
          Sign in
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-400">
        New here? <Link href="/auth/signup" className="font-semibold text-blue-300">Create account</Link>
      </p>
    </div>
  );
}

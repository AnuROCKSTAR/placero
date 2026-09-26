import Link from 'next/link';

export default function SignUpPage() {
  return (
    <div className="mx-auto max-w-lg rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl">
      <div className="mb-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Start your journey</p>
        <h1 className="mt-3 text-3xl font-bold text-white">Create your profile</h1>
      </div>

      <form className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">Full name</label>
            <input type="text" className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white" placeholder="Alex Student" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">College</label>
            <input type="text" className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white" placeholder="NIT Jaipur" />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">Email</label>
          <input type="email" className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white" placeholder="you@example.com" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">Branch</label>
            <input type="text" className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white" placeholder="Chemical" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">Target role</label>
            <input type="text" className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white" placeholder="Process Engineer" />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">Password</label>
          <input type="password" className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white" placeholder="Min 8 characters" />
        </div>

        <button type="submit" className="w-full rounded-2xl bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-500">
          Create account
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-400">
        Already have an account? <Link href="/auth/signin" className="font-semibold text-blue-300">Sign in</Link>
      </p>
    </div>
  );
}

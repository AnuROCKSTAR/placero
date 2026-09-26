import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
  const links = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Companies', href: '/companies' },
    { label: 'Skills', href: '/skills' },
    { label: 'AI Coach', href: '/ai' },
    { label: 'Sign in', href: '/auth/signin' }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
            <Image src="/logo.svg" alt="Placero logo" fill sizes="40px" />
          </div>
          <div>
            <div className="text-lg font-black tracking-[0.12em] text-white">PLACERO</div>
          </div>
        </Link>

        <div className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>

        <Link href="/auth/signup" className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500">
          Start free
        </Link>
      </nav>
    </header>
  );
}

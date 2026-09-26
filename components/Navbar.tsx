import Link from 'next/link';

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
          <Logo />
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

function Logo() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-glow">
      <svg viewBox="0 0 64 64" className="h-6 w-6 text-white" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Placero logo">
        <path d="M18 14h20c11 0 18 7 18 17s-7 17-18 17H18V14Zm9 9v16h10c7 0 10-4 10-8s-3-8-10-8H27Z" fill="currentColor"/>
        <path d="M34 14h11l-6 9H27l7-9Z" fill="currentColor" opacity="0.8"/>
      </svg>
    </div>
  );
}

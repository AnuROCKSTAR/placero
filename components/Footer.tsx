export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>© 2026 Placero — Learn. Practice. Prove. Improve.</div>
        <div className="flex gap-6">
          <span>Privacy</span>
          <span>Security</span>
          <span>Demo mode</span>
        </div>
      </div>
    </footer>
  );
}

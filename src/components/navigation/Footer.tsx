export function Footer() {
  return (
    <footer className="border-t border-border bg-background/90 px-6 py-8 text-sm text-muted">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col gap-3">
          <div className="inline-flex items-center gap-3">
            <img src="/src/logo.png" alt="Caro logo" className="h-10 w-10 rounded-2xl border border-white/10 bg-surface" />
            <div>
              <p className="font-semibold text-white">Caro</p>
              <p className="text-sm text-muted">Game tracking for modern players.</p>
            </div>
          </div>
          <p className="text-sm text-muted">© 2026 Caro. All rights reserved.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Navigation</p>
            <a href="#features" className="block hover:text-white">Features</a>
            <a href="#showcase" className="block hover:text-white">Showcase</a>
            <a href="#faq" className="block hover:text-white">FAQ</a>
          </div>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Resources</p>
            <a href="#" className="block hover:text-white">GitHub</a>
            <a href="#" className="block hover:text-white">Privacy</a>
            <a href="#" className="block hover:text-white">Terms</a>
          </div>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Contact</p>
            <a href="#" className="block hover:text-white">Support</a>
            <a href="#" className="block hover:text-white">Feedback</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

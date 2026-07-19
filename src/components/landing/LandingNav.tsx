import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
];

export function LandingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-border/0 bg-background/80 backdrop-blur-xl transition ${
        scrolled ? 'border-border/50 bg-background/95' : ''
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-3 text-white">
          <img src="/src/logo.png" alt="Caro logo" className="h-9 w-9 rounded-2xl border border-white/10 bg-surface" />
          <span className="font-semibold tracking-wide">Caro</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-muted transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="rounded-2xl border border-border bg-surface px-4 py-2 text-sm text-white transition hover:border-accent hover:text-accent"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="rounded-2xl bg-accent px-4 py-2 text-sm font-semibold text-background transition hover:bg-accentDark"
          >
            Register
          </Link>
          <Link
            to="/app/dashboard"
            className="hidden rounded-2xl border border-border bg-background/70 px-4 py-2 text-sm text-muted transition hover:border-accent hover:text-accent md:inline-flex"
          >
            Random Game
          </Link>
        </div>
      </div>
    </header>
  );
}

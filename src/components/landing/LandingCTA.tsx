import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function LandingCTA() {
  return (
    <section className="rounded-[2rem] border border-border bg-surface p-10 shadow-card">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Ready to get started</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Bring your game library into one premium experience.</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
            Create your Caro account and begin tracking games, progress, and friends with an interface made for modern players.
          </p>
        </div>
        <div className="flex items-center justify-start gap-4 sm:justify-end">
          <Link
            to="/register"
            className="inline-flex items-center justify-center rounded-2xl bg-accent px-6 py-4 text-sm font-semibold text-background transition hover:bg-accentDark"
          >
            Start tracking
            <ArrowRight className="ml-3 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

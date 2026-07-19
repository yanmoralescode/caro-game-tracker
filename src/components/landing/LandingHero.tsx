import { ArrowRight, LayoutDashboard, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const features = [
  'Organize your collection',
  'Track play progress',
  'Discover games fast',
  'Showcase your profile',
];

export function LandingHero() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-border bg-surface shadow-card">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-accent/30 bg-white/5 px-4 py-2 text-sm text-accent backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              Designed for modern game collections
            </div>
            <div>
              <h1 className="text-5xl font-semibold leading-tight text-white sm:text-6xl">
                Keep your games, progress, and social play all in one hub.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                Caro helps you organize your backlog, track every session, and discover new titles with friends.
                A premium game tracker that feels polished, fast, and easy to use.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/register"
                className="inline-flex items-center justify-center rounded-2xl bg-accent px-6 py-3 text-sm font-semibold text-background transition hover:bg-accentDark"
              >
                Create account
              </Link>
              <Link
                to="/app/dashboard"
                className="inline-flex items-center justify-center rounded-2xl border border-border bg-background/70 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent hover:text-accent"
              >
                Explore dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-3xl border border-border bg-background/50 px-4 py-4 text-sm text-white shadow-soft transition hover:-translate-y-1 hover:border-accent"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-[2rem] border border-border bg-black/70 p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between rounded-3xl bg-surface p-5">
              <div>
                <p className="text-sm text-muted">Dashboard preview</p>
                <p className="mt-2 text-xl font-semibold text-white">Keep your collection in focus.</p>
              </div>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-background">
                <LayoutDashboard className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-6 grid gap-4 rounded-[1.75rem] border border-border bg-background/70 p-5">
              <div className="grid gap-4 rounded-3xl bg-surface p-5">
                <div className="flex items-center justify-between text-white">
                  <span className="text-sm text-muted">Continue playing</span>
                  <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">3 live</span>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-3xl bg-background/80 p-4">
                    <h3 className="text-base font-semibold">Horizon Rift</h3>
                    <p className="mt-1 text-sm text-muted">RPG · PS5</p>
                  </div>
                  <div className="rounded-3xl bg-background/80 p-4">
                    <h3 className="text-base font-semibold">Celestial Drift</h3>
                    <p className="mt-1 text-sm text-muted">Adventure · PC</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm text-muted">
                <div className="rounded-3xl bg-background/80 p-4">
                  <p className="text-xs uppercase tracking-[0.2em]">Games tracked</p>
                  <p className="mt-3 text-2xl font-semibold text-white">128</p>
                </div>
                <div className="rounded-3xl bg-background/80 p-4">
                  <p className="text-xs uppercase tracking-[0.2em]">Completion</p>
                  <p className="mt-3 text-2xl font-semibold text-white">74%</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

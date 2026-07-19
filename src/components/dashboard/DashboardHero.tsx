import { Bell, CalendarDays, Sparkles } from 'lucide-react';

const userName = 'Aria';
const greeting = 'Ready to continue your adventure?';
const today = new Date().toLocaleDateString('en-US', {
  weekday: 'long',
  month: 'short',
  day: 'numeric',
});

export function DashboardHero() {
  return (
    <section className="grid gap-6 rounded-[2rem] border border-border bg-surface p-8 shadow-soft sm:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-accent">
          <Sparkles className="h-4 w-4" />
          <span>Welcome back, {userName}</span>
        </div>
        <h1 className="text-4xl font-semibold text-white">{greeting}</h1>
        <p className="max-w-2xl text-muted">
          Your gaming home is ready. Continue titles in progress, discover recommendations, and keep the pace going.
        </p>
      </div>
      <div className="grid gap-4 rounded-[1.75rem] border border-border bg-background/60 p-6">
        <div className="flex items-center justify-between text-sm text-muted">
          <span>Today</span>
          <span>{today}</span>
        </div>
        <div className="grid gap-4 rounded-3xl bg-surface p-5">
          <div className="flex items-center justify-between gap-3 text-white">
            <div className="flex items-center gap-3">
              <Bell className="h-5 w-5 text-accent" />
              <span>New achievement unlocked</span>
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-accent">Live</span>
          </div>
          <div className="flex items-center justify-between rounded-3xl bg-background/70 p-4 text-sm text-muted">
            <span>Active streak</span>
            <span className="font-semibold text-white">5 days</span>
          </div>
          <div className="flex items-center gap-3 rounded-3xl bg-background/70 p-4 text-sm text-muted">
            <CalendarDays className="h-5 w-5 text-accent" />
            <span>Play session scheduled for tonight</span>
          </div>
        </div>
      </div>
    </section>
  );
}

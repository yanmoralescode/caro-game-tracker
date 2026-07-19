import { CheckCircle2, Circle, Clock3 } from 'lucide-react';

const differences = [
  {
    label: 'Centralized library',
    manual: 'Scattered notes and spreadsheets',
    caro: 'One dashboard for every title and status',
  },
  {
    label: 'Progress insights',
    manual: 'No quick view of completion or hours',
    caro: 'Instant stats for completion, sessions, and backlog',
  },
  {
    label: 'Discovery',
    manual: 'Search outside the app and cross-reference repeatedly',
    caro: 'Built-in search with fast game discovery',
  },
  {
    label: 'Social sharing',
    manual: 'Hard to share your collection with friends',
    caro: 'Public profiles that highlight your gaming identity',
  },
];

export function LandingComparison() {
  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-8 px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Why choose Caro</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">A better way to track games without the guesswork.</h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            Caro removes the friction of manual tracking by combining discovery, progress, and social features into one polished experience.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-4">
            {differences.map((item) => (
              <article key={item.label} className="rounded-[1.75rem] border border-border bg-surface p-6 shadow-soft">
                <div className="flex items-center gap-3 text-accent">
                  <CheckCircle2 className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-white">{item.label}</h3>
                </div>
                <div className="mt-4 grid gap-4 rounded-3xl bg-background/60 p-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-muted">Manual tracking</p>
                    <p className="mt-2 text-sm leading-6 text-muted">{item.manual}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-muted">Caro</p>
                    <p className="mt-2 text-sm leading-6 text-white">{item.caro}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="rounded-[2rem] border border-border bg-gradient-to-br from-background/80 via-background/70 to-surface p-8 text-white shadow-card">
            <div className="flex items-center justify-between gap-3 rounded-3xl bg-surface/80 p-5">
              <div>
                <p className="text-sm text-muted">Caro advantage</p>
                <h3 className="mt-2 text-2xl font-semibold">Track more with less effort</h3>
              </div>
              <Clock3 className="h-6 w-6 text-accent" />
            </div>
            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4 rounded-3xl bg-background/70 p-5">
                <div className="mt-1 rounded-2xl bg-accent/10 p-3 text-accent">
                  <Circle className="h-4 w-4" />
                </div>
                <p className="text-sm leading-6 text-muted">Quickly capture playing status, favorites, and platform details in one flow.</p>
              </div>
              <div className="flex items-start gap-4 rounded-3xl bg-background/70 p-5">
                <div className="mt-1 rounded-2xl bg-accent/10 p-3 text-accent">
                  <Circle className="h-4 w-4" />
                </div>
                <p className="text-sm leading-6 text-muted">Always keep your profile visible, organized, and ready to share with friends.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

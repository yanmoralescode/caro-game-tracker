import { Activity, BookOpen, Globe2, Layers, Search, Users } from 'lucide-react';

const features = [
  {
    title: 'Track Games',
    description: 'Capture every title in your library with status, time, and score.',
    icon: Activity,
  },
  {
    title: 'Manage Library',
    description: 'Organize collections by platform, genre, and play state.',
    icon: Layers,
  },
  {
    title: 'Search Thousands',
    description: 'Discover existing games from a growing curated catalog.',
    icon: Search,
  },
  {
    title: 'Progress Monitoring',
    description: 'See completion, hours, and play streaks at a glance.',
    icon: BookOpen,
  },
  {
    title: 'Public Profiles',
    description: 'Share your collection and gaming identity with others.',
    icon: Users,
  },
  {
    title: 'Responsive Experience',
    description: 'Use Caro fluidly on desktop, tablet, and mobile devices.',
    icon: Globe2,
  },
];

export function LandingFeatures() {
  return (
    <section id="features" className="space-y-10 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">Core experience</p>
        <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Everything your game collection needs in one space.</h2>
        <p className="mt-5 text-lg leading-8 text-muted">
          Caro brings library management, discovery, and social tracking together in a polished, easy-to-use app.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <article
              key={feature.title}
              className="group rounded-[1.75rem] border border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-accent"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-background">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{feature.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

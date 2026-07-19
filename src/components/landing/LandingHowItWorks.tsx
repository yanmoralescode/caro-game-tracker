import { ArrowRight, BarChart3, PlusCircle, Sparkle, Search } from 'lucide-react';

const steps = [
  {
    title: 'Search',
    description: 'Find games quickly using a smart, responsive search interface.',
    icon: Search,
  },
  {
    title: 'Add',
    description: 'Add titles from the catalog and configure your personal progress.',
    icon: PlusCircle,
  },
  {
    title: 'Track',
    description: 'Monitor playtime, status, and completion in one place.',
    icon: BarChart3,
  },
  {
    title: 'Share',
    description: 'Show your profile and connect with friends in the Caro community.',
    icon: Sparkle,
  },
];

export function LandingHowItWorks() {
  return (
    <section id="how-it-works" className="space-y-10 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">How it works</p>
        <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">A simple flow that keeps your collection moving.</h2>
        <p className="mt-5 text-lg leading-8 text-muted">
          From discovery to progress tracking, Caro guides your game journey with a polished and intuitive experience.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <article key={step.title} className="rounded-[1.75rem] border border-border bg-surface p-6 text-white shadow-soft">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-accent/10 text-accent">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{step.description}</p>
              {index < steps.length - 1 ? (
                <div className="mt-6 flex items-center gap-2 text-accent">
                  <span>{index + 1}</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}

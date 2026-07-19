const stats = [
  { label: 'Games tracked', value: '12.8k' },
  { label: 'Platforms supported', value: '32' },
  { label: 'Profiles created', value: '8.4k' },
  { label: 'Hours logged', value: '270k+' },
];

export function LandingStatistics() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 rounded-[2rem] border border-border bg-surface/70 p-8 shadow-soft sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl bg-background/70 p-6 text-center">
              <p className="text-4xl font-semibold text-white">{stat.value}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

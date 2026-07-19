const stats = [
  { label: 'Registered players', value: '12.8k' },
  { label: 'Games tracked', value: '84.4k' },
  { label: 'Public libraries', value: '3.7k' },
  { label: 'Friendships', value: '28.3k' },
  { label: 'Hours logged', value: '96.2k' },
];

export function UsersStats() {
  return (
    <section className="rounded-[2rem] border border-border bg-surface p-6 shadow-soft">
      <h2 className="text-xl font-semibold text-white">Community statistics</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((stat) => (
          <article key={stat.label} className="rounded-[1.75rem] border border-border bg-background/70 p-5 text-sm text-muted transition hover:-translate-y-1">
            <p className="uppercase tracking-[0.24em] text-accent">{stat.label}</p>
            <p className="mt-4 text-3xl font-semibold text-white">{stat.value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

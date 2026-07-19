const stats = [
  { label: 'Games owned', value: '218' },
  { label: 'Completed', value: '124' },
  { label: 'Backlog', value: '53' },
  { label: 'Wishlist', value: '15' },
  { label: 'Hours played', value: '1.8k' },
  { label: 'Completion rate', value: '57%' },
  { label: 'Friends', value: '87' },
  { label: 'Achievements', value: '42' },
];

export function ProfileStats() {
  return (
    <section className="rounded-[2rem] border border-border bg-surface p-6 shadow-soft">
      <h2 className="text-xl font-semibold text-white">Quick statistics</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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

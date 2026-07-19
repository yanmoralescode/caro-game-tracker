const stats = [
  { label: 'Games owned', value: '218' },
  { label: 'Completed', value: '124' },
  { label: 'Backlog', value: '53' },
  { label: 'Playing', value: '8' },
  { label: 'Wishlist', value: '15' },
  { label: 'Hours played', value: '1.8k' },
  { label: 'Completion rate', value: '57%' },
  { label: 'Favorite platform', value: 'PS5' },
];

export function DashboardStats() {
  return (
    <section className="grid gap-4 xl:grid-cols-4">
      {stats.map((stat) => (
        <article key={stat.label} className="rounded-[1.75rem] border border-border bg-surface p-6 shadow-soft transition hover:-translate-y-1">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">{stat.label}</p>
          <p className="mt-4 text-3xl font-semibold text-white">{stat.value}</p>
        </article>
      ))}
    </section>
  );
}

const recentlyPlayed = [
  { title: 'Celeste', hours: '28h', status: 'Completed', updated: '2 days ago', cover: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80' },
  { title: 'Fortnite', hours: '7h', status: 'Playing', updated: '5 hours ago', cover: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80' },
  { title: 'Solo Leveling', hours: '14h', status: 'Paused', updated: '1 week ago', cover: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80' },
];

export function DashboardRecentlyPlayed() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Recently played</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Games you returned to</h2>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        {recentlyPlayed.map((game) => (
          <article key={game.title} className="flex flex-col gap-4 overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-soft transition hover:-translate-y-1">
            <img src={game.cover} alt={game.title} className="h-48 w-full object-cover" />
            <div className="space-y-3 p-5">
              <div className="flex items-center justify-between text-sm text-muted">
                <span>{game.hours} played</span>
                <span className="rounded-full bg-background/70 px-3 py-1 text-xs uppercase tracking-[0.2em] text-accent">{game.status}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{game.title}</h3>
                <p className="mt-2 text-sm text-muted">Last updated {game.updated}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

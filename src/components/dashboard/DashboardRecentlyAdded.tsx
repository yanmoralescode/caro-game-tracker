const recentlyAdded = [
  { title: 'Hades II', platform: 'PC', date: 'Apr 22', status: 'Playing', cover: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80' },
  { title: 'Forspoken', platform: 'PS5', date: 'Apr 18', status: 'Backlog', cover: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80' },
  { title: 'Horizon Forbidden West', platform: 'PS5', date: 'Apr 12', status: 'Wishlist', cover: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80' },
];

export function DashboardRecentlyAdded() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Recently added</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">New additions to your collection</h2>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        {recentlyAdded.map((game) => (
          <article key={game.title} className="flex flex-col gap-4 overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-soft transition hover:-translate-y-1">
            <img src={game.cover} alt={game.title} className="h-48 w-full object-cover" />
            <div className="space-y-3 p-5">
              <div className="flex items-center justify-between text-sm text-muted">
                <span>{game.platform}</span>
                <span className="rounded-full bg-background/70 px-3 py-1 text-xs uppercase tracking-[0.2em] text-accent">{game.status}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{game.title}</h3>
                <p className="mt-2 text-sm text-muted">Added {game.date}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

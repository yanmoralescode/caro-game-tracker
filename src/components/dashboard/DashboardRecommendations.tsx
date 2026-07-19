const recommendations = [
  {
    title: 'Sifu',
    platform: 'PC',
    genres: ['Action', 'Martial Arts'],
    description: 'A fluid combat experience with a rewarding progression system.',
    cover: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'The Ascent',
    platform: 'Xbox Series X',
    genres: ['RPG', 'Cyberpunk'],
    description: 'Dive into a neon city with tactical combat and loot progression.',
    cover: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Stardew Valley',
    platform: 'Switch',
    genres: ['Simulation', 'Relaxing'],
    description: 'Manage your farm, build relationships, and unwind with a cozy adventure.',
    cover: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80',
  },
];

export function DashboardRecommendations() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Recommendations</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Suggested games for your collection</h2>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        {recommendations.map((game) => (
          <article key={game.title} className="overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-soft transition hover:-translate-y-1">
            <img src={game.cover} alt={game.title} className="h-48 w-full object-cover" />
            <div className="space-y-4 p-5">
              <div className="text-sm text-muted">{game.platform}</div>
              <h3 className="text-xl font-semibold text-white">{game.title}</h3>
              <p className="max-h-[4.5rem] overflow-hidden text-sm leading-6 text-muted">{game.description}</p>
              <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-muted">
                {game.genres.map((genre) => (
                  <span key={genre} className="rounded-full border border-border bg-background/70 px-3 py-1">
                    {genre}
                  </span>
                ))}
              </div>
              <button className="mt-4 inline-flex items-center justify-center rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-background transition hover:bg-accentDark">
                View Game
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

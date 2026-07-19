interface GameDetailsCommunityProps {
  rating: string;
  players: string;
  popularity: string;
  trending: string;
}

const metrics = [
  { label: 'Community rating', key: 'rating' },
  { label: 'Players tracking', key: 'players' },
  { label: 'Popularity', key: 'popularity' },
  { label: 'Trending rank', key: 'trending' },
] as const;

export function GameDetailsCommunity({ rating, players, popularity, trending }: GameDetailsCommunityProps) {
  const values = { rating, players, popularity, trending };

  return (
    <section className="rounded-[2rem] border border-border bg-surface p-6 shadow-soft">
      <h2 className="text-xl font-semibold text-white">Community insights</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-[1.75rem] border border-border bg-background/70 p-5 text-sm text-muted">
            <p className="uppercase tracking-[0.24em] text-accent">{metric.label}</p>
            <p className="mt-3 text-xl font-semibold text-white">{values[metric.key]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

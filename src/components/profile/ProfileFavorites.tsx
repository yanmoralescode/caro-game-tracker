import { Star } from 'lucide-react';

interface FavoriteGame {
  id: string;
  title: string;
  platform: string;
  cover: string;
  rating: string;
}

interface ProfileFavoritesProps {
  games: FavoriteGame[];
}

export function ProfileFavorites({ games }: ProfileFavoritesProps) {
  return (
    <section className="rounded-[2rem] border border-border bg-surface p-6 shadow-soft">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-accent">Favorite games</p>
          <h2 className="mt-2 text-xl font-semibold text-white">Top picks</h2>
        </div>
        <span className="rounded-full bg-background/70 px-3 py-2 text-xs uppercase tracking-[0.24em] text-muted">Personal</span>
      </div>
      <div className="mt-6 grid gap-4 xl:grid-cols-2">
        {games.map((game) => (
          <article key={game.id} className="group grid gap-4 overflow-hidden rounded-[1.75rem] border border-border bg-background/70 text-sm transition hover:-translate-y-1 sm:grid-cols-[1.1fr_0.9fr]">
            <img src={game.cover} alt={game.title} className="h-48 w-full object-cover sm:h-auto" />
            <div className="space-y-4 p-5 text-muted">
              <div>
                <p className="text-lg font-semibold text-white">{game.title}</p>
                <p className="mt-1 text-sm">{game.platform}</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted">
                <Star className="h-4 w-4 text-accent" />
                <span>{game.rating} rating</span>
              </div>
              <button className="inline-flex items-center gap-2 rounded-2xl border border-border bg-accent px-4 py-3 text-sm font-semibold text-background transition hover:bg-accentDark">
                View details
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

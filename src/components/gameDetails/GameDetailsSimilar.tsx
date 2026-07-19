import { ArrowRight } from 'lucide-react';
import type { SearchResult } from '../search/SearchResults';

interface GameDetailsSimilarProps {
  games: Array<Pick<SearchResult, 'id' | 'title' | 'genres' | 'platforms' | 'rating' | 'cover'>>;
}

export function GameDetailsSimilar({ games }: GameDetailsSimilarProps) {
  return (
    <section className="rounded-[2rem] border border-border bg-surface p-6 shadow-soft">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-accent">Similar games</p>
          <h2 className="mt-2 text-xl font-semibold text-white">You may also like</h2>
        </div>
        <button className="inline-flex items-center gap-2 rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-muted transition hover:border-accent hover:text-accent">
          View all
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {games.map((game) => (
          <article key={game.id} className="overflow-hidden rounded-[1.75rem] border border-border bg-background/70 transition hover:-translate-y-1">
            <img src={game.cover} alt={game.title} className="h-48 w-full object-cover" />
            <div className="space-y-3 p-5">
              <div>
                <h3 className="text-lg font-semibold text-white">{game.title}</h3>
                <p className="mt-2 text-sm text-muted">{game.genres.join(', ')}</p>
              </div>
              <div className="flex items-center justify-between text-sm text-muted">
                <span>{game.platforms.join(' • ')}</span>
                <span className="rounded-full bg-surface px-3 py-2 text-xs text-white">{game.rating}</span>
              </div>
              <button className="inline-flex items-center justify-center rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-muted transition hover:border-accent hover:text-accent">
                View details
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

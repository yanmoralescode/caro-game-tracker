import { ArrowRight, Sparkles } from 'lucide-react';
import type { SearchResult } from './SearchResults';

interface TrendingSection {
  title: string;
  items: SearchResult[];
}

interface SearchTrendingProps {
  trending: TrendingSection[];
  randomGame: SearchResult;
  onRandomize: () => void;
}

export function SearchTrending({ trending, randomGame, onRandomize }: SearchTrendingProps) {
  return (
    <section className="grid gap-6 xl:grid-cols-[1.4fr_0.95fr]">
      <div className="grid gap-6">
        {trending.map((section) => (
          <article key={section.title} className="rounded-[2rem] border border-border bg-surface p-6 shadow-soft">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-accent">Trending</p>
                <h2 className="mt-2 text-xl font-semibold text-white">{section.title}</h2>
              </div>
              <span className="rounded-full bg-background/70 px-3 py-1 text-xs uppercase tracking-[0.24em] text-muted">Top picks</span>
            </div>

            <div className="mt-6 grid gap-4">
              {section.items.slice(0, 3).map((item) => (
                <div key={item.id} className="rounded-[1.75rem] border border-border bg-background/60 p-4 transition hover:border-accent">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted">{item.platforms.join(' • ')}</p>
                    </div>
                    <span className="text-sm text-accent">{item.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      <article className="rounded-[2rem] border border-border bg-surface p-6 shadow-soft">
        <div className="flex items-center gap-3 text-sm uppercase tracking-[0.24em] text-accent">
          <Sparkles className="h-4 w-4" />
          <span>Random game</span>
        </div>
        <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-border bg-background/60">
          <img src={randomGame.cover} alt={randomGame.title} className="h-56 w-full object-cover" />
          <div className="space-y-4 p-6">
            <div>
              <p className="text-sm text-muted">{randomGame.platforms.join(' • ')}</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">{randomGame.title}</h3>
              <p className="mt-2 text-sm text-muted">{randomGame.genres.join(', ')}</p>
            </div>
            <div className="flex items-center justify-between gap-3 text-sm text-muted">
              <span>{randomGame.year}</span>
              <span>{randomGame.rating} rating</span>
            </div>
            <button
              type="button"
              onClick={onRandomize}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-5 py-3 text-sm font-semibold text-background transition hover:bg-accentDark"
            >
              Try another
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}

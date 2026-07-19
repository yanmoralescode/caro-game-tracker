import { Heart, Plus, ExternalLink } from 'lucide-react';

export interface SearchResult {
  id: string;
  title: string;
  year: string;
  genres: string[];
  platforms: string[];
  description: string;
  rating: string;
  developer: string;
  publisher: string;
  cover: string;
}

interface SearchResultsProps {
  results: SearchResult[];
}

export function SearchResults({ results }: SearchResultsProps) {
  return (
    <section className="grid gap-6 xl:grid-cols-2">
      {results.map((result) => (
        <article
          key={result.id}
          className="group overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-soft transition hover:-translate-y-1"
        >
          <div className="relative h-72 overflow-hidden">
            <img src={result.cover} alt={result.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-white">
              <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.24em] text-muted">
                {result.platforms.map((platform) => (
                  <span key={platform} className="rounded-full bg-background/70 px-3 py-1">
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4 p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-white">{result.title}</h3>
                <p className="text-sm text-muted">{result.year} • {result.developer} • {result.publisher}</p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-2xl bg-background/70 px-4 py-2 text-sm text-muted">
                <Heart className="h-4 w-4 text-accent" />
                {result.rating}
              </div>
            </div>

            <p className="text-sm leading-6 text-muted">{result.description}</p>

            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.24em] text-muted">
              {result.genres.map((genre) => (
                <span key={genre} className="rounded-full bg-background/70 px-3 py-2">
                  {genre}
                </span>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <button type="button" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-white transition hover:border-accent hover:text-accent">
                <ExternalLink className="h-4 w-4" />
                View details
              </button>
              <button type="button" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-accent px-4 py-3 text-sm font-semibold text-background transition hover:bg-accentDark">
                <Plus className="h-4 w-4" />
                Add to library
              </button>
              <button type="button" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-muted transition hover:border-accent hover:text-accent">
                <Heart className="h-4 w-4" />
                Favorite
              </button>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

import { ExternalLink, Heart, Share2, BookmarkPlus, Play } from 'lucide-react';

interface GameDetailsHeroProps {
  title: string;
  year: string;
  developer: string;
  publisher: string;
  genres: string[];
  platforms: string[];
  score: number;
  rating: string;
  cover: string;
  banner: string;
  owned: boolean;
  onAddLibrary: () => void;
  onToggleFavorite: () => void;
}

export function GameDetailsHero({
  title,
  year,
  developer,
  publisher,
  genres,
  platforms,
  score,
  rating,
  cover,
  banner,
  owned,
  onAddLibrary,
  onToggleFavorite,
}: GameDetailsHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-border bg-surface shadow-card">
      <div className="absolute inset-0 overflow-hidden">
        <img src={banner} alt="Hero background" className="h-full w-full object-cover opacity-40 blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/20 to-black/80" />
      </div>

      <div className="relative grid gap-8 p-6 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
        <div className="grid gap-6">
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex rounded-full bg-accent/15 px-4 py-2 text-xs uppercase tracking-[0.28em] text-accent">Game Details</span>
            <span className="rounded-full bg-background/70 px-3 py-2 text-sm text-muted">{year}</span>
          </div>

          <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
                {developer} • {publisher} • {genres.join(', ')}
              </p>
            </div>

            <div className="rounded-[2rem] border border-border bg-background/70 p-5 text-center">
              <p className="text-sm uppercase tracking-[0.24em] text-muted">External rating</p>
              <p className="mt-3 text-4xl font-semibold text-white">{rating}</p>
              <p className="mt-2 text-sm text-muted">Metacritic score</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[1.75rem] border border-border bg-background/70 p-5 text-sm text-muted">
              <p className="text-xs uppercase tracking-[0.24em] text-muted">Platforms</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {platforms.map((platform) => (
                  <span key={platform} className="rounded-full bg-surface px-3 py-2 text-xs text-white">
                    {platform}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-border bg-background/70 p-5 text-sm text-muted">
              <p className="text-xs uppercase tracking-[0.24em] text-muted">Genres</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {genres.map((genre) => (
                  <span key={genre} className="rounded-full bg-surface px-3 py-2 text-xs text-white">
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="overflow-hidden rounded-[2rem] border border-border bg-background/80 shadow-soft">
            <img src={cover} alt={title} className="h-96 w-full object-cover" />
          </div>
          <div className="grid gap-3 rounded-[2rem] border border-border bg-background/80 p-5">
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm uppercase tracking-[0.24em] text-muted">Caro score</span>
              <span className="rounded-full bg-surface px-3 py-2 text-white">{score}/10</span>
            </div>
            <div className="grid gap-3">
              <button
                type="button"
                onClick={onAddLibrary}
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-accent px-5 py-4 text-sm font-semibold text-background transition hover:bg-accentDark"
              >
                <BookmarkPlus className="h-4 w-4" />
                {owned ? 'Edit Library Entry' : 'Add to Library'}
              </button>
              <button
                type="button"
                onClick={onToggleFavorite}
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-border bg-background/70 px-5 py-4 text-sm text-white transition hover:border-accent hover:text-accent"
              >
                <Heart className="h-4 w-4" />
                Favorite
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-border bg-background/70 px-5 py-4 text-sm text-muted transition hover:border-accent hover:text-accent"
              >
                <Share2 className="h-4 w-4" />
                Share
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-border bg-background/70 px-5 py-4 text-sm text-muted transition hover:border-accent hover:text-accent"
              >
                <ExternalLink className="h-4 w-4" />
                Official website
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

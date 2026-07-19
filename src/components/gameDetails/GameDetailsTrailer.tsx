import { Play } from 'lucide-react';

interface GameDetailsTrailerProps {
  trailerUrl?: string;
}

export function GameDetailsTrailer({ trailerUrl }: GameDetailsTrailerProps) {
  if (!trailerUrl) {
    return null;
  }

  return (
    <section className="rounded-[2rem] border border-border bg-surface p-6 shadow-soft">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-accent">Trailer</p>
          <h2 className="mt-2 text-xl font-semibold text-white">Watch the cinematic trailer</h2>
        </div>
        <span className="rounded-full bg-background/70 px-3 py-2 text-sm text-muted">Preview</span>
      </div>

      <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-border bg-background/70">
        <div className="relative h-72">
          <img src={trailerUrl} alt="Trailer preview" className="h-full w-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <button className="inline-flex items-center gap-3 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-background transition hover:bg-accentDark">
              <Play className="h-4 w-4" />
              Play trailer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

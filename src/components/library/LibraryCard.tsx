import { Heart, Pencil, Trash2, Eye } from 'lucide-react';

export type LibraryCardVariant = 'grid' | 'compact' | 'list';

interface LibraryCardProps {
  title: string;
  platform: string;
  status: string;
  rating: number;
  hours: string;
  progress: string;
  favorite: boolean;
  cover: string;
  variant?: LibraryCardVariant;
}

export function LibraryCard({ title, platform, status, rating, hours, progress, favorite, cover, variant = 'grid' }: LibraryCardProps) {
  return (
    <article className={`group overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-soft transition hover:-translate-y-1 ${variant === 'list' ? 'grid gap-0 sm:grid-cols-[1.35fr_0.95fr]' : ''}`}>
      <div className={`relative overflow-hidden ${variant === 'list' ? 'h-60 sm:h-full' : 'h-56'}`}>
        <img src={cover} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
          <p className="text-sm text-muted">{platform}</p>
          <h3 className="mt-2 text-xl font-semibold">{title}</h3>
        </div>
      </div>

      <div className={`${variant === 'list' ? 'flex flex-col justify-between p-5' : 'space-y-4 p-5'}`}>
        <div className="flex items-center justify-between text-sm text-muted">
          <span className="rounded-full bg-background/70 px-3 py-1 uppercase tracking-[0.15em] text-xs">{status}</span>
          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border transition ${
              favorite ? 'bg-accent text-background' : 'bg-background/70 text-muted hover:border-accent hover:text-accent'
            }`}
            aria-label={favorite ? 'Favorite' : 'Mark as favorite'}
          >
            <Heart className="h-4 w-4" />
          </button>
        </div>

        <div className={`grid gap-3 rounded-3xl bg-background/70 p-4 text-sm text-muted ${variant === 'compact' ? 'grid-cols-3' : ''}`}>
          <div className="flex flex-col gap-1">
            <span className="text-[11px] uppercase tracking-[0.25em] text-muted">Rating</span>
            <span className="text-white">{rating}/10</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[11px] uppercase tracking-[0.25em] text-muted">Hours</span>
            <span className="text-white">{hours}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[11px] uppercase tracking-[0.25em] text-muted">Progress</span>
            <span className="text-white">{progress}</span>
          </div>
        </div>

        <div className={`flex flex-wrap gap-3 ${variant === 'compact' ? 'justify-between' : ''}`}>
          <button className="inline-flex items-center gap-2 rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-white transition hover:border-accent hover:text-accent">
            <Pencil className="h-4 w-4" />
            Quick Edit
          </button>
          <button className="inline-flex items-center gap-2 rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-muted transition hover:border-accent hover:text-accent">
            <Eye className="h-4 w-4" />
            Details
          </button>
          <button className="inline-flex items-center gap-2 rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-muted transition hover:border-red-400 hover:text-red-400">
            <Trash2 className="h-4 w-4" />
            Remove
          </button>
        </div>
      </div>
    </article>
  );
}

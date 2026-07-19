import { Star, Clock3, CheckSquare2, CalendarDays, Heart } from 'lucide-react';

interface GameDetailsUserInfoProps {
  owned: boolean;
  status: string;
  personalRating: number;
  hours: string;
  progress: string;
  started: string;
  finished: string;
  favorite: boolean;
  notes: string;
  onEdit: () => void;
}

export function GameDetailsUserInfo({
  owned,
  status,
  personalRating,
  hours,
  progress,
  started,
  finished,
  favorite,
  notes,
  onEdit,
}: GameDetailsUserInfoProps) {
  if (!owned) {
    return null;
  }

  return (
    <section className="rounded-[2rem] border border-border bg-surface p-6 shadow-soft">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-accent">Your progress</p>
          <h2 className="mt-2 text-xl font-semibold text-white">Library entry</h2>
        </div>
        <button
          type="button"
          onClick={onEdit}
          className="inline-flex items-center gap-2 rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-muted transition hover:border-accent hover:text-accent"
        >
          <Star className="h-4 w-4" />
          Edit entry
        </button>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-[1.75rem] border border-border bg-background/70 p-4 text-sm text-muted">
          <span className="text-xs uppercase tracking-[0.24em] text-muted">Status</span>
          <p className="mt-3 text-white">{status}</p>
        </div>
        <div className="rounded-[1.75rem] border border-border bg-background/70 p-4 text-sm text-muted">
          <span className="text-xs uppercase tracking-[0.24em] text-muted">Personal rating</span>
          <p className="mt-3 text-white">{personalRating}/10</p>
        </div>
        <div className="rounded-[1.75rem] border border-border bg-background/70 p-4 text-sm text-muted">
          <span className="text-xs uppercase tracking-[0.24em] text-muted">Hours played</span>
          <p className="mt-3 text-white">{hours}</p>
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-[1.75rem] border border-border bg-background/70 p-4 text-sm text-muted">
          <span className="text-xs uppercase tracking-[0.24em] text-muted">Completion</span>
          <p className="mt-3 text-white">{progress}</p>
        </div>
        <div className="rounded-[1.75rem] border border-border bg-background/70 p-4 text-sm text-muted">
          <span className="text-xs uppercase tracking-[0.24em] text-muted">Started</span>
          <p className="mt-3 text-white">{started}</p>
        </div>
        <div className="rounded-[1.75rem] border border-border bg-background/70 p-4 text-sm text-muted">
          <span className="text-xs uppercase tracking-[0.24em] text-muted">Finished</span>
          <p className="mt-3 text-white">{finished}</p>
        </div>
        <div className="rounded-[1.75rem] border border-border bg-background/70 p-4 text-sm text-muted">
          <span className="text-xs uppercase tracking-[0.24em] text-muted">Favorite</span>
          <p className="mt-3 text-white">{favorite ? 'Yes' : 'No'}</p>
        </div>
      </div>

      <div className="mt-6 rounded-[1.75rem] border border-border bg-background/70 p-5 text-sm text-muted">
        <p className="text-xs uppercase tracking-[0.24em] text-accent">Notes</p>
        <p className="mt-3 text-white">{notes}</p>
      </div>
    </section>
  );
}

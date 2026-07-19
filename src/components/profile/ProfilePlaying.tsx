import { Eye, ArrowRight } from 'lucide-react';

interface PlayingGame {
  id: string;
  title: string;
  platform: string;
  hours: string;
  progress: string;
  cover: string;
}

interface ProfilePlayingProps {
  games: PlayingGame[];
}

export function ProfilePlaying({ games }: ProfilePlayingProps) {
  return (
    <section className="rounded-[2rem] border border-border bg-surface p-6 shadow-soft">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-accent">Currently playing</p>
          <h2 className="mt-2 text-xl font-semibold text-white">In progress</h2>
        </div>
        <button className="inline-flex items-center gap-2 rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-muted transition hover:border-accent hover:text-accent">
          View all
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {games.map((game) => (
          <article key={game.id} className="overflow-hidden rounded-[1.75rem] border border-border bg-background/70 transition hover:-translate-y-1">
            <img src={game.cover} alt={game.title} className="h-44 w-full object-cover" />
            <div className="space-y-3 p-5 text-sm text-muted">
              <div>
                <p className="text-lg font-semibold text-white">{game.title}</p>
                <p className="mt-1">{game.platform}</p>
              </div>
              <div className="grid gap-2 rounded-3xl bg-surface p-4">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted">
                  <span>Hours</span>
                  <span>{game.hours}</span>
                </div>
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted">
                  <span>Completion</span>
                  <span>{game.progress}</span>
                </div>
              </div>
              <button className="inline-flex items-center gap-2 rounded-2xl border border-border bg-accent px-4 py-3 text-sm font-semibold text-background transition hover:bg-accentDark">
                <Eye className="h-4 w-4" />
                Quick view
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

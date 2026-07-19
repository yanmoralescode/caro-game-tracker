import { ChevronRight, Play } from 'lucide-react';

const continueGames = [
  {
    title: 'Elden Ring',
    platform: 'PS5',
    status: 'Playing',
    progress: '42%',
    hours: '82h',
    cover: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Apex Legends',
    platform: 'PC',
    status: 'Competitive',
    progress: '18%',
    hours: '120h',
    cover: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Sea of Stars',
    platform: 'Switch',
    status: 'Paused',
    progress: '67%',
    hours: '34h',
    cover: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80',
  },
];

export function DashboardContinue() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Continue playing</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Pick up where you left off</h2>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        {continueGames.map((game) => (
          <article key={game.title} className="group overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-soft transition hover:-translate-y-1">
            <div className="relative h-56 overflow-hidden rounded-t-[1.75rem] bg-gradient-to-b from-slate-900 to-transparent">
              <img src={game.cover} alt={game.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-4 text-white">
                <p className="text-sm">{game.platform}</p>
                <h3 className="mt-1 text-xl font-semibold">{game.title}</h3>
              </div>
            </div>
            <div className="space-y-4 p-5">
              <div className="flex items-center justify-between text-sm text-muted">
                <span>{game.status}</span>
                <span>{game.hours}</span>
              </div>
              <div>
                <div className="h-2 overflow-hidden rounded-full bg-background/80">
                  <div className="h-full rounded-full bg-accent" style={{ width: game.progress }} />
                </div>
                <p className="mt-2 text-sm text-muted">Progress {game.progress}</p>
              </div>
              <button className="inline-flex items-center gap-2 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-background transition hover:bg-accentDark">
                <Play className="h-4 w-4" />
                Continue
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

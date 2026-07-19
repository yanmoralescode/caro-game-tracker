import { RefreshCw, Star, Gamepad2 } from "lucide-react";

const randomGame = {
  title: 'Starfield',
  genres: ['RPG', 'Sci-Fi', 'Adventure'],
  platform: 'PC',
  year: 2028,
  description: 'A sprawling space RPG with rich exploration and progression systems.',
  cover: 'https://images.unsplash.com/photo-1528701800489-20d6a1c8f9b0?auto=format&fit=crop&w=800&q=80',
};

export function DashboardRandomGame() {
  return (
    <section className="rounded-[2rem] border border-border bg-surface p-6 shadow-soft">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Random game</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Discover something new</h2>
        </div>
        <button className="inline-flex items-center gap-2 rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-muted transition hover:border-accent hover:text-accent">
          <RefreshCw className="h-4 w-4" />
          Show another
        </button>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-[1fr_1.4fr]">
        <div className="overflow-hidden rounded-[1.75rem] bg-background/60">
          <img src={randomGame.cover} alt={randomGame.title} className="h-full w-full object-cover" />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center gap-2 text-sm text-muted">
              <Gamepad2 className="h-4 w-4 text-accent" />            
            <span>{randomGame.platform}</span>
            <span className="text-white">•</span>
            <span>{randomGame.year}</span>
          </div>
          <h3 className="text-3xl font-semibold text-white">{randomGame.title}</h3>
          <div className="flex flex-wrap gap-2">
            {randomGame.genres.map((genre) => (
              <span key={genre} className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted">
                {genre}
              </span>
            ))}
          </div>
          <p className="text-sm leading-7 text-muted">{randomGame.description}</p>
          <div className="inline-flex items-center gap-2 rounded-3xl bg-surface/80 px-4 py-3 text-sm text-muted">
            <Star className="h-4 w-4 text-accent" />
            Recommended for your next session
          </div>
        </div>
      </div>
    </section>
  );
}

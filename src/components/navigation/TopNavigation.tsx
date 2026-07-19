import { Search, Bell, Shuffle, UserCircle } from 'lucide-react';

export function TopNavigation() {
  return (
    <div className="flex flex-col gap-4 border-b border-border px-6 py-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="button" className="inline-flex items-center gap-2 rounded-2xl border border-border bg-surface px-4 py-2 text-white transition hover:border-accent hover:text-accent">
          <Shuffle className="h-4 w-4" />
          Random game
        </button>
        <div className="relative w-full max-w-md">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            type="search"
            aria-label="Search games"
            placeholder="Search games, players, stats"
            className="w-full rounded-2xl border border-border bg-background/70 py-3 pl-11 pr-4 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-surface text-muted transition hover:border-accent hover:text-accent">
          <Bell className="h-5 w-5" />
        </button>
        <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-surface text-muted transition hover:border-accent hover:text-accent">
          <UserCircle className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

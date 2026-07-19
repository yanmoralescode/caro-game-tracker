import { Search as SearchIcon, ArrowDownUp } from 'lucide-react';

interface UserSearchToolbarProps {
  query: string;
  onQueryChange: (value: string) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
  loading: boolean;
}

export function UserSearchToolbar({ query, onQueryChange, sortBy, onSortChange, loading }: UserSearchToolbarProps) {
  return (
    <section className="rounded-[2rem] border border-border bg-surface p-6 shadow-soft">
      <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-accent">Users</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">Discover players and collections.</h1>
          <p className="mt-3 text-sm text-muted">Search usernames, display names, favorite platforms, or community activity.</p>
        </div>

        <div className="grid gap-4 xl:grid-cols-[1.8fr_0.95fr]">
          <label className="relative flex items-center rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-muted focus-within:border-accent">
            <SearchIcon className="h-4 w-4 text-accent" />
            <input
              type="search"
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="Search users..."
              className="ml-3 w-full bg-transparent text-sm text-white outline-none placeholder:text-muted"
              aria-label="Search users"
            />
          </label>
          <label className="flex items-center justify-between rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-muted">
            <span>Sort by</span>
            <select
              value={sortBy}
              onChange={(event) => onSortChange(event.target.value)}
              className="w-full bg-transparent text-sm text-white outline-none"
              aria-label="Sort users"
            >
              <option value="recent">Recent activity</option>
              <option value="followers">Followers</option>
              <option value="games">Games owned</option>
              <option value="friends">Friends</option>
            </select>
          </label>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm text-muted">
        <span>{loading ? 'Finding players...' : 'Search results update instantly.'}</span>
        <span className="inline-flex items-center gap-2 rounded-full bg-background/70 px-3 py-1 text-xs uppercase tracking-[0.24em] text-muted">
          <ArrowDownUp className="h-4 w-4" />
          Live search
        </span>
      </div>
    </section>
  );
}

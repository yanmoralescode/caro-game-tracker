import { ArrowUpDown, Search as SearchIcon, X } from 'lucide-react';

interface SearchToolbarProps {
  query: string;
  onQueryChange: (value: string) => void;
  onClear: () => void;
  sortBy: string;
  onSortChange: (value: string) => void;
  sortDirection: 'asc' | 'desc';
  onToggleSortDirection: () => void;
  loading: boolean;
}

export function SearchToolbar({
  query,
  onQueryChange,
  onClear,
  sortBy,
  onSortChange,
  sortDirection,
  onToggleSortDirection,
  loading,
}: SearchToolbarProps) {
  return (
    <section className="rounded-[2rem] border border-border bg-surface p-6 shadow-soft">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-accent">Search</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">Discover your next adventure.</h1>
        </div>

        <div className="grid gap-4 sm:grid-cols-[1.9fr_1fr] lg:w-[52rem]">
          <label className="relative flex items-center rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-muted focus-within:border-accent">
            <SearchIcon className="h-4 w-4 text-accent" />
            <input
              type="search"
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="Search for any game..."
              className="ml-3 w-full bg-transparent text-sm text-white outline-none placeholder:text-muted"
              aria-label="Search for any game"
            />
            {query ? (
              <button
                type="button"
                onClick={onClear}
                className="absolute right-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-muted transition hover:bg-white/10 hover:text-white"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            ) : null}
          </label>

          <div className="grid gap-3 sm:grid-cols-2">
            <label className="flex items-center justify-between rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-muted">
              <span>Sort by</span>
              <select
                value={sortBy}
                onChange={(event) => onSortChange(event.target.value)}
                className="w-full bg-transparent text-sm text-white outline-none"
                aria-label="Sort results"
              >
                <option value="relevance">Relevance</option>
                <option value="releaseDate">Release Date</option>
                <option value="rating">Rating</option>
                <option value="alphabetical">Alphabetical</option>
                <option value="hours">Hours Played</option>
              </select>
            </label>
            <button
              type="button"
              onClick={onToggleSortDirection}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-muted transition hover:border-accent hover:text-accent"
            >
              <ArrowUpDown className="h-4 w-4" />
              {sortDirection === 'asc' ? 'Ascending' : 'Descending'}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3 text-sm text-muted">
        <span>{loading ? 'Searching games...' : 'Search results update instantly as you type.'}</span>
        <span className="rounded-full bg-background/70 px-3 py-1">Instant search</span>
      </div>
    </section>
  );
}

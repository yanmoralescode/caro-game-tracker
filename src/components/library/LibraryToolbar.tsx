import { ArrowUpDown, Search, SlidersHorizontal, LayoutGrid, List, Sparkles } from 'lucide-react';

interface LibraryToolbarProps {
  viewMode: 'grid' | 'compact' | 'list';
  onViewModeChange: (mode: 'grid' | 'compact' | 'list') => void;
  search: string;
  onSearchChange: (value: string) => void;
  sortOption: string;
  onSortChange: (value: string) => void;
  sortDirection: 'asc' | 'desc';
  onToggleSortDirection: () => void;
  resultCount: number;
  activeFilters: number;
  onToggleFilters: () => void;
}

export function LibraryToolbar({
  viewMode,
  onViewModeChange,
  search,
  onSearchChange,
  sortOption,
  onSortChange,
  sortDirection,
  onToggleSortDirection,
  resultCount,
  activeFilters,
  onToggleFilters,
}: LibraryToolbarProps) {
  return (
    <div className="grid gap-4 rounded-[2rem] border border-border bg-surface p-6 shadow-soft md:grid-cols-[1.78fr_1fr] xl:grid-cols-[1.3fr_1.2fr]">
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-xl font-semibold text-white">My Library</p>
          <p className="mt-2 text-sm text-muted">Organize every game you&apos;ve ever played.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
          <span>{resultCount} games visible</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <button
            type="button"
            onClick={onToggleFilters}
            className="inline-flex items-center gap-2 rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-muted transition hover:border-accent hover:text-accent"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters{activeFilters ? ` (${activeFilters})` : ''}
          </button>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr] xl:grid-cols-[1.2fr_0.9fr]">
        <label className="flex items-center gap-3 rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm text-muted">
          <Search className="h-4 w-4 text-accent" />
          <input
            type="search"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search your library..."
            className="w-full bg-transparent outline-none placeholder:text-muted"
            aria-label="Search your library"
          />
        </label>

        <div className="flex items-center gap-3 rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-muted">
          <select
            value={sortOption}
            onChange={(event) => onSortChange(event.target.value)}
            className="w-full bg-transparent text-sm text-white outline-none"
            aria-label="Sort library"
          >
            <option value="recentlyAdded">Recently Added</option>
            <option value="recentlyPlayed">Recently Played</option>
            <option value="alphabetical">Alphabetical</option>
            <option value="rating">Rating</option>
            <option value="hours">Hours Played</option>
            <option value="releaseDate">Release Date</option>
            <option value="completion">Completion</option>
            <option value="favorite">Favorite</option>
          </select>
          <button
            type="button"
            onClick={onToggleSortDirection}
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border text-muted transition hover:border-accent hover:text-accent"
            aria-label="Toggle sort direction"
          >
            <ArrowUpDown className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center justify-between gap-2 rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-muted">
          <span>View</span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onViewModeChange('grid')}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl transition ${
                viewMode === 'grid' ? 'bg-accent text-background' : 'text-muted hover:bg-white/5'
              }`}
              aria-label="Grid view"
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => onViewModeChange('compact')}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl transition ${
                viewMode === 'compact' ? 'bg-accent text-background' : 'text-muted hover:bg-white/5'
              }`}
              aria-label="Compact view"
            >
              <Sparkles className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => onViewModeChange('list')}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl transition ${
                viewMode === 'list' ? 'bg-accent text-background' : 'text-muted hover:bg-white/5'
              }`}
              aria-label="List view"
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

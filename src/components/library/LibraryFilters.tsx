import { ChevronDown, Filter } from 'lucide-react';

export interface LibraryFiltersState {
  status: string[];
  platform: string[];
  genre: string[];
  year: string[];
  favoriteOnly: boolean;
  hideFinished: boolean;
}

interface FilterOption {
  label: string;
  category: keyof Omit<LibraryFiltersState, 'favoriteOnly' | 'hideFinished'>;
  value: string;
}

const filterOptions: FilterOption[] = [
  { label: 'Playing', category: 'status', value: 'Playing' },
  { label: 'Completed', category: 'status', value: 'Completed' },
  { label: 'Backlog', category: 'status', value: 'Backlog' },
  { label: 'PC', category: 'platform', value: 'PC' },
  { label: 'PS5', category: 'platform', value: 'PS5' },
  { label: 'Switch', category: 'platform', value: 'Switch' },
  { label: 'RPG', category: 'genre', value: 'RPG' },
  { label: 'Action', category: 'genre', value: 'Action' },
  { label: 'Strategy', category: 'genre', value: 'Strategy' },
  { label: '2024', category: 'year', value: '2024' },
  { label: '2023', category: 'year', value: '2023' },
];

interface LibraryFiltersProps {
  expanded: boolean;
  filters: LibraryFiltersState;
  onToggleExpand: () => void;
  onToggleFilter: (category: keyof LibraryFiltersState, value?: string) => void;
}

export function LibraryFilters({ expanded, filters, onToggleExpand, onToggleFilter }: LibraryFiltersProps) {
  const renderButton = (option: FilterOption) => {
    const isActive = filters[option.category].includes(option.value);
    return (
      <button
        key={`${option.category}-${option.value}`}
        type="button"
        onClick={() => onToggleFilter(option.category, option.value)}
        className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm transition ${
          isActive
            ? 'border-accent bg-accent/10 text-white'
            : 'border-border bg-background/60 text-muted hover:border-accent hover:text-white'
        }`}
      >
        <span>{option.label}</span>
        <ChevronDown className="h-4 w-4" />
      </button>
    );
  };

  return (
    <section className="rounded-[2rem] border border-border bg-surface p-6 shadow-soft">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Filters</p>
          <h2 className="mt-2 text-xl font-semibold text-white">Refine your collection</h2>
        </div>
        <button
          type="button"
          onClick={onToggleExpand}
          className="inline-flex items-center gap-2 rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-muted transition hover:border-accent hover:text-accent"
        >
          <Filter className="h-4 w-4" />
          {expanded ? 'Collapse' : 'Expand'}
        </button>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {filterOptions.slice(0, 8).map(renderButton)}
      </div>

      {expanded && (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <button
            type="button"
            onClick={() => onToggleFilter('favoriteOnly')}
            className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm transition ${
              filters.favoriteOnly
                ? 'border-accent bg-accent/10 text-white'
                : 'border-border bg-background/60 text-muted hover:border-accent hover:text-white'
            }`}
          >
            <span>Favorites only</span>
            <ChevronDown className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => onToggleFilter('hideFinished')}
            className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm transition ${
              filters.hideFinished
                ? 'border-accent bg-accent/10 text-white'
                : 'border-border bg-background/60 text-muted hover:border-accent hover:text-white'
            }`}
          >
            <span>Hide finished games</span>
            <ChevronDown className="h-4 w-4" />
          </button>
          <div className="rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm text-muted">
            <p className="text-sm font-semibold text-white">Active filters</p>
            <p className="mt-2 text-xs leading-5 text-muted">
              {filters.status.length + filters.platform.length + filters.genre.length + filters.year.length + (filters.favoriteOnly ? 1 : 0) + (filters.hideFinished ? 1 : 0)} active
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

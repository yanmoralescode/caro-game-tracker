import { ChevronDown } from 'lucide-react';

export interface SearchFiltersState {
  platform: string[];
  genre: string[];
  year: string[];
  developer: string[];
  publisher: string[];
  multiplayer: string[];
  rating: string[];
}

interface FilterOption {
  label: string;
  category: keyof SearchFiltersState;
  value: string;
}

const filterOptions: FilterOption[] = [
  { label: 'PC', category: 'platform', value: 'PC' },
  { label: 'PS5', category: 'platform', value: 'PS5' },
  { label: 'Switch', category: 'platform', value: 'Switch' },
  { label: 'Action', category: 'genre', value: 'Action' },
  { label: 'RPG', category: 'genre', value: 'RPG' },
  { label: 'Adventure', category: 'genre', value: 'Adventure' },
  { label: '2024', category: 'year', value: '2024' },
  { label: '2023', category: 'year', value: '2023' },
  { label: 'Sony', category: 'publisher', value: 'Sony' },
  { label: 'Bethesda', category: 'publisher', value: 'Bethesda' },
  { label: 'Multiplayer', category: 'multiplayer', value: 'Multiplayer' },
  { label: 'Singleplayer', category: 'multiplayer', value: 'Singleplayer' },
  { label: '8+', category: 'rating', value: '8+' },
  { label: '9+', category: 'rating', value: '9+' },
];

interface SearchFiltersProps {
  expanded: boolean;
  filters: SearchFiltersState;
  onToggleFilter: (category: keyof SearchFiltersState, value: string) => void;
  onToggleExpand: () => void;
}

export function SearchFilters({ expanded, filters, onToggleFilter, onToggleExpand }: SearchFiltersProps) {
  const activeCount = Object.values(filters).reduce((total, values) => total + values.length, 0);

  return (
    <section className="rounded-[2rem] border border-border bg-surface p-6 shadow-soft">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Filters</p>
          <h2 className="mt-2 text-xl font-semibold text-white">Narrow your search</h2>
        </div>
        <button
          type="button"
          onClick={onToggleExpand}
          aria-expanded={expanded}
          className="inline-flex items-center gap-2 rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-muted transition hover:border-accent hover:text-accent"
        >
          <ChevronDown className="h-4 w-4" />
          {expanded ? 'Hide filters' : `Show filters${activeCount ? ` (${activeCount})` : ''}`}
        </button>
      </div>

      <div className={`mt-6 grid gap-4 ${expanded ? 'sm:grid-cols-2 xl:grid-cols-4' : 'grid-cols-1'}`}>
        {filterOptions.map((option) => {
          const isActive = filters[option.category].includes(option.value);
          return (
            <button
              key={`${option.category}-${option.value}`}
              type="button"
              aria-pressed={isActive}
              onClick={() => onToggleFilter(option.category, option.value)}
              className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-sm transition ${
                isActive ? 'border-accent bg-accent/10 text-white' : 'border-border bg-background/60 text-muted hover:border-accent hover:text-white'
              }`}
            >
              <span>{option.label}</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          );
        })}
      </div>
    </section>
  );
}

import { useEffect, useMemo, useState } from 'react';
import { LibraryToolbar } from '../components/library/LibraryToolbar';
import { LibraryFilters, LibraryFiltersState } from '../components/library/LibraryFilters';
import { LibraryStats } from '../components/library/LibraryStats';
import { LibraryCard, LibraryCardVariant } from '../components/library/LibraryCard';
import { LibraryEmpty } from '../components/library/LibraryEmpty';

const games = [
  {
    id: 'hfw',
    title: 'Horizon Forbidden West',
    platform: 'PS5',
    status: 'Playing',
    rating: 9,
    hours: '64h',
    progress: '68%',
    favorite: true,
    cover: 'https://images.unsplash.com/photo-1529270292861-0de0f3b0bad4?auto=format&fit=crop&w=900&q=80',
    genre: 'Action',
    year: '2024',
    releaseDate: '2024-02-18',
    addedAt: '2024-07-10',
    lastPlayed: '2024-07-17',
  },
  {
    id: 'dead-cells',
    title: 'Dead Cells',
    platform: 'PC',
    status: 'Completed',
    rating: 8,
    hours: '42h',
    progress: '100%',
    favorite: false,
    cover: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80',
    genre: 'RPG',
    year: '2023',
    releaseDate: '2023-10-25',
    addedAt: '2024-01-21',
    lastPlayed: '2024-03-14',
  },
  {
    id: 'p5r',
    title: 'Persona 5 Royal',
    platform: 'PS5',
    status: 'Backlog',
    rating: 10,
    hours: '0h',
    progress: '0%',
    favorite: true,
    cover: 'https://images.unsplash.com/photo-1558981359-6c0dbab8e5c5?auto=format&fit=crop&w=900&q=80',
    genre: 'RPG',
    year: '2024',
    releaseDate: '2024-05-09',
    addedAt: '2024-07-05',
    lastPlayed: '2024-07-05',
  },
  {
    id: 'starfield',
    title: 'Starfield',
    platform: 'PC',
    status: 'Paused',
    rating: 7,
    hours: '28h',
    progress: '41%',
    favorite: false,
    cover: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    genre: 'Adventure',
    year: '2024',
    releaseDate: '2024-06-15',
    addedAt: '2024-06-20',
    lastPlayed: '2024-07-01',
  },
  {
    id: 'loop-hero',
    title: 'Loop Hero',
    platform: 'PC',
    status: 'Completed',
    rating: 8,
    hours: '35h',
    progress: '100%',
    favorite: true,
    cover: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    genre: 'Strategy',
    year: '2023',
    releaseDate: '2023-11-07',
    addedAt: '2024-02-04',
    lastPlayed: '2024-04-12',
  },
  {
    id: 'smash',
    title: 'Super Smash Bros. Ultimate',
    platform: 'Switch',
    status: 'Backlog',
    rating: 9,
    hours: '12h',
    progress: '25%',
    favorite: false,
    cover: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80',
    genre: 'Action',
    year: '2023',
    releaseDate: '2023-12-02',
    addedAt: '2024-06-02',
    lastPlayed: '2024-06-10',
  },
];

const defaultFilters: LibraryFiltersState = {
  status: [],
  platform: [],
  genre: [],
  year: [],
  favoriteOnly: false,
  hideFinished: false,
};

const sortOptions = [
  { value: 'recentlyAdded', label: 'Recently Added' },
  { value: 'recentlyPlayed', label: 'Recently Played' },
  { value: 'alphabetical', label: 'Alphabetical' },
  { value: 'rating', label: 'Rating' },
  { value: 'hours', label: 'Hours Played' },
  { value: 'releaseDate', label: 'Release Date' },
  { value: 'completion', label: 'Completion' },
  { value: 'favorite', label: 'Favorite' },
] as const;

type SortOption = (typeof sortOptions)[number]['value'];

export function LibraryPage() {
  const [viewMode, setViewMode] = useState<LibraryCardVariant>('grid');
  const [search, setSearch] = useState('');
  const [sortOption, setSortOption] = useState<SortOption>('recentlyAdded');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [filters, setFilters] = useState<LibraryFiltersState>(defaultFilters);
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const storedViewMode = localStorage.getItem('caroLibraryViewMode') as LibraryCardVariant | null;
    if (storedViewMode) {
      setViewMode(storedViewMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('caroLibraryViewMode', viewMode);
  }, [viewMode]);

  const activeFilterCount = useMemo(() => {
    const booleanFilters = [filters.favoriteOnly, filters.hideFinished].filter(Boolean).length;
    return filters.status.length + filters.platform.length + filters.genre.length + filters.year.length + booleanFilters;
  }, [filters]);

  const filteredGames = useMemo(() => {
    return games
      .filter((game) => {
        const query = search.trim().toLowerCase();
        const matchesSearch =
          !query ||
          game.title.toLowerCase().includes(query) ||
          game.platform.toLowerCase().includes(query) ||
          game.genre.toLowerCase().includes(query);

        const matchesStatus = !filters.status.length || filters.status.includes(game.status);
        const matchesPlatform = !filters.platform.length || filters.platform.includes(game.platform);
        const matchesGenre = !filters.genre.length || filters.genre.includes(game.genre);
        const matchesYear = !filters.year.length || filters.year.includes(game.year);
        const matchesFavorite = !filters.favoriteOnly || game.favorite;
        const matchesFinished = !filters.hideFinished || game.status !== 'Completed';

        return matchesSearch && matchesStatus && matchesPlatform && matchesGenre && matchesYear && matchesFavorite && matchesFinished;
      })
      .sort((a, b) => {
        const direction = sortDirection === 'asc' ? 1 : -1;
        switch (sortOption) {
          case 'alphabetical':
            return a.title.localeCompare(b.title) * direction;
          case 'rating':
            return (a.rating - b.rating) * direction;
          case 'hours':
            return (parseInt(a.hours, 10) - parseInt(b.hours, 10)) * direction;
          case 'releaseDate':
            return (new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime()) * direction;
          case 'completion':
            return (parseInt(a.progress, 10) - parseInt(b.progress, 10)) * direction;
          case 'favorite':
            return (Number(b.favorite) - Number(a.favorite)) * direction;
          case 'recentlyPlayed':
            return (new Date(a.lastPlayed).getTime() - new Date(b.lastPlayed).getTime()) * direction;
          case 'recentlyAdded':
          default:
            return (new Date(a.addedAt).getTime() - new Date(b.addedAt).getTime()) * direction;
        }
      });
  }, [search, filters, sortOption, sortDirection]);

  const handleToggleFilter = (category: keyof LibraryFiltersState, value?: string) => {
    setFilters((current) => {
      if (category === 'favoriteOnly') {
        return { ...current, favoriteOnly: !current.favoriteOnly };
      }
      if (category === 'hideFinished') {
        return { ...current, hideFinished: !current.hideFinished };
      }
      if (!value) {
        return current;
      }
      const currentList = current[category] as string[];
      const nextList = currentList.includes(value)
        ? currentList.filter((item) => item !== value)
        : [...currentList, value];

      return { ...current, [category]: nextList };
    });
  };

  const gridColumns = viewMode === 'list' ? 'grid-cols-1' : 'lg:grid-cols-3';

  return (
    <div className="space-y-8">
      <LibraryToolbar
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        search={search}
        onSearchChange={setSearch}
        sortOption={sortOption}
        onSortChange={setSortOption}
        sortDirection={sortDirection}
        onToggleSortDirection={() => setSortDirection((current) => (current === 'asc' ? 'desc' : 'asc'))}
        resultCount={filteredGames.length}
        activeFilters={activeFilterCount}
        onToggleFilters={() => setFiltersOpen((current) => !current)}
      />
      <LibraryFilters
        expanded={filtersOpen}
        filters={filters}
        onToggleExpand={() => setFiltersOpen((current) => !current)}
        onToggleFilter={handleToggleFilter}
      />
      <LibraryStats />
      {filteredGames.length === 0 ? (
        <LibraryEmpty query={search} filtersActive={activeFilterCount > 0} />
      ) : (
        <section className={`grid gap-6 ${viewMode === 'list' ? 'grid-cols-1' : 'lg:grid-cols-3'}`}>
          {filteredGames.map((game) => (
            <LibraryCard key={game.id} variant={viewMode} {...game} />
          ))}
        </section>
      )}
    </div>
  );
}

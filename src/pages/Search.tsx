import { useMemo, useState } from 'react';
import { SearchFilters, SearchFiltersState } from '../components/search/SearchFilters';
import { SearchResults, SearchResult } from '../components/search/SearchResults';
import { SearchToolbar } from '../components/search/SearchToolbar';
import { SearchTrending } from '../components/search/SearchTrending';

const mockLibrary: SearchResult[] = [
  {
    id: 'cloud-str',
    title: 'Cloud Striker',
    year: '2024',
    genres: ['Action', 'Shooter'],
    platforms: ['PC', 'PS5'],
    multiplayer: ['Multiplayer'],
    description: 'A fast-paced aerial combat adventure with deep progression and rich visual storytelling.',
    rating: '9.2',
    developer: 'Indie Nova',
    publisher: 'Skyline Games',
    cover: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'ember-fall',
    title: 'Emberfall',
    year: '2023',
    genres: ['RPG', 'Adventure'],
    platforms: ['PC', 'Switch'],
    multiplayer: ['Singleplayer'],
    description: 'Explore a mystical world, build your party, and uncover ancient secrets in this narrative-driven RPG.',
    rating: '8.9',
    developer: 'Lumen Forge',
    publisher: 'Northern Light',
    cover: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'neon-drift',
    title: 'Neon Drift',
    year: '2024',
    genres: ['Racing', 'Action'],
    platforms: ['PC', 'PS5'],
    multiplayer: ['Multiplayer'],
    description: 'High-speed street racing under neon skies with real-time vehicle upgrades and dramatic chases.',
    rating: '8.5',
    developer: 'Pulse Studio',
    publisher: 'Arcade Pulse',
    cover: 'https://images.unsplash.com/photo-1529270292861-0de0f3b0bad4?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'moonward',
    title: 'Moonward',
    year: '2024',
    genres: ['Adventure', 'Puzzle'],
    platforms: ['Switch'],
    multiplayer: ['Singleplayer'],
    description: 'A thoughtful puzzle adventure that blends quiet exploration with emotional storytelling.',
    rating: '9.0',
    developer: 'Lunar Echo',
    publisher: 'Horizon Works',
    cover: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
  },
];

const trendingSections = [
  {
    title: 'Trending Games',
    items: [mockLibrary[0], mockLibrary[2], mockLibrary[1]],
  },
  {
    title: 'Recently Released',
    items: [mockLibrary[0], mockLibrary[3], mockLibrary[2]],
  },
];

const defaultFilters: SearchFiltersState = {
  platform: [],
  genre: [],
  year: [],
  developer: [],
  publisher: [],
  multiplayer: [],
  rating: [],
};

export function SearchPage() {
  const [query, setQuery] = useState('');
  const [searchFilters, setSearchFilters] = useState<SearchFiltersState>(defaultFilters);
  const [expanded, setExpanded] = useState(true);
  const [sortBy, setSortBy] = useState('relevance');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [loading, setLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState(['space opera', 'adventure', 'RPG', 'PC']);
  const [randomGame, setRandomGame] = useState<SearchResult>(() => mockLibrary[Math.floor(Math.random() * mockLibrary.length)]);

  const filteredResults = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return mockLibrary
      .filter((item) => {
        if (!normalizedQuery) {
          return true;
        }

        return (
          item.title.toLowerCase().includes(normalizedQuery) ||
          item.genres.some((genre) => genre.toLowerCase().includes(normalizedQuery)) ||
          item.platforms.some((platform) => platform.toLowerCase().includes(normalizedQuery)) ||
          item.developer.toLowerCase().includes(normalizedQuery) ||
          item.publisher.toLowerCase().includes(normalizedQuery)
        );
      })
      .filter((item) => {
        if (searchFilters.platform.length && !item.platforms.some((platform) => searchFilters.platform.includes(platform))) {
          return false;
        }
        if (searchFilters.genre.length && !item.genres.some((genre) => searchFilters.genre.includes(genre))) {
          return false;
        }
        if (searchFilters.year.length && !searchFilters.year.includes(item.year)) {
          return false;
        }
        if (searchFilters.publisher.length && !searchFilters.publisher.includes(item.publisher)) {
          return false;
        }
        if (searchFilters.developer.length && !searchFilters.developer.includes(item.developer)) {
          return false;
        }
        if (searchFilters.multiplayer.length && !item.multiplayer.some((mode) => searchFilters.multiplayer.includes(mode))) {
          return false;
        }
        if (searchFilters.rating.length) {
          const numericRating = parseFloat(item.rating);
          const hasRatingMatch = searchFilters.rating.some((ratingFilter) => {
            if (ratingFilter.endsWith('+')) {
              return numericRating >= parseFloat(ratingFilter.replace('+', ''));
            }
            return ratingFilter === item.rating;
          });
          if (!hasRatingMatch) {
            return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        const direction = sortDirection === 'asc' ? 1 : -1;
        switch (sortBy) {
          case 'releaseDate':
            return (parseInt(a.year, 10) - parseInt(b.year, 10)) * direction;
          case 'rating':
            return (parseFloat(a.rating) - parseFloat(b.rating)) * direction;
          case 'alphabetical':
            return a.title.localeCompare(b.title) * direction;
          default:
            return 0;
        }
      });
  }, [query, searchFilters, sortBy, sortDirection]);

  const handleRecentSearch = (value: string) => {
    setQuery(value);
    setLoading(true);
    window.setTimeout(() => setLoading(false), 250);
  };

  const handleClear = () => {
    setQuery('');
  };

  const handleClearHistory = () => {
    setRecentSearches([]);
  };

  const handleRandomize = () => {
    setRandomGame(mockLibrary[Math.floor(Math.random() * mockLibrary.length)]);
  };

  const handleToggleFilter = (category: keyof SearchFiltersState, value: string) => {
    setSearchFilters((current) => {
      const values = current[category];
      return {
        ...current,
        [category]: values.includes(value) ? values.filter((item) => item !== value) : [...values, value],
      };
    });
  };

  return (
    <div className="space-y-8">
      <SearchToolbar
        query={query}
        onQueryChange={(value) => {
          setQuery(value);
          setLoading(true);
          window.setTimeout(() => setLoading(false), 250);
        }}
        onClear={handleClear}
        sortBy={sortBy}
        onSortChange={setSortBy}
        sortDirection={sortDirection}
        onToggleSortDirection={() => setSortDirection((current) => (current === 'asc' ? 'desc' : 'asc'))}
        loading={loading}
      />

      <SearchFilters
        expanded={expanded}
        filters={searchFilters}
        onToggleFilter={handleToggleFilter}
        onToggleExpand={() => setExpanded((current) => !current)}
      />

      <div className="grid gap-6 xl:grid-cols-[1.5fr_0.95fr]">
        <div className="space-y-6">
          {query || Object.values(searchFilters).some((values) => values.length > 0) ? (
            filteredResults.length ? (
              <SearchResults results={filteredResults} />
            ) : (
              <section className="rounded-[2rem] border border-border bg-surface p-10 text-center shadow-soft">
                <h2 className="text-2xl font-semibold text-white">No results found</h2>
                <p className="mt-4 text-sm text-muted">Try broadening your query, removing filters, or searching for another genre.</p>
              </section>
            )
          ) : (
            <SearchTrending trending={trendingSections} randomGame={randomGame} onRandomize={handleRandomize} />
          )}
        </div>

        <aside className="space-y-6">
          <section className="rounded-[2rem] border border-border bg-surface p-6 shadow-soft">
            <h2 className="text-xl font-semibold text-white">Recent searches</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {recentSearches.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleRecentSearch(item)}
                  className="rounded-2xl border border-border bg-background/70 px-4 py-2 text-sm text-muted transition hover:border-accent hover:text-white"
                >
                  {item}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={handleClearHistory}
              className="mt-5 inline-flex items-center justify-center rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-muted transition hover:border-accent hover:text-accent"
            >
              Clear history
            </button>
          </section>

          <section className="rounded-[2rem] border border-border bg-surface p-6 shadow-soft">
            <h2 className="text-xl font-semibold text-white">Search suggestions</h2>
            <div className="mt-4 grid gap-3 text-sm text-muted">
              <p>Games, developers, publishers, franchises, genres</p>
              <p>Try: "space", "adventure", "RPG", "open world"</p>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}

import { useMemo, useState } from 'react';
import { UserSearchToolbar } from '../components/users/UserSearchToolbar';
import { UserCard } from '../components/users/UserCard';
import { UsersStats } from '../components/users/UsersStats';
import { ActivityFeed } from '../components/users/ActivityFeed';

const users = [
  {
    id: 'luna',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    username: 'luna_nova',
    displayName: 'Luna Nova',
    bio: 'Speedrunner, library curator, and lover of sci-fi RPGs.',
    platform: 'PC',
    games: 342,
    friends: 87,
    featuredLabel: 'Featured',
    online: true,
  },
  {
    id: 'arcade0',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    username: 'arcade0',
    displayName: 'Arcade Zero',
    bio: 'Collector of retro and indie games with a passion for public collections.',
    platform: 'Switch',
    games: 281,
    friends: 112,
    featuredLabel: 'Popular',
    online: false,
  },
  {
    id: 'riftwalker',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    username: 'riftwalker',
    displayName: 'Rift Walker',
    bio: 'Always chasing the next open world adventure and co-op run.',
    platform: 'PS5',
    games: 197,
    friends: 68,
    featuredLabel: 'Suggested',
    online: true,
  },
  {
    id: 'pixelqueen',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
    username: 'pixelqueen',
    displayName: 'Pixel Queen',
    bio: 'Expert in achievements and completion rates across action RPGs.',
    platform: 'PC',
    games: 314,
    friends: 98,
    featuredLabel: 'Top curator',
    online: false,
  },
];

const activity = [
  { id: 'act-1', message: 'Finished Stormhaven on Nightmare difficulty.', username: 'luna_nova', when: '12m ago' },
  { id: 'act-2', message: 'Started Emberfall and shared progress.', username: 'arcade0', when: '35m ago' },
  { id: 'act-3', message: 'Added 3 new RPGs to their public library.', username: 'riftwalker', when: '1h ago' },
  { id: 'act-4', message: 'Reached 100% completion in Pixel Runner.', username: 'pixelqueen', when: '2h ago' },
];

const recentSearches = ['@luna_nova', 'RPG fans', 'Switch players', 'public libraries'];

export function UsersPage() {
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [loading, setLoading] = useState(false);

  const filteredUsers = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return users
      .filter((user) =>
        !normalizedQuery ||
        user.username.toLowerCase().includes(normalizedQuery) ||
        user.displayName.toLowerCase().includes(normalizedQuery) ||
        user.bio.toLowerCase().includes(normalizedQuery) ||
        user.platform.toLowerCase().includes(normalizedQuery),
      )
      .sort((a, b) => {
        if (sortBy === 'games') return b.games - a.games;
        if (sortBy === 'friends') return b.friends - a.friends;
        if (sortBy === 'followers') return b.friends - a.friends;
        return a.displayName.localeCompare(b.displayName);
      });
  }, [query, sortBy]);

  const handleQueryChange = (value: string) => {
    setQuery(value);
    setLoading(true);
    window.setTimeout(() => setLoading(false), 250);
  };

  return (
    <div className="space-y-8">
      <UserSearchToolbar query={query} onQueryChange={handleQueryChange} sortBy={sortBy} onSortChange={setSortBy} loading={loading} />

      <div className="grid gap-6 xl:grid-cols-[1.45fr_0.95fr]">
        <div className="space-y-6">
          {filteredUsers.length ? (
            <section className="grid gap-6 xl:grid-cols-2">
              {filteredUsers.map((user) => (
                <UserCard key={user.id} {...user} />
              ))}
            </section>
          ) : (
            <section className="rounded-[2rem] border border-border bg-surface p-10 text-center shadow-soft">
              <h2 className="text-2xl font-semibold text-white">No users found</h2>
              <p className="mt-4 text-sm text-muted">Try another username or broaden your search terms.</p>
            </section>
          )}

          <ActivityFeed items={activity} />
        </div>

        <aside className="space-y-6">
          <section className="rounded-[2rem] border border-border bg-surface p-6 shadow-soft">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-accent">Featured users</p>
                <h2 className="mt-2 text-xl font-semibold text-white">Recommended to follow</h2>
              </div>
              <span className="rounded-full bg-background/70 px-3 py-2 text-xs uppercase tracking-[0.24em] text-muted">Top picks</span>
            </div>
            <div className="mt-6 space-y-4">
              {users.slice(0, 2).map((user) => (
                <div key={user.id} className="flex items-center gap-4 rounded-[1.75rem] border border-border bg-background/70 p-4">
                  <img src={user.avatar} alt={user.username} className="h-14 w-14 rounded-3xl object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-white">{user.displayName}</p>
                    <p className="text-xs text-muted">{user.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-border bg-surface p-6 shadow-soft">
            <h2 className="text-xl font-semibold text-white">Recent searches</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {recentSearches.map((term) => (
                <button
                  key={term}
                  type="button"
                  className="rounded-2xl border border-border bg-background/70 px-4 py-2 text-sm text-muted transition hover:border-accent hover:text-white"
                >
                  {term}
                </button>
              ))}
            </div>
          </section>

          <UsersStats />
        </aside>
      </div>
    </div>
  );
}

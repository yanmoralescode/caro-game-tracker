import { useState } from 'react';
import { ProfileHeader } from '../components/profile/ProfileHeader';
import { ProfileStats } from '../components/profile/ProfileStats';
import { ProfilePlaying } from '../components/profile/ProfilePlaying';
import { ProfileFavorites } from '../components/profile/ProfileFavorites';
import { ProfileLibraryPreview } from '../components/profile/ProfileLibraryPreview';
import { ProfileFriends } from '../components/profile/ProfileFriends';
import { ProfileBadges } from '../components/profile/ProfileBadges';
import { ProfileReviews } from '../components/profile/ProfileReviews';
import { ProfileCollections } from '../components/profile/ProfileCollections';
import { ActivityFeed } from '../components/users/ActivityFeed';

const profile = {
  banner: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1800&q=80',
  avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
  username: 'luna_nova',
  displayName: 'Luna Nova',
  bio: 'Speedrunner, library curator, and lover of sci-fi RPGs. I collect achievements, track every hidden ending, and help other players find their next favorite title.',
  joined: 'Jan 2022',
  country: 'Iceland',
  favoritePlatform: 'PC',
  favoriteGenre: 'RPG',
  visibility: 'Public',
};

const playingGames = [
  {
    id: 'stormhaven',
    title: 'Stormhaven',
    platform: 'PC',
    hours: '38h',
    progress: '62%',
    cover: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'emberfall',
    title: 'Emberfall',
    platform: 'Switch',
    hours: '22h',
    progress: '44%',
    cover: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
  },
];

const favoriteGames = [
  {
    id: 'horizon',
    title: 'Horizon Forbidden West',
    platform: 'PS5',
    cover: 'https://images.unsplash.com/photo-1529270292861-0de0f3b0bad4?auto=format&fit=crop&w=900&q=80',
    rating: '9.3',
  },
  {
    id: 'loop-hero',
    title: 'Loop Hero',
    platform: 'PC',
    cover: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80',
    rating: '8.8',
  },
];

const libraryPreview = [
  { id: 'lp-1', label: 'Recently added', value: '12' },
  { id: 'lp-2', label: 'Recently played', value: '8' },
  { id: 'lp-3', label: 'Recently completed', value: '5' },
  { id: 'lp-4', label: 'Favorite games', value: '18' },
];

const friends = [
  { id: 'f-1', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80', username: 'arcade0', status: 'Online', currentGame: 'Emberfall' },
  { id: 'f-2', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80', username: 'riftwalker', status: 'Away', currentGame: 'Stormhaven' },
];

const platformBadges = ['Steam', 'PlayStation', 'Xbox', 'Nintendo', 'PC'];
const genreBadges = ['RPG', 'Action', 'Adventure', 'Strategy', 'Puzzle'];

const reviews = [
  { id: 'r-1', game: 'Stormhaven', score: '9.2', excerpt: 'A beautifully crafted world with a satisfying combat loop and memorable characters.', date: 'Jul 16, 2026' },
  { id: 'r-2', game: 'Emberfall', score: '8.9', excerpt: 'Great storytelling and engaging exploration. The party customization is a highlight.', date: 'Jun 28, 2026' },
];

const collections = [
  { id: 'c-1', title: 'Completed in 2026', subtitle: 'Epic RPG journeys completed this year', items: 14 },
  { id: 'c-2', title: 'Retro games', subtitle: 'Classic titles with timeless gameplay', items: 21 },
  { id: 'c-3', title: 'Horror games', subtitle: 'Creepiest worlds and unforgettable scares', items: 9 },
  { id: 'c-4', title: 'Best RPGs', subtitle: 'My favorite role-playing adventures', items: 27 },
];

const activity = [
  { id: 'a-1', message: 'Started Stormhaven on Hardcore mode.', username: 'luna_nova', when: '12m ago' },
  { id: 'a-2', message: 'Completed a new chapter in Emberfall.', username: 'luna_nova', when: '1h ago' },
  { id: 'a-3', message: 'Added Hollow Knight to the wishlist.', username: 'luna_nova', when: '2h ago' },
];

export function ProfilePage() {
  const [loading] = useState(false);
  const [error] = useState(false);

  if (error) {
    return (
      <section className="rounded-[2rem] border border-border bg-surface p-10 shadow-soft text-center">
        <h1 className="text-3xl font-semibold text-white">Profile unavailable</h1>
        <p className="mt-4 text-sm text-muted">Something went wrong while loading profile details. Please try again.</p>
        <button className="mt-6 rounded-2xl border border-border bg-accent px-6 py-3 text-sm font-semibold text-background transition hover:bg-accentDark">
          Retry
        </button>
      </section>
    );
  }

  if (loading) {
    return (
      <section className="space-y-6">
        <div className="h-96 rounded-[2rem] animate-pulse bg-background/70" />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="h-36 rounded-[1.75rem] animate-pulse bg-background/70" />
          ))}
        </div>
      </section>
    );
  }

  return (
    <div className="space-y-8">
      <ProfileHeader {...profile} />
      <ProfileStats />
      <ProfilePlaying games={playingGames} />
      <ProfileFavorites games={favoriteGames} />
      <ProfileLibraryPreview items={libraryPreview} />
      <ProfileFriends friends={friends} />
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <ProfileBadges title="Favorite platforms" items={platformBadges} />
        <ProfileBadges title="Favorite genres" items={genreBadges} />
      </div>
      <ActivityFeed items={activity} />
      <ProfileReviews reviews={reviews} />
      <ProfileCollections collections={collections} />
    </div>
  );
}

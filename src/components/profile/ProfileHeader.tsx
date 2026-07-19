import { Pencil, Globe, MapPin, Sparkles, Gamepad } from 'lucide-react';

interface ProfileHeaderProps {
  banner: string;
  avatar: string;
  username: string;
  displayName: string;
  bio: string;
  joined: string;
  country: string;
  favoritePlatform: string;
  favoriteGenre: string;
  visibility: string;
}

export function ProfileHeader({
  banner,
  avatar,
  username,
  displayName,
  bio,
  joined,
  country,
  favoritePlatform,
  favoriteGenre,
  visibility,
}: ProfileHeaderProps) {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-border bg-surface shadow-card">
      <div className="relative h-72 overflow-hidden">
        <img src={banner} alt="Profile banner" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/90" />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-6 text-white">
          <div className="flex flex-wrap items-end gap-5">
            <img src={avatar} alt={username} className="h-28 w-28 rounded-[2rem] border-4 border-background object-cover" />
            <div className="min-w-0 flex-1">
              <p className="text-sm uppercase tracking-[0.24em] text-accent">Profile</p>
              <h1 className="truncate text-4xl font-semibold">{displayName}</h1>
              <p className="mt-2 text-sm text-muted">@{username}</p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-2xl border border-border bg-background/80 px-5 py-3 text-sm text-white transition hover:border-accent hover:text-accent">
              <Pencil className="h-4 w-4" />
              Edit profile
            </button>
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">{bio}</p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm text-muted">
            <span className="inline-flex items-center gap-2 rounded-full bg-background/70 px-4 py-2">
              <MapPin className="h-4 w-4" />
              {country}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-background/70 px-4 py-2">
              <Sparkles className="h-4 w-4" />
              Joined {joined}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-background/70 px-4 py-2">
              <Gamepad className="h-4 w-4" />
              {favoritePlatform}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-background/70 px-4 py-2">
              <Globe className="h-4 w-4" />
              {favoriteGenre}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-background/70 px-4 py-2 uppercase tracking-[0.2em] text-xs text-muted">
              {visibility}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

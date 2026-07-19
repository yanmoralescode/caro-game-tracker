import { MessageCircle, Star, Users } from 'lucide-react';

interface UserCardProps {
  avatar: string;
  username: string;
  displayName: string;
  bio: string;
  platform: string;
  games: number;
  friends: number;
  featuredLabel?: string;
  online?: boolean;
}

export function UserCard({ avatar, username, displayName, bio, platform, games, friends, featuredLabel, online }: UserCardProps) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-soft transition hover:-translate-y-1 hover:border-accent">
      <div className="flex items-center gap-4 border-b border-border px-6 py-5">
        <img src={avatar} alt={username} className="h-16 w-16 rounded-3xl object-cover" />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="truncate text-lg font-semibold text-white">{displayName}</h3>
            {online ? <span className="rounded-full bg-emerald-500 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-black">Online</span> : null}
          </div>
          <p className="text-sm text-muted">@{username}</p>
        </div>
        {featuredLabel ? (
          <span className="rounded-full bg-accent/10 px-3 py-2 text-xs uppercase tracking-[0.24em] text-accent">{featuredLabel}</span>
        ) : null}
      </div>

      <div className="space-y-4 p-6 text-sm text-muted">
        <p className="leading-6 text-white">{bio}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-3xl bg-background/70 p-4">
            <p className="text-xs uppercase tracking-[0.24em] text-muted">Favorite platform</p>
            <p className="mt-2 text-sm text-white">{platform}</p>
          </div>
          <div className="rounded-3xl bg-background/70 p-4">
            <p className="text-xs uppercase tracking-[0.24em] text-muted">Games</p>
            <p className="mt-2 text-sm text-white">{games}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 border-t border-border px-6 py-5">
        <button className="inline-flex items-center gap-2 rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-white transition hover:border-accent hover:text-accent">
          <Users className="h-4 w-4" />
          Profile
        </button>
        <button className="inline-flex items-center gap-2 rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-muted transition hover:border-accent hover:text-accent">
          <MessageCircle className="h-4 w-4" />
          Message
        </button>
        <div className="ml-auto flex items-center gap-2 text-sm text-muted">
          <Star className="h-4 w-4 text-accent" />
          {friends} friends
        </div>
      </div>
    </article>
  );
}

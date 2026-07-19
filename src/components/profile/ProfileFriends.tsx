import { UserPlus } from 'lucide-react';

interface FriendCard {
  id: string;
  avatar: string;
  username: string;
  status: string;
  currentGame: string;
}

interface ProfileFriendsProps {
  friends: FriendCard[];
}

export function ProfileFriends({ friends }: ProfileFriendsProps) {
  return (
    <section className="rounded-[2rem] border border-border bg-surface p-6 shadow-soft">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-accent">Friends</p>
          <h2 className="mt-2 text-xl font-semibold text-white">Social circle</h2>
        </div>
        <button className="inline-flex items-center gap-2 rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-muted transition hover:border-accent hover:text-accent">
          <UserPlus className="h-4 w-4" />
          View all friends
        </button>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {friends.map((friend) => (
          <div key={friend.id} className="flex items-center gap-4 rounded-[1.75rem] border border-border bg-background/70 p-4 transition hover:border-accent">
            <img src={friend.avatar} alt={friend.username} className="h-14 w-14 rounded-3xl object-cover" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-white">{friend.username}</p>
              <p className="text-xs text-muted">{friend.status}</p>
              <p className="mt-2 text-xs text-muted">Playing {friend.currentGame}</p>
            </div>
            <button className="rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-muted transition hover:border-accent hover:text-accent">
              View profile
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

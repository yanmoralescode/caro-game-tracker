const friends = [
  { username: 'Maverick', status: 'Online', playing: 'Hollow Knight' },
  { username: 'Nova', status: 'Away', playing: 'Street Fighter 6' },
  { username: 'Echo', status: 'Online', playing: 'Returnal' },
];

export function DashboardFriends() {
  return (
    <section className="rounded-[2rem] border border-border bg-surface p-6 shadow-soft">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Friends preview</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Who's online</h2>
        </div>
        <button className="rounded-2xl border border-border bg-background/70 px-4 py-2 text-sm text-muted transition hover:border-accent hover:text-accent">
          View all friends
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {friends.map((friend) => (
          <div key={friend.username} className="flex items-center justify-between gap-4 rounded-3xl bg-background/70 p-4 text-sm text-muted">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-surface text-white">{friend.username[0]}</span>
              <div>
                <p className="font-semibold text-white">{friend.username}</p>
                <p>{friend.playing}</p>
              </div>
            </div>
            <span className={`rounded-full px-3 py-1 text-xs ${friend.status === 'Online' ? 'bg-emerald-500/15 text-emerald-300' : 'bg-yellow-500/10 text-yellow-300'}`}>
              {friend.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

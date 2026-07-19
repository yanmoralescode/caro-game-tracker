interface ActivityItem {
  id: string;
  message: string;
  when: string;
  username: string;
}

interface ActivityFeedProps {
  items: ActivityItem[];
}

export function ActivityFeed({ items }: ActivityFeedProps) {
  return (
    <section className="rounded-[2rem] border border-border bg-surface p-6 shadow-soft">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-accent">Activity feed</p>
          <h2 className="mt-2 text-xl font-semibold text-white">Latest community updates</h2>
        </div>
      </div>
      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div key={item.id} className="rounded-[1.75rem] border border-border bg-background/70 p-4 text-sm text-muted transition hover:border-accent">
            <p className="text-white">{item.message}</p>
            <p className="mt-2 text-xs text-muted">{item.username} · {item.when}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

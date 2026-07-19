const activity = [
  { label: 'Started Elden Ring', time: '1h ago' },
  { label: 'Finished Celeste', time: '3h ago' },
  { label: 'Added Hollow Knight', time: 'Yesterday' },
  { label: 'Updated rating for Disco Elysium', time: '2 days ago' },
  { label: 'Completed Resident Evil 4', time: '4 days ago' },
];

export function DashboardActivity() {
  return (
    <section className="rounded-[2rem] border border-border bg-surface p-6 shadow-soft">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Activity timeline</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Recent activity</h2>
        </div>
      </div>
      <div className="mt-6 space-y-4">
        {activity.map((item) => (
          <div key={item.label} className="flex items-center justify-between rounded-3xl bg-background/70 p-4 text-sm text-muted">
            <p>{item.label}</p>
            <span>{item.time}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

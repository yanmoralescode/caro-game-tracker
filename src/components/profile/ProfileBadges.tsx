interface BadgeProps {
  label: string;
}

function Badge({ label }: BadgeProps) {
  return (
    <span className="rounded-full bg-background/70 px-4 py-2 text-sm text-white transition hover:bg-accent/60">
      {label}
    </span>
  );
}

interface ProfileBadgesProps {
  title: string;
  items: string[];
}

export function ProfileBadges({ title, items }: ProfileBadgesProps) {
  return (
    <section className="rounded-[2rem] border border-border bg-surface p-6 shadow-soft">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-accent">{title}</p>
          <h2 className="mt-2 text-xl font-semibold text-white">{title}</h2>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        {items.map((item) => (
          <Badge key={item} label={item} />
        ))}
      </div>
    </section>
  );
}

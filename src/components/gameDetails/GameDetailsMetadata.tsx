interface GameDetailsMetadataItem {
  label: string;
  value: string;
}

interface GameDetailsMetadataProps {
  items: GameDetailsMetadataItem[];
}

export function GameDetailsMetadata({ items }: GameDetailsMetadataProps) {
  return (
    <section className="rounded-[2rem] border border-border bg-surface p-6 shadow-soft">
      <h2 className="text-xl font-semibold text-white">Metadata</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <article key={item.label} className="rounded-[1.75rem] border border-border bg-background/70 p-4 text-sm text-muted">
            <p className="uppercase tracking-[0.2em] text-accent">{item.label}</p>
            <p className="mt-3 text-sm text-white">{item.value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

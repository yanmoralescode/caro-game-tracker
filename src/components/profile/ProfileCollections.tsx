interface Collection {
  id: string;
  title: string;
  subtitle: string;
  items: number;
}

interface ProfileCollectionsProps {
  collections: Collection[];
}

export function ProfileCollections({ collections }: ProfileCollectionsProps) {
  return (
    <section className="rounded-[2rem] border border-border bg-surface p-6 shadow-soft">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-accent">Collections</p>
          <h2 className="mt-2 text-xl font-semibold text-white">Curated shelves</h2>
        </div>
        <button className="inline-flex items-center gap-2 rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-muted transition hover:border-accent hover:text-accent">
          View all collections
        </button>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {collections.map((collection) => (
          <article key={collection.id} className="rounded-[1.75rem] border border-border bg-background/70 p-5 text-sm text-muted transition hover:-translate-y-1">
            <p className="uppercase tracking-[0.2em] text-accent">{collection.title}</p>
            <p className="mt-3 text-white">{collection.subtitle}</p>
            <p className="mt-4 text-sm text-muted">{collection.items} games</p>
          </article>
        ))}
      </div>
    </section>
  );
}

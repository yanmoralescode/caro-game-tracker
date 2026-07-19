import { Clock3, Heart, PlusCircle, Sparkles } from 'lucide-react';

interface LibraryPreviewItem {
  id: string;
  label: string;
  value: string;
}

interface ProfileLibraryPreviewProps {
  items: LibraryPreviewItem[];
}

export function ProfileLibraryPreview({ items }: ProfileLibraryPreviewProps) {
  return (
    <section className="rounded-[2rem] border border-border bg-surface p-6 shadow-soft">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-accent">Public library</p>
          <h2 className="mt-2 text-xl font-semibold text-white">Preview</h2>
        </div>
        <button className="inline-flex items-center gap-2 rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-muted transition hover:border-accent hover:text-accent">
          View full library
        </button>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <article key={item.id} className="rounded-[1.75rem] border border-border bg-background/70 p-4 text-sm text-muted">
            <p className="uppercase tracking-[0.24em] text-accent">{item.label}</p>
            <p className="mt-3 text-3xl font-semibold text-white">{item.value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

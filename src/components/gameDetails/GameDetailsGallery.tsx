interface Screenshot {
  id: string;
  src: string;
  alt: string;
}

interface GameDetailsGalleryProps {
  screenshots: Screenshot[];
}

export function GameDetailsGallery({ screenshots }: GameDetailsGalleryProps) {
  return (
    <section className="rounded-[2rem] border border-border bg-surface p-6 shadow-soft">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-accent">Screenshots</p>
          <h2 className="mt-2 text-xl font-semibold text-white">Visual highlights</h2>
        </div>
        <span className="rounded-full bg-background/70 px-3 py-2 text-sm text-muted">3 images</span>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {screenshots.map((shot) => (
          <div key={shot.id} className="overflow-hidden rounded-[1.75rem] border border-border bg-background/70 shadow-soft transition hover:-translate-y-1">
            <img src={shot.src} alt={shot.alt} className="h-52 w-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}

import { PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LibraryEmptyProps {
  query?: string;
  filtersActive?: boolean;
}

export function LibraryEmpty({ query, filtersActive }: LibraryEmptyProps) {
  const isSearchEmpty = Boolean(query?.length) || filtersActive;

  return (
    <section className="flex min-h-[420px] flex-col items-center justify-center rounded-[2rem] border border-border bg-surface p-10 text-center shadow-soft">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 text-accent">
        <PlusCircle className="h-10 w-10" />
      </div>
      <h2 className="mt-6 text-3xl font-semibold text-white">
        {isSearchEmpty ? 'No games matched your search or filters' : 'Your library is ready for action'}
      </h2>
      <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
        {isSearchEmpty
          ? 'Try broadening your search, changing filters, or clearing the view mode to discover more titles.'
          : 'Add games to Caro to keep them organized, track progress, and discover new titles without losing momentum.'}
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/app/search" className="rounded-2xl bg-accent px-6 py-3 text-sm font-semibold text-background transition hover:bg-accentDark">
          Search games
        </Link>
        <Link to="/app/dashboard" className="rounded-2xl border border-border px-6 py-3 text-sm text-muted transition hover:border-accent hover:text-accent">
          Random game
        </Link>
      </div>
    </section>
  );
}

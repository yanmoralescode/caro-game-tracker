import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <section className="animate-fade rounded-3xl border border-border bg-surface p-10 shadow-card">
      <h1 className="text-3xl font-semibold text-white">Page Not Found</h1>
      <p className="mt-4 text-muted">The page you are looking for does not exist.</p>
      <Link to="/" className="mt-6 inline-flex rounded-2xl bg-accent px-5 py-3 text-sm font-semibold text-background transition hover:bg-accentDark">
        Return home
      </Link>
    </section>
  );
}

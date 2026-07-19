import { Link, Outlet } from 'react-router-dom';
import { Footer } from '../navigation/Footer';

export function AuthPageLayout() {
  return (
    <div className="min-h-screen bg-background text-text">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-start">
          <div className="space-y-8">
            <Link
              to="/"
              className="inline-flex items-center gap-3 rounded-2xl border border-border bg-surface px-5 py-3 text-sm text-white shadow-soft transition hover:border-accent"
            >
              Back to Caro
            </Link>
            <div className="max-w-xl space-y-5 rounded-2xl border border-border bg-surface/80 p-8 shadow-soft backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.24em] text-accent">Authentication</p>
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold text-white">Secure access for every Caro player.</h1>
                <p className="text-lg leading-8 text-muted">
                  Sign in, register, or recover your account with a clean and confident experience that prepares Caro for future backend integration.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-background/70 p-5 text-sm text-muted">
                  <p className="font-semibold text-white">Modern forms</p>
                  <p className="mt-2">Clear labels, friendly validation, and visible feedback for every field.</p>
                </div>
                <div className="rounded-2xl border border-border bg-background/70 p-5 text-sm text-muted">
                  <p className="font-semibold text-white">Trusted flow</p>
                  <p className="mt-2">Drafted for login, register, reset, and email verification with future-proof routing.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-8 shadow-card">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

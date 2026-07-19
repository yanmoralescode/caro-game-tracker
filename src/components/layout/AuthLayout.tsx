import { Outlet } from 'react-router-dom';
import { Sidebar } from '../navigation/Sidebar';
import { TopNavigation } from '../navigation/TopNavigation';
import { Footer } from '../navigation/Footer';

export function AuthLayout() {
  return (
    <div className="min-h-screen bg-background text-text">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-[280px_1fr] gap-6 px-6 py-6 xl:px-8">
        <Sidebar />
        <div className="flex min-h-screen flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-soft">
          <TopNavigation />
          <main className="flex-1 overflow-y-auto px-6 py-6 xl:px-8">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

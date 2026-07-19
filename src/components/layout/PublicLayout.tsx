import { Outlet } from 'react-router-dom';
import { Footer } from '../navigation/Footer';
import { LandingNav } from '../landing/LandingNav';

export function PublicLayout() {
  return (
    <div className="min-h-screen bg-background text-text">
      <LandingNav />
      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

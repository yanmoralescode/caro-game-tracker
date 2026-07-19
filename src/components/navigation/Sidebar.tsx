import { NavLink } from 'react-router-dom';
import { Gamepad, LayoutDashboard, Search, Users, User } from 'lucide-react';

const navItems = [
  { label: 'Dashboard', to: '/app/dashboard', icon: LayoutDashboard },
  { label: 'Library', to: '/app/library', icon: Gamepad },
  { label: 'Search', to: '/app/search', icon: Search },
  { label: 'Users', to: '/app/users', icon: Users },
  { label: 'Profile', to: '/app/profile', icon: User },
];

export function Sidebar() {
  return (
    <aside className="flex min-h-screen flex-col gap-6 rounded-3xl border border-border bg-surface p-6 shadow-card">
      <div className="flex items-center gap-3">
        <img src="/src/logo.png" alt="Caro logo" className="h-10 w-10 rounded-2xl" />
        <div>
          <p className="font-semibold text-white">Caro</p>
          <p className="text-sm text-muted">Game tracker hub</p>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  isActive ? 'bg-accent text-background' : 'text-muted hover:bg-white/5 hover:text-white'
                }`
              }
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </NavLink>
          );
        })}
      </nav>

      <div className="rounded-3xl border border-border bg-background/50 p-4 text-sm text-muted">
        <p className="font-medium text-white">Random game</p>
        <p className="mt-2">Discover a new title with one tap.</p>
      </div>
    </aside>
  );
}

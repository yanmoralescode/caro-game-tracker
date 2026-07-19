import { ArrowRight, PlusCircle, Search, User, Video } from 'lucide-react';

const actions = [
  { title: 'Add Game', icon: PlusCircle, href: '/app/add-game' },
  { title: 'Search Games', icon: Search, href: '/app/search' },
  { title: 'Open Library', icon: Video, href: '/app/library' },
  { title: 'View Profile', icon: User, href: '/app/profile' },
];

export function DashboardActions() {
  return (
    <section className="rounded-[2rem] border border-border bg-surface p-6 shadow-soft">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <a
              key={action.title}
              href={action.href}
              className="group flex items-center justify-between rounded-[1.75rem] border border-border bg-background/70 px-5 py-5 text-white transition hover:-translate-y-1 hover:border-accent"
            >
              <div className="flex items-center gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-background">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-lg font-semibold">{action.title}</p>
                  <p className="text-sm text-muted">Quick action</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-accent transition group-hover:text-background" />
            </a>
          );
        })}
      </div>
    </section>
  );
}

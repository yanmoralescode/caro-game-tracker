import { ReactNode } from 'react';

interface DashboardCardProps {
  title: string;
  children: ReactNode;
  badge?: string;
}

export function DashboardCard({ title, children, badge }: DashboardCardProps) {
  return (
    <article className="group rounded-[2rem] border border-border bg-surface p-6 shadow-soft transition hover:-translate-y-1 hover:border-accent">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        {badge ? <span className="rounded-full bg-accent/15 px-3 py-1 text-sm text-accent">{badge}</span> : null}
      </div>
      {children}
    </article>
  );
}

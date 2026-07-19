import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface EmptyStateProps {
  title: string;
  description: string;
  action?: ReactNode;
  className?: string;
}

export function EmptyState({ title, description, action, className }: EmptyStateProps) {
  return (
    <section className={cn('card text-center', className)}>
      <div className="space-y-4">
        <p className="text-2xl font-semibold text-white">{title}</p>
        <p className="max-w-xl mx-auto text-sm leading-7 text-muted">{description}</p>
        {action ? <div className="mt-4">{action}</div> : null}
      </div>
    </section>
  );
}

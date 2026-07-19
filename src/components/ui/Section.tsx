import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface SectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ title, subtitle, description, children, className }: SectionProps) {
  return (
    <section className={cn('card', className)}>
      <div className="space-y-3 pb-4 border-b border-border">
        {subtitle ? <p className="text-sm uppercase tracking-[0.24em] text-accent">{subtitle}</p> : null}
        <h2 className="text-3xl font-semibold text-white">{title}</h2>
        {description ? <p className="max-w-xl text-sm leading-7 text-muted">{description}</p> : null}
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}

import { motion } from 'framer-motion';

const showcases = [
  {
    title: 'Dashboard',
    description: 'Overview of your active games, stats, and recommendations.',
    accent: 'from-cyan-500/20 via-transparent to-transparent',
  },
  {
    title: 'Library',
    description: 'Browse your collection with quick filters, sorting, and progress data.',
    accent: 'from-violet-500/20 via-transparent to-transparent',
  },
  {
    title: 'Search',
    description: 'Find games fast and add them to your collection in one flow.',
    accent: 'from-emerald-500/20 via-transparent to-transparent',
  },
  {
    title: 'Profile',
    description: 'Display your gaming persona, favorites, and recent activity.',
    accent: 'from-sky-500/20 via-transparent to-transparent',
  },
];

export function LandingShowcase() {
  return (
    <section id="showcase" className="space-y-10 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">Product showcase</p>
        <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">See Caro in action, no generic mockups.</h2>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {showcases.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative overflow-hidden rounded-[2rem] border border-border bg-surface p-6 shadow-soft"
          >
            <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-r ${item.accent} blur-3xl`} />
            <div className="relative grid gap-4">
              <span className="text-sm uppercase tracking-[0.2em] text-accent">{item.title}</span>
              <p className="text-lg font-semibold text-white">{item.title} preview</p>
              <p className="text-sm leading-6 text-muted">{item.description}</p>
              <div className="mt-4 rounded-3xl border border-border bg-background/60 p-5 text-sm text-muted">
                <p className="font-medium text-white">App interface preview</p>
                <p className="mt-3">This section uses actual product styling from the authenticated UI.</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

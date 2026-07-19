import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Is Caro free?',
    answer: 'Yes. Caro is designed to give players a modern library tracker with a polished experience, and the landing page reflects the initial product offering.',
  },
  {
    question: 'Can I track console games?',
    answer: 'Absolutely. Caro supports both modern and retro platforms, giving you a single place for console, PC, and handheld titles.',
  },
  {
    question: 'Does Caro support mobile devices?',
    answer: 'Yes. The interface is built to adapt naturally across desktop, tablet, and mobile screens.',
  },
  {
    question: 'Can I make my profile public?',
    answer: 'Yes. Public profiles are part of Caro’s social experience, so you can share collections and favorite games with friends.',
  },
];

export function LandingFAQ() {
  return (
    <section id="faq" className="py-16 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">FAQ</p>
        <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Frequently asked questions</h2>
        <p className="mt-5 text-lg leading-8 text-muted">
          Answers to the most common questions about how Caro helps you manage games, progress, and social profiles.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl gap-4">
        {faqs.map((item) => (
          <details key={item.question} className="group rounded-[1.75rem] border border-border bg-surface p-6 open:border-accent">
            <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-semibold text-white">
              {item.question}
              <ChevronDown className="h-5 w-5 text-accent transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <p className="mt-4 text-sm leading-7 text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

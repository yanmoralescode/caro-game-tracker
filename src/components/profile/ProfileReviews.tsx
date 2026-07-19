interface Review {
  id: string;
  game: string;
  score: string;
  excerpt: string;
  date: string;
}

interface ProfileReviewsProps {
  reviews: Review[];
}

export function ProfileReviews({ reviews }: ProfileReviewsProps) {
  return (
    <section className="rounded-[2rem] border border-border bg-surface p-6 shadow-soft">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-accent">Reviews</p>
          <h2 className="mt-2 text-xl font-semibold text-white">Review preview</h2>
        </div>
        <button className="inline-flex items-center gap-2 rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-muted transition hover:border-accent hover:text-accent">
          View all reviews
        </button>
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {reviews.map((review) => (
          <article key={review.id} className="rounded-[1.75rem] border border-border bg-background/70 p-5 text-sm text-muted transition hover:-translate-y-1">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-lg font-semibold text-white">{review.game}</p>
                <p className="mt-1 text-xs text-muted">{review.date}</p>
              </div>
              <span className="rounded-full bg-accent/10 px-3 py-2 text-sm text-accent">{review.score}</span>
            </div>
            <p className="mt-4 leading-6 text-white">{review.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

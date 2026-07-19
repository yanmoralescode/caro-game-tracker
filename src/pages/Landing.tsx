import { LandingHero } from '../components/landing/LandingHero';
import { LandingFeatures } from '../components/landing/LandingFeatures';
import { LandingShowcase } from '../components/landing/LandingShowcase';
import { LandingHowItWorks } from '../components/landing/LandingHowItWorks';
import { LandingComparison } from '../components/landing/LandingComparison';
import { LandingStatistics } from '../components/landing/LandingStatistics';
import { LandingFAQ } from '../components/landing/LandingFAQ';
import { LandingCTA } from '../components/landing/LandingCTA';

export function LandingPage() {
  return (
    <div className="bg-background text-text">
      <main className="space-y-16 px-6 py-10 lg:px-10 lg:py-14">
        <LandingHero />
        <LandingFeatures />
        <LandingShowcase />
        <LandingHowItWorks />
        <LandingComparison />
        <LandingStatistics />
        <LandingFAQ />
        <LandingCTA />
      </main>
    </div>
  );
}

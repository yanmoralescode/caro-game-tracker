import { DashboardHero } from '../components/dashboard/DashboardHero';
import { DashboardContinue } from '../components/dashboard/DashboardContinue';
import { DashboardStats } from '../components/dashboard/DashboardStats';
import { DashboardRandomGame } from '../components/dashboard/DashboardRandomGame';
import { DashboardRecentlyAdded } from '../components/dashboard/DashboardRecentlyAdded';
import { DashboardRecentlyPlayed } from '../components/dashboard/DashboardRecentlyPlayed';
import { DashboardActivity } from '../components/dashboard/DashboardActivity';
import { DashboardActions } from '../components/dashboard/DashboardActions';
import { DashboardFriends } from '../components/dashboard/DashboardFriends';
import { DashboardRecommendations } from '../components/dashboard/DashboardRecommendations';

export function DashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardHero />
      <DashboardContinue />
      <div className="grid gap-6 xl:grid-cols-[1.6fr_0.95fr]">
        <div className="space-y-6">
          <DashboardStats />
          <DashboardRecentlyAdded />
          <DashboardRecentlyPlayed />
          <DashboardRecommendations />
        </div>
        <div className="space-y-6">
          <DashboardRandomGame />
          <DashboardActions />
          <DashboardFriends />
          <DashboardActivity />
        </div>
      </div>
    </div>
  );
}

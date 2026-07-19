import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export function SessionExpiredPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.24em] text-accent">Session expired</p>
        <h2 className="text-3xl font-semibold text-white">Your session has ended</h2>
        <p className="max-w-xl text-sm leading-7 text-muted">
          For your security, your session has expired. Sign in again to continue using Caro.
        </p>
      </div>

      <Card className="bg-background/70 text-sm text-muted space-y-6">
        <div>
          <p className="text-lg font-semibold text-white">Session expired</p>
          <p className="mt-4">We&apos;ve kept your data safe. Just sign in again to pick up where you left off.</p>
        </div>
        <Button as={Link} to="/login" className="w-full text-center">
          Return to login
        </Button>
      </Card>
    </div>
  );
}

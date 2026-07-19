import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export function VerifyEmailSuccessPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.24em] text-accent">Email verified</p>
        <h2 className="text-3xl font-semibold text-white">Your email is confirmed</h2>
        <p className="max-w-xl text-sm leading-7 text-muted">
          Thanks for verifying your email. Your Caro account is now ready to use.
        </p>
      </div>

      <Card className="bg-background/70 text-sm text-muted space-y-6">
        <div>
          <p className="text-lg font-semibold text-white">Verification complete</p>
          <p className="mt-4">You can now sign in and access your dashboard, library, and saved activity.</p>
        </div>
        <Button as={Link} to="/login" className="w-full text-center">
          Go to login
        </Button>
      </Card>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export function AuthErrorPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.24em] text-accent">Authentication error</p>
        <h2 className="text-3xl font-semibold text-white">Something went wrong</h2>
        <p className="max-w-xl text-sm leading-7 text-muted">
          We couldn&apos;t complete your authentication request. Try again or return to the login screen.
        </p>
      </div>

      <Card className="bg-background/70 text-sm text-muted space-y-6">
        <div>
          <p className="text-lg font-semibold text-white">Session issue</p>
          <p className="mt-4">Your session may have expired or the sign-in flow was interrupted. Please try again.</p>
        </div>
        <Button as={Link} to="/login" className="w-full text-center">
          Back to login
        </Button>
      </Card>
    </div>
  );
}

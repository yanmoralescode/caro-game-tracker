import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export function VerifyEmailPage() {
  const { verifyEmail } = useAuth();
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleResend = async () => {
    setStatus('sending');
    await verifyEmail();
    setStatus('sent');
  };

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.24em] text-accent">Email verification</p>
        <h2 className="text-3xl font-semibold text-white">Verify your email</h2>
        <p className="max-w-xl text-sm leading-7 text-muted">
          We sent a verification link to your email address. Confirm your account to unlock the full Caro experience.
        </p>
      </div>

      <Card className="bg-background/70 text-sm text-muted space-y-6">
        <div>
          <p className="text-lg font-semibold text-white">Verification sent</p>
          <p className="mt-4">Check your inbox for the message from Caro. If you don&apos;t see it, wait a few minutes and refresh your inbox.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button type="button" className="w-full" onClick={handleResend}>
            {status === 'sending' ? 'Resending...' : 'Resend email'}
          </Button>
          <Button variant="secondary" as={Link} to="/login" className="w-full text-center">
            Continue later
          </Button>
        </div>
      </Card>
    </div>
  );
}

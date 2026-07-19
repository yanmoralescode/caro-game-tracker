import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';

interface ForgotPasswordForm {
  email: string;
}

export function ForgotPasswordPage() {
  const { sendResetLink } = useAuth();
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle');
  const [error, setError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordForm>({ defaultValues: { email: '' } });

  const onSubmit = async ({ email }: ForgotPasswordForm) => {
    setStatus('loading');
    setError('');

    try {
      await sendResetLink(email);
      setStatus('sent');
    } catch (reason) {
      setStatus('error');
      setError(typeof reason === 'string' ? reason : 'Unable to send reset link.');
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.24em] text-accent">Forgot password</p>
        <h2 className="text-3xl font-semibold text-white">Reset your password</h2>
        <p className="max-w-xl text-sm leading-7 text-muted">
          Enter the email address associated with your account and we&apos;ll send you a link to reset your password.
        </p>
      </div>

      {status === 'sent' ? (
        <Card className="bg-background/70 text-sm text-muted space-y-6">
          <div>
            <p className="text-lg font-semibold text-white">Link sent</p>
            <p className="mt-4">Check your inbox for the reset instructions. If you do not see the email, check your spam folder.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button as={Link} to="/login" className="w-full text-center">
            Return to login
          </Button>
          <Button variant="secondary" as={Link} to="/reset-password" className="w-full text-center">
            Enter new password
          </Button>
          </div>
        </Card>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input
            id="email"
            type="email"
            label="Email address"
            autoComplete="email"
            error={errors.email?.message}
            {...register('email', {
              required: 'Email is required.',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Enter a valid email address.',
              },
            })}
          />

          {error && <p className="text-sm text-danger">{error}</p>}

          <Button type="submit" className="w-full">
            Send reset link
          </Button>
        </form>
      )}

      <p className="text-sm text-muted">
        Remembered your password?{' '}
        <Link to="/login" className="font-semibold text-white hover:text-accent">
          Back to login
        </Link>
      </p>
    </div>
  );
}

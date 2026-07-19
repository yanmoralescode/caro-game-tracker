import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';

interface ResetPasswordForm {
  password: string;
  confirmPassword: string;
}

export function ResetPasswordPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'saved' | 'error'>('idle');
  const [error, setError] = useState('');
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ResetPasswordForm>({ defaultValues: { password: '', confirmPassword: '' } });

  const onSubmit = async ({ password, confirmPassword }: ResetPasswordForm) => {
    setStatus('loading');
    setError('');

    if (password !== confirmPassword) {
      setStatus('error');
      setError('Passwords must match.');
      return;
    }

    if (password.length < 8) {
      setStatus('error');
      setError('Password must be at least 8 characters.');
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus('saved');
  };

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.24em] text-accent">Reset password</p>
        <h2 className="text-3xl font-semibold text-white">Create a new password</h2>
        <p className="max-w-xl text-sm leading-7 text-muted">
          Choose a strong password that keeps your Caro account safe. You can sign in after saving your new credentials.
        </p>
      </div>

      {status === 'saved' ? (
        <Card className="bg-background/70 text-sm text-muted space-y-6">
          <div>
            <p className="text-lg font-semibold text-white">Password updated</p>
            <p className="mt-4">Your password has been reset successfully. Use your new credentials to sign in.</p>
          </div>
          <Button as={Link} to="/login" className="w-full text-center">
            Return to login
          </Button>
        </Card>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input
            id="password"
            type="password"
            label="New password"
            autoComplete="new-password"
            error={errors.password?.message}
            {...register('password', {
              required: 'Password is required.',
              minLength: { value: 8, message: 'Use at least 8 characters.' },
            })}
          />

          <Input
            id="confirmPassword"
            type="password"
            label="Confirm password"
            autoComplete="new-password"
            error={errors.confirmPassword?.message}
            {...register('confirmPassword', {
              required: 'Please confirm your new password.',
              validate: (value) => value === watch('password') || 'Passwords do not match.',
            })}
          />

          {error && <p className="text-sm text-danger">{error}</p>}

          <Button type="submit" className="w-full">
            {status === 'loading' ? 'Saving...' : 'Save password'}
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

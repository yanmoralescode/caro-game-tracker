import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

interface LoginForm {
  email: string;
  password: string;
  remember: boolean;
}

export function LoginPage() {
  const { login, guestLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/app/dashboard';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ defaultValues: { email: '', password: '', remember: false } });

  const onSubmit = async ({ email, password, remember }: LoginForm) => {
    setLoading(true);
    setError('');

    try {
      await login(email, password, remember);
      navigate(from, { replace: true });
    } catch (reason) {
      setError(typeof reason === 'string' ? reason : 'Unable to sign in.');
    } finally {
      setLoading(false);
    }
  };

  const handleGuest = async () => {
    setLoading(true);
    await guestLogin();
    navigate('/app/dashboard', { replace: true });
  };

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.24em] text-accent">Welcome back</p>
        <h2 className="text-3xl font-semibold text-white">Sign in to Caro</h2>
        <p className="max-w-xl text-sm leading-7 text-muted">
          Access your game tracker and continue where you left off with a secure login experience.
        </p>
      </div>

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
              message: 'Enter a valid email.',
            },
          })}
        />

        <Input
          id="password"
          type="password"
          label="Password"
          autoComplete="current-password"
          error={errors.password?.message}
          {...register('password', {
            required: 'Password is required.',
            minLength: { value: 8, message: 'Password must be at least 8 characters.' },
          })}
        />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <label className="inline-flex items-center gap-2 text-sm text-muted">
            <input type="checkbox" {...register('remember')} className="h-4 w-4 rounded border-border bg-background text-accent focus:ring-accent" />
            Remember me
          </label>
          <Link to="/forgot-password" className="text-sm font-semibold text-white hover:text-accent">
            Forgot password?
          </Link>
        </div>

        {error && <p className="text-sm text-danger">{error}</p>}

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? 'Signing in...' : 'Sign in'}
        </Button>
      </form>

      <div className="rounded-2xl border border-border bg-background/70 p-5 text-sm text-muted">
        <p className="mb-4 text-white">Social login</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {['Google', 'Steam', 'Discord', 'GitHub'].map((provider) => (
            <button
              key={provider}
              type="button"
              disabled
              className="rounded-2xl border border-border bg-background/50 px-4 py-3 text-sm text-muted transition"
            >
              {provider}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">New to Caro?</p>
        <Link to="/register" className="inline-flex items-center justify-center rounded-2xl border border-border bg-background/80 px-5 py-3 text-sm font-semibold text-white transition hover:border-accent hover:text-accent">
          Create account
        </Link>
      </div>

      <Button type="button" variant="secondary" className="w-full" onClick={handleGuest} disabled={loading}>
        Continue as guest
      </Button>
    </div>
  );
}

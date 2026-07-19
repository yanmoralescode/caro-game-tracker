import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

interface RegisterForm {
  username: string;
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

export function RegisterPage() {
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterForm>({
    defaultValues: {
      username: '',
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false,
    },
  });

  const onSubmit = async ({ username, displayName, email, password, acceptTerms }: RegisterForm) => {
    if (!acceptTerms) {
      setError('You must accept the terms to continue.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await registerUser(username, displayName, email, password);
      navigate('/verify-email', { replace: true });
    } catch (reason) {
      setError(typeof reason === 'string' ? reason : 'Unable to create account.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.24em] text-accent">Create account</p>
        <h2 className="text-3xl font-semibold text-white">Register for Caro</h2>
        <p className="max-w-xl text-sm leading-7 text-muted">
          Start tracking your games, collections and progress with a secure account built for modern players.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            id="username"
            type="text"
            label="Username"
            error={errors.username?.message}
            {...register('username', { required: 'Username is required.' })}
          />
          <Input
            id="displayName"
            type="text"
            label="Display name"
            error={errors.displayName?.message}
            {...register('displayName', { required: 'Display name is required.' })}
          />
        </div>

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

        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            id="password"
            type="password"
            label="Password"
            autoComplete="new-password"
            error={errors.password?.message}
            {...register('password', {
              required: 'Password is required.',
              pattern: {
                value: passwordPattern,
                message: 'Use 8+ chars with uppercase, lowercase, number, and symbol.',
              },
            })}
          />
          <Input
            id="confirmPassword"
            type="password"
            label="Confirm password"
            autoComplete="new-password"
            error={errors.confirmPassword?.message}
            {...register('confirmPassword', {
              required: 'Please confirm your password.',
              validate: (value) => value === watch('password') || 'Passwords do not match.',
            })}
          />
        </div>

        <div className="rounded-2xl border border-border bg-background/70 p-4 text-sm text-muted">
          <p className="font-semibold text-white">Password rules</p>
          <ul className="mt-3 space-y-2 pl-5 text-sm">
            <li>• At least 8 characters</li>
            <li>• One uppercase letter</li>
            <li>• One lowercase letter</li>
            <li>• One number</li>
            <li>• One special character</li>
          </ul>
        </div>

        <label className="inline-flex items-center gap-3 text-sm text-muted">
          <input
            type="checkbox"
            {...register('acceptTerms', { required: 'You must accept the terms.' })}
            className="h-4 w-4 rounded border-border bg-background text-accent focus:ring-accent"
          />
          I agree to the <Link className="font-semibold text-white hover:text-accent" to="/">
            terms and privacy policy
          </Link>
        </label>
        {errors.acceptTerms && <p className="text-sm text-danger">{errors.acceptTerms.message}</p>}
        {error && <p className="text-sm text-danger">{error}</p>}

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? 'Creating account...' : 'Create account'}
        </Button>
      </form>

      <p className="text-sm text-muted">
        Already have an account?{' '}
        <Link to="/login" className="font-semibold text-white hover:text-accent">
          Sign in
        </Link>
      </p>
    </div>
  );
}

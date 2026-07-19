import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthLayout } from './components/layout/AuthLayout';
import { AuthPageLayout } from './components/layout/AuthPageLayout';
import { RequireAuth } from './components/layout/RequireAuth';
import { PublicLayout } from './components/layout/PublicLayout';
import { DashboardPage } from './pages/Dashboard';
import { LibraryPage } from './pages/Library';
import { SearchPage } from './pages/Search';
import { UsersPage } from './pages/Users';
import { ProfilePage } from './pages/Profile';
import { GameDetailsPage } from './pages/GameDetails';
import { AddGamePage } from './pages/AddGame';
import { LoginPage } from './pages/Login';
import { RegisterPage } from './pages/Register';
import { ForgotPasswordPage } from './pages/ForgotPassword';
import { ResetPasswordPage } from './pages/ResetPassword';
import { VerifyEmailPage } from './pages/VerifyEmail';
import { VerifyEmailSuccessPage } from './pages/VerifyEmailSuccess';
import { SessionExpiredPage } from './pages/SessionExpired';
import { AuthErrorPage } from './pages/AuthError';
import { NotFoundPage } from './pages/NotFound';
import { LandingPage } from './pages/Landing';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<LandingPage />} />
      </Route>

      <Route element={<AuthPageLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
        <Route path="reset-password" element={<ResetPasswordPage />} />
        <Route path="verify-email" element={<VerifyEmailPage />} />
        <Route path="verify-email-success" element={<VerifyEmailSuccessPage />} />
        <Route path="session-expired" element={<SessionExpiredPage />} />
        <Route path="auth-error" element={<AuthErrorPage />} />
      </Route>

      <Route path="/app" element={<RequireAuth><AuthLayout /></RequireAuth>}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="library" element={<LibraryPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="game/:id" element={<GameDetailsPage />} />
        <Route path="add-game" element={<AddGamePage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

export interface AuthUser {
  username: string;
  displayName: string;
  email: string;
  isGuest?: boolean;
  verified?: boolean;
}

interface AuthContextValue {
  user: AuthUser | null;
  login: (email: string, password: string, remember: boolean) => Promise<AuthUser>;
  guestLogin: () => Promise<AuthUser>;
  logout: () => void;
  register: (username: string, displayName: string, email: string, password: string) => Promise<void>;
  sendResetLink: (email: string) => Promise<void>;
  verifyEmail: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);
const STORAGE_KEY = 'caro-auth';

function loadStoredUser(): AuthUser | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return null;
  }

  try {
    return JSON.parse(stored) as AuthUser;
  } catch {
    return null;
  }
}

function saveUser(user: AuthUser | null) {
  if (typeof window === 'undefined') {
    return;
  }

  if (user) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  } else {
    window.localStorage.removeItem(STORAGE_KEY);
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const storedUser = loadStoredUser();
  const [user, setUser] = useState<AuthUser | null>(storedUser);
  const [rememberMe, setRememberMe] = useState<boolean>(Boolean(storedUser));

  useEffect(() => {
    if (user && rememberMe) {
      saveUser(user);
    } else {
      saveUser(null);
    }
  }, [user, rememberMe]);

  const login = (email: string, password: string, remember: boolean) => {
    return new Promise<AuthUser>((resolve, reject) => {
      setTimeout(() => {
        if (!email || !email.includes('@')) {
          reject('Please enter a valid email address.');
          return;
        }

        if (password.length < 8) {
          reject('Password must be at least 8 characters.');
          return;
        }

        const authUser: AuthUser = {
          username: email.split('@')[0],
          displayName: email.split('@')[0],
          email,
          verified: true,
        };

        setRememberMe(remember);
        setUser(authUser);

        resolve(authUser);
      }, 650);
    });
  };

  const guestLogin = () => {
    return new Promise<AuthUser>((resolve) => {
      const guestUser: AuthUser = {
        username: 'guest',
        displayName: 'Guest Player',
        email: 'guest@caro.app',
        isGuest: true,
      };

      setUser(guestUser);
      resolve(guestUser);
    });
  };

  const logout = () => {
    setUser(null);
    saveUser(null);
  };

  const register = (username: string, displayName: string, email: string, password: string) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (!username || !displayName || !email.includes('@')) {
          reject('Please fill out all fields with a valid email.');
          return;
        }

        if (password.length < 8) {
          reject('Password must be at least 8 characters.');
          return;
        }

        resolve();
      }, 750);
    });
  };

  const sendResetLink = (email: string) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (!email || !email.includes('@')) {
          reject('Please enter a valid email address.');
          return;
        }
        resolve();
      }, 650);
    });
  };

  const verifyEmail = () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setUser((current) => (current ? { ...current, verified: true } : current));
        resolve();
      }, 600);
    });
  };

  const value = useMemo(
    () => ({ user, login, guestLogin, logout, register, sendResetLink, verifyEmail }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}

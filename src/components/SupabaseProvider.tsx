'use client';

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { createBrowserClient } from '@supabase/ssr';
import type { SupabaseClient, User } from '@supabase/supabase-js';

// Replaces @supabase/auth-helpers-react, which Supabase deprecated in favour
// of @supabase/ssr. The hook names and shapes are kept identical so the rest
// of the app did not have to change — only where it imports them from.

type SupabaseContextValue = {
  supabase: SupabaseClient;
  user: User | null;
  /** false until the initial session lookup resolves */
  ready: boolean;
};

const SupabaseContext = createContext<SupabaseContextValue | null>(null);

export default function SupabaseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [supabase] = useState(() =>
    createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
  );

  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let active = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!active) return;
      setUser(data.session?.user ?? null);
      setReady(true);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setReady(true);
    });

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, [supabase]);

  const value = useMemo(
    () => ({ supabase, user, ready }),
    [supabase, user, ready]
  );

  return (
    <SupabaseContext.Provider value={value}>
      {children}
    </SupabaseContext.Provider>
  );
}

function useSupabaseContext(): SupabaseContextValue {
  const ctx = useContext(SupabaseContext);
  if (!ctx) {
    throw new Error('useSupabaseClient/useUser must be used inside SupabaseProvider');
  }
  return ctx;
}

export function useSupabaseClient(): SupabaseClient {
  return useSupabaseContext().supabase;
}

export function useUser(): User | null {
  return useSupabaseContext().user;
}

export function useSessionReady(): boolean {
  return useSupabaseContext().ready;
}

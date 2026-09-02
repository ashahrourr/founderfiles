'use client';

import { useSupabaseClient, useUser } from '@/components/SupabaseProvider';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

export default function LogoutPage() {
  const supabase = useSupabaseClient();
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-slate-800/90 backdrop-blur-md rounded-xl shadow-2xl border border-slate-700 text-center">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-2">
          Account
        </h1>
        <p className="text-slate-400">{user.email}</p>

        <button
          onClick={async () => {
            await supabase.auth.signOut();
            router.push('/');
          }}
          className="w-full py-3 px-4 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-all"
        >
          Log Out
        </button>

        <div className="text-center text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-400 transition-colors">
            ← Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

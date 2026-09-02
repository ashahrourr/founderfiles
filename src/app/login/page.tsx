'use client';

import { useState } from 'react';
import { useSupabaseClient } from '@/components/SupabaseProvider';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const supabase = useSupabaseClient();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState({ type: '', content: '' });
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', content: '' });

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        router.push('/');
      } else {
        if (password.length < 6) throw new Error('Password must be at least 6 characters');
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        router.push('/');   // Redirect to homepage after signup        
      }
    } catch (error) {
      setMessage({
        type: 'error',
        content: error instanceof Error ? error.message : 'An unexpected error occurred'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-slate-800/90 backdrop-blur-md rounded-xl shadow-2xl border border-slate-700">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-2">
            {isLogin ? 'Welcome Back' : 'Get Started'}
          </h1>
          <p className="text-slate-400">
            {isLogin ? 'Sign in to continue' : 'Create your account'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-slate-800/70 border border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 text-white transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={isLogin ? undefined : 6}
              className="w-full px-4 py-3 rounded-lg bg-slate-800/70 border border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 text-white transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all relative"
          >
            {loading ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              </div>
            ) : (
              <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
            )}
          </button>

          {message.content && (
            <div className={`p-3 rounded-lg border ${
              message.type === 'error' 
                ? 'bg-red-900/20 border-red-800/50 text-red-300'
                : 'bg-emerald-900/20 border-emerald-800/50 text-emerald-300'
            }`}>
              {message.content}
            </div>
          )}

          <div className="text-center text-sm text-slate-400">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </div>

          <div className="text-center text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-400 transition-colors">
              ← Return home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

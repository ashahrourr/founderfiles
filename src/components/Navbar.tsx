'use client';

import Link from 'next/link';
import { FiUser } from 'react-icons/fi';
import { useUser } from '@/components/SupabaseProvider';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const user = useUser();
  const router = useRouter();

  return (
    <nav className="bg-slate-800/90 backdrop-blur-md border-b border-slate-700 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-400">
          FounderFiles
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/suggest"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-800 hover:bg-slate-700 hover:border-slate-500 transition-all"
          >
            <div className="flex items-center justify-center w-6 h-6 bg-blue-500/20 text-blue-400 rounded-full">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <span className="text-slate-200 font-medium text-sm hidden sm:inline">Suggest Story</span>
          </Link>
          <div className="relative">
            <button
              onClick={() => router.push(user ? '/logout' : '/login')}
              className="relative group"
            >
              <div
                className={`w-10 h-10 rounded-full ${
                  user ? 'overflow-hidden' : 'flex items-center justify-center'
                } ${user ? 'border-2 border-green-500' : 'border-2 border-red-500'} transition-all hover:scale-105 bg-slate-800/50 shadow-sm`}
              >
                {user ? (
                  <img
                    src={`https://api.dicebear.com/9.x/big-smile/svg`}
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <FiUser className="w-6 h-6 text-slate-400" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
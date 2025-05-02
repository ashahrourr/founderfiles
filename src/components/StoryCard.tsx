'use client';

import { useState, useEffect } from 'react';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Story } from '@/data/stories';

const LIKE_OFFSETS: Record<number, number> = {
  1: 1275,
  2: 1182,
  3: 2314,
  4: 1492,
  5: 1542,
  6: 2781,
  7: 1628,
  8: 3281,
  9: 1826,
  10: 3197,
  11: 4281,
  12: 3891,
  13: 6211,
  // 14:,
  // 15:,
  // 16:,
  // 17:,
  // 18:,
  // 19:,
  // 20:
};

function formatLikes(count: number, storyId: number): string {
  const offset = LIKE_OFFSETS[storyId] || 0;
  const totalLikes = count + offset;
  if (totalLikes >= 1000000) return `${(totalLikes / 1000000).toFixed(1)}m`;
  if (totalLikes >= 1000) {
    const thousands = totalLikes / 1000;
    return thousands % 1 === 0 ? `${thousands}k` : `${thousands.toFixed(1)}k`;
  }
  return totalLikes.toString();
}

export default function StoryCard({
  story,
  onClick,
  isActive,
}: {
  story: Story;
  onClick: () => void;
  isActive: boolean;
}) {
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const router = useRouter();
  const [likes, setLikes] = useState<number>(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const fetchLikes = async () => {
      const { count } = await supabaseClient
        .from('story_likes')
        .select('*', { count: 'exact', head: true })
        .eq('story_id', story.id);
      setLikes(count || 0);
      if (user) {
        const { data } = await supabaseClient
          .from('story_likes')
          .select('id')
          .eq('story_id', story.id)
          .eq('user_id', user.id)
          .maybeSingle();
        setLiked(!!data);
      }
    };
    fetchLikes();
  }, [story.id, user, supabaseClient]);

  const handleLike = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!user) {
      router.push('/login');
      return;
    }
    if (liked) {
      const { error } = await supabaseClient
        .from('story_likes')
        .delete()
        .eq('story_id', story.id)
        .eq('user_id', user.id);
      if (!error) {
        setLiked(false);
        setLikes((prev) => prev - 1);
      }
    } else {
      const { error } = await supabaseClient
        .from('story_likes')
        .insert({ story_id: story.id, user_id: user.id });
      if (!error) {
        setLiked(true);
        setLikes((prev) => prev + 1);
      }
    }
  };

  return (
    <div
      onClick={onClick}
      className={`relative w-full text-left transition-colors duration-200 p-4 rounded-lg ${
        isActive
          ? 'bg-blue-900/20 ring-2 ring-blue-500'
          : 'hover:bg-slate-800/50 border border-slate-700 hover:border-slate-600'
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 flex-shrink-0 relative rounded-lg overflow-hidden bg-slate-900 border border-slate-800">
          <Image
            src={story.image || '/fallback-image.jpg'}
            alt={story.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 space-y-1 relative pr-12">
          {/* Like Button */}
          <button onClick={handleLike} className="absolute top-0 right-0 flex items-center gap-1">
            <svg
              className={`w-4 h-4 ${
                liked ? 'text-red-500 fill-current' : 'text-slate-400 fill-transparent hover:text-red-400'
              }`}
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span className="text-xs text-slate-400">{formatLikes(likes, story.id)}</span>
          </button>

          {/* Share Button - Mobile Only */}
          <div className="absolute top-6 right-0 block lg:hidden">
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (navigator.share) {
                  navigator.share({
                    title: story.title,
                    url: `${window.location.origin}/story/${story.id}`,
                  });
                } else {
                  alert('Sharing is not supported on this device.');
                }
              }}
            >
              <svg
                className="w-4 h-4 text-slate-400 hover:text-slate-200"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12V4m0 0l-4 4m4-4l4 4"
                />
              </svg>
            </button>
          </div>

          <h3 className={`font-medium ${isActive ? 'text-blue-400' : 'text-slate-300'}`}>
            {story.name}
          </h3>
          <p className="text-sm text-slate-400 line-clamp-2">{story.teaser}</p>
        </div>
      </div>
    </div>
  );
}

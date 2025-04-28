'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';
import { Story, StorySection } from '@/data/stories';

export default function StoryDetail({ story, onBack }: { story: Story; onBack: () => void }) {
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

  const handleLike = async () => {
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
    <div className="px-4 py-6">
      {/* Top Bar with Back, Like, Share */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="text-sm text-slate-500 hover:text-slate-400 transition-colors"
        >
          ← Back to Stories
        </button>
        <div className="flex items-center gap-4">
          {/* Like Button */}
          <button onClick={handleLike} className="flex items-center">
            <svg
              className={`w-5 h-5 ${
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
          </button>

          {/* Share Button */}
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: story.title,
                  url: window.location.href,
                });
              } else {
                alert('Sharing is not supported on this browser.');
              }
            }}
          >
          <svg
            className="w-5 h-5 text-slate-400 hover:text-slate-200"
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
      </div>

      {/* Milestones */}
      <div className="flex overflow-x-auto gap-4 mb-8 scrollbar-hide">
        {story.milestones.map((milestone, index) => (
          <div key={index} className="min-w-[180px] bg-slate-800 p-3 rounded-lg flex-shrink-0">
            <h4 className="text-blue-400 font-semibold">{milestone.year}</h4>
            <p className="text-slate-300 text-sm">{milestone.title}</p>
          </div>
        ))}
      </div>

      {/* Story Content */}
      <h1 className="text-3xl font-bold text-slate-100 mb-4">{story.title}</h1>
      <p className="text-slate-400 mb-6">{story.teaser}</p>
      <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-800 mb-8">
        <Image
          src={story.image || '/fallback-image.jpg'}
          alt={story.name}
          fill
          className="object-cover object-[50%_35%]"
        />
      </div>

      <div className="prose prose-invert max-w-3xl">
        {story.content.map((section, index) => {
          if (section.type === 'text') {
            return (
              <p key={index} className="text-lg text-slate-300 leading-relaxed mb-6">
                {section.text}
              </p>
            );
          }
          if (section.type === 'quote') {
            return (
              <blockquote
                key={index}
                className="border-l-4 border-blue-600 pl-6 my-6 italic text-xl text-slate-300"
              >
                {section.text}
                <cite className="not-italic block mt-4 text-base text-slate-500">— {story.name}</cite>
              </blockquote>
            );
          }
          if (section.type === 'lifestyle' && section.items) {
            return (
              <div key={index} className="my-12">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">{section.title}</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-300">
                  {section.items.map((item, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

'use client';

import { useState, useEffect, useRef } from 'react';
import { stories } from '@/data/stories';
import Link from 'next/link';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';
import { FiUser } from 'react-icons/fi';
import Image from 'next/image';




export default function Home() {
  const [selectedStory, setSelectedStory] = useState(stories[0]);
  const [activeMilestone, setActiveMilestone] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const milestonesRef = useRef<HTMLDivElement>(null);
  const user = useUser();


  const router = useRouter();
  

  // Scroll milestone tracker
  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;

      const milestones = selectedStory.milestones;
      const contentTop = contentRef.current.offsetTop;
      const contentHeight = contentRef.current.offsetHeight;
      const scrollPosition = window.scrollY - contentTop;

      const milestonePositions = milestones.map((_, index) =>
        (contentHeight / milestones.length) * index
      );

      let active = milestonePositions.findIndex(pos => scrollPosition < pos) - 1;

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        active = milestones.length - 1;
      }
      
      setActiveMilestone(Math.max(0, active));      
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedStory]);

  // Progress line animation
  useEffect(() => {
    if (!milestonesRef.current) return;

    const progressLine = milestonesRef.current.querySelector('.progress-line');
    if (progressLine) {
      const progress = (activeMilestone + 1) / selectedStory.milestones.length * 100;
      (progressLine as HTMLElement).style.height = `${progress}%`;
    }
  }, [activeMilestone, selectedStory]);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navbar */}
      <nav className="bg-slate-800/90 backdrop-blur-md border-b border-slate-700 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-400">
            FounderFiles
          </Link>
          
          <div className="flex items-center gap-4">
            {/* Suggest Story Button */}
            <Link
              href="/suggest"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-800 hover:bg-slate-700 hover:border-slate-500 transition-all"
            >
              <div className="flex items-center justify-center w-6 h-6 bg-blue-500/20 text-blue-400 rounded-full">
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <span className="text-slate-200 font-medium text-sm">Suggest Story</span>
            </Link>

            {/* Account Avatar */}
            <div className="relative">
              <button 
                onClick={() => router.push(user ? '/logout' : '/login')}
                className="relative group"
              >
                <div className={`w-10 h-10 rounded-full 
                  ${user ? 'overflow-hidden' : 'flex items-center justify-center'}
                  ${user ? 'border-2 border-green-500' : 'border-2 border-red-500'}
                  transition-all hover:scale-105 bg-slate-800/50 shadow-sm`}
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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
  <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
    <div className="flex flex-col lg:flex-row gap-8">

      {/* Desktop Milestones Sidebar */}
      <div ref={milestonesRef} className="hidden lg:block lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] lg:w-[280px] lg:shrink-0 overflow-y-auto pr-2 scrollbar-hide">
      <h2 className="text-2xl font-bold text-blue-400 mb-6">Key Milestones</h2>
        <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-blue-600/30">
          <div className="progress-line absolute left-0 top-0 w-px bg-blue-400 transition-all duration-500" style={{ height: '0%' }} />
          {selectedStory.milestones.map((milestone, index) => (
            <div key={index} className="relative pl-8 mb-8 last:mb-0">
              <div className={`absolute left-0 top-2 -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-sm z-10 transition-colors ${
                index <= activeMilestone ? 'bg-blue-400' : 'bg-blue-600/50'
              }`}>
                {index + 1}
              </div>
              <div className="pb-6">
                <h4 className="text-lg font-semibold text-slate-100 mb-2">
                  <span className="text-blue-400">{milestone.year}</span>: {milestone.title}
                </h4>
                <p className="text-slate-400 leading-relaxed text-sm">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Story Content */}
      <article className="flex-1" ref={contentRef}>

        {/* Mobile Milestones */}
        <div className="flex overflow-x-auto gap-4 mb-8 lg:hidden scrollbar-hide">
          {selectedStory.milestones.map((milestone, index) => (
            <div key={index} className="min-w-[180px] bg-slate-800 p-3 rounded-lg flex-shrink-0">
              <h4 className="text-blue-400 font-semibold">{milestone.year}</h4>
              <p className="text-slate-300 text-sm">{milestone.title}</p>
            </div>
          ))}
        </div>

        {/* Story Header */}
        <header className="mb-12">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-4xl font-bold text-slate-100 leading-tight">
              {selectedStory.title}
            </h1>
          </div>
          <p className="text-xl text-slate-400 mb-8">{selectedStory.teaser}</p>
          <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-800">
              <Image 
                src={selectedStory.image}
                alt={selectedStory.name}
                fill
                className="object-cover object-[50%_35%]"
              />
          </div>
        </header>

        <div className="prose prose-invert max-w-3xl">
          {/* Your story content loop */}
          {selectedStory.content.map((section, index) => {
            if (section.type === 'text') {
              return (
                <p key={index} className="text-lg text-slate-300 leading-relaxed mb-6">
                  {section.text}
                </p>
              );
            }
            if (section.type === 'quote') {
              return (
                <blockquote key={index} className="border-l-4 border-blue-600 pl-6 my-6 italic text-xl text-slate-300">
                  {section.text}
                  <cite className="not-italic block mt-4 text-base text-slate-500">
                    — {selectedStory.name}
                  </cite>
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
      </article>
    </div>

    {/* Story Navigation */}
    <div className="space-y-12 lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] lg:overflow-y-auto px-3 scrollbar-hide">
  
  {/* Today's Featured */}
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-slate-300 px-2">Today&apos;s Story</h3>
    <StoryCard 
      story={stories[0]} 
      onClick={() => {
        setSelectedStory(stories[0]);
      }}
      isActive={selectedStory.id === stories[0].id}
    />
  </div>

  {/* Previous Stories */}
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-slate-300 px-2">Previous Stories</h3>
    {stories.slice(1).map(story => (
      <StoryCard 
        key={story.id} 
        story={story} 
        onClick={() => {
          setSelectedStory(story);
        }}
        isActive={selectedStory.id === story.id}
      />
    ))}
  </div>

</div>

  </div>
</main>

    </div>
  );
}

function formatLikes(count: number, storyId: number): string {
  const offset = LIKE_OFFSETS[storyId] || 0;
  const totalLikes = count + offset;

  if (totalLikes >= 1000000) {
    return `${(totalLikes / 1000000).toFixed(1)}m`;
  } else if (totalLikes >= 1000) {
    const thousands = totalLikes / 1000;
    return thousands % 1 === 0 ? `${thousands}k` : `${thousands.toFixed(1)}k`;
  }
  return totalLikes.toString();
}


const LIKE_OFFSETS: Record<number, number> = {
  1: 100,  // Story ID 1 gets +150 likes
  2: 120,  // Story ID 2 gets +120 likes
  3: 200,  // etc.
};


function StoryCard({ story, onClick, isActive }: { 
  story: typeof stories[0];
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
        setLikes(prev => prev - 1);
      }
    } else {
      const { error } = await supabaseClient
        .from('story_likes')
        .insert({ story_id: story.id, user_id: user.id });

      if (!error) {
        setLiked(true);
        setLikes(prev => prev + 1);
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
    src={story.image}
    alt={story.name}
    fill
    className="object-cover"
  />

        </div>
        <div className="flex-1 space-y-1 relative pr-8">
          {/* Updated Like Button Position */}
          <button 
            onClick={handleLike} 
            className="absolute top-0 right-0 flex items-center gap-1"
          >
            <svg
              className={`w-5 h-5 ${
                liked 
                  ? 'text-red-500 fill-current' 
                  : 'text-slate-400 fill-transparent hover:text-red-400'
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
            <span className="text-xs text-slate-400">
              {formatLikes(likes, story.id)}
            </span>

          </button>
          
          <h3 className={`font-medium ${isActive ? 'text-blue-400' : 'text-slate-300'}`}>
            {story.name}
          </h3>
          <p className="text-sm text-slate-400 line-clamp-2">
            {story.teaser}
          </p>
        </div>
      </div>
    </div>
  );
}
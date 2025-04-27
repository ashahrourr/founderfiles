'use client';

import { useState, useEffect, useRef } from 'react';
import { stories, Story, StorySection } from '@/data/stories';
import Link from 'next/link';
import Image from 'next/image';
import { useUser } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';
import { FiUser } from 'react-icons/fi';
import StoryCard from '@/components/StoryCard';
import StoryList from '@/components/StoryList';
import StoryDetail from '@/components/StoryDetail';

export default function Home() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [activeMilestone, setActiveMilestone] = useState(0);
  const [viewingStory, setViewingStory] = useState<Story | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const milestonesRef = useRef<HTMLDivElement>(null);
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    const savedStoryId = sessionStorage.getItem('selectedStoryId');
    const isViewing = sessionStorage.getItem('isViewingStory') === 'true';
    if (savedStoryId) {
      const story = stories.find((s) => s.id === Number(savedStoryId));
      if (story) {
        setSelectedStory(story);
        if (isViewing) setViewingStory(story);
        return;
      }
    }
    setSelectedStory(stories[stories.length - 1]);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!selectedStory || !contentRef.current) return;
      const milestones = selectedStory.milestones || [];
      const contentTop = contentRef.current.offsetTop;
      const contentHeight = contentRef.current.offsetHeight;
      const scrollPosition = window.scrollY - contentTop;
      const milestonePositions = milestones.map((_, index: number) => (contentHeight / milestones.length) * index);
      let active = milestonePositions.findIndex((pos: number) => scrollPosition < pos) - 1;
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        active = milestones.length - 1;
      }
      setActiveMilestone(Math.max(0, active));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedStory]);

  useEffect(() => {
    if (!selectedStory || !milestonesRef.current) return;
    const progressLine = milestonesRef.current.querySelector('.progress-line');
    if (progressLine) {
      const progress = ((activeMilestone + 1) / selectedStory.milestones.length) * 100;
      (progressLine as HTMLElement).style.height = `${progress}%`;
    }
  }, [activeMilestone, selectedStory]);

  const handleBack = () => {
    setViewingStory(null);
    sessionStorage.setItem('isViewingStory', 'false');
    router.push('/');
  };

  const handleSelectStory = (story: Story) => {
    setSelectedStory(story);
    sessionStorage.setItem('selectedStoryId', story.id.toString());
    window.scrollTo(0, 0);
    router.push(`/story/${story.id}`, { scroll: false });
  };

  const handleMobileSelectStory = (story: Story) => {
    setViewingStory(story);
    sessionStorage.setItem('selectedStoryId', story.id.toString());
    sessionStorage.setItem('isViewingStory', 'true');
    window.scrollTo(0, 0);
    router.push(`/story/${story.id}`, { scroll: false });
  };

  if (!selectedStory) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-slate-400">
        <svg
          className="animate-spin h-10 w-10 text-blue-400 mb-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
        </svg>
        <p className="text-lg">Loading your story...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
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
                    user ? 'overflow-hidden border-2 border-green-500' : 'flex items-center justify-center border-2 border-red-500'
                  } transition-all hover:scale-105 bg-slate-800/50 shadow-sm`}
                >
                  {user ? (
                    <img
                      src="https://api.dicebear.com/9.x/big-smile/svg"
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
      <div className="lg:hidden">
        {viewingStory ? (
          <StoryDetail story={viewingStory} onBack={handleBack} />
        ) : (
          <StoryList onSelectStory={handleMobileSelectStory} />
        )}
      </div>
      <div className="hidden lg:block">
        <main className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
            <div className="flex flex-col lg:flex-row gap-8">
              <div
                ref={milestonesRef}
                className="hidden lg:block lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] lg:w-[280px] lg:shrink-0 overflow-y-auto pr-2 scrollbar-hide"
              >
                <h2 className="text-2xl font-bold text-blue-400 mb-6">Key Milestones</h2>
                <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-blue-600/30">
                  <div
                    className="progress-line absolute left-0 top-0 w-px bg-blue-400 transition-all duration-500"
                    style={{ height: '0%' }}
                  />
                  {selectedStory.milestones.map((milestone: { year: number; title: string; description: string }, index: number) => (
                    <div key={index} className="relative pl-8 mb-8 last:mb-0">
                      <div
                        className={`absolute left-0 top-2 -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-sm z-10 transition-colors ${
                          index <= activeMilestone ? 'bg-blue-400' : 'bg-blue-600/50'
                        }`}
                      >
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
              <article className="flex-1" ref={contentRef}>
                <div className="flex overflow-x-auto gap-4 mb-8 lg:hidden scrollbar-hide">
                  {selectedStory.milestones.map((milestone: { year: number; title: string; description: string }, index: number) => (
                    <div key={index} className="min-w-[180px] bg-slate-800 p-3 rounded-lg flex-shrink-0">
                      <h4 className="text-blue-400 font-semibold">{milestone.year}</h4>
                      <p className="text-slate-300 text-sm">{milestone.title}</p>
                    </div>
                  ))}
                </div>
                <header className="mb-12">
                  <div className="flex justify-between items-start mb-4">
                    <h1 className="text-4xl font-bold text-slate-100 leading-tight">{selectedStory.title}</h1>
                  </div>
                  <p className="text-xl text-slate-400 mb-8">{selectedStory.teaser}</p>
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-800">
                    <Image
                      src={selectedStory.image || '/fallback-image.jpg'}
                      alt={selectedStory.name}
                      fill
                      className="object-cover object-[50%_35%]"
                    />
                  </div>
                </header>
                <div className="prose prose-invert max-w-3xl">
                  {selectedStory.content.map((section: StorySection, index: number) => {
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
                            {section.items.map((item: string, idx: number) => (
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
            <div className="space-y-12 lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] lg:overflow-y-auto px-3 scrollbar-hide">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-300 px-2">Today's Story</h3>
                <StoryCard
                  story={stories[stories.length - 1]}
                  onClick={() => handleSelectStory(stories[stories.length - 1])}
                  isActive={selectedStory.id === stories[stories.length - 1].id}
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-300 px-2">Previous Stories</h3>
                {stories.slice(0, -1).reverse().map((story: Story) => (
                  <StoryCard
                    key={story.id}
                    story={story}
                    onClick={() => handleSelectStory(story)}
                    isActive={selectedStory.id === story.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
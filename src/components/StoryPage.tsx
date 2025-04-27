'use client';

import { useState, useEffect, useRef } from 'react';
import { stories } from '@/data/stories';
import { useRouter } from 'next/navigation';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import Image from 'next/image';
import StoryCard from '@/components/StoryCard';
import StoryList from '@/components/StoryList';
import StoryDetail from '@/components/StoryDetail';
import Navbar from '@/components/Navbar';
import { use } from 'react';

export default function StoryPage({ params: paramsPromise }: { params: Promise<{ slug: string }> }) {
  // Unwrap params using React.use()
  const params = use(paramsPromise);

  // ================= STATE MANAGEMENT =================
  const [selectedStory, setSelectedStory] = useState<typeof stories[number] | null>(null);
  const [activeMilestone, setActiveMilestone] = useState(0);
  const [viewingStory, setViewingStory] = useState<typeof stories[number] | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const milestonesRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  // ================= INITIALIZATION =================
  useEffect(() => {
    const story = stories.find((s) => s.id === Number(params.slug));
    if (story) {
      setSelectedStory(story);
      setViewingStory(story); // For mobile view
      sessionStorage.setItem('selectedStoryId', story.id.toString());
      sessionStorage.setItem('isViewingStory', 'true');
    } else {
      setSelectedStory(stories[stories.length - 1]); // Fallback to latest story
    }
  }, [params.slug]);

  // ================= HANDLERS =================
  const handleBack = () => {
    setViewingStory(null);
    sessionStorage.setItem('isViewingStory', 'false');
    router.push('/');
  };

  const handleSelectStory = (story: typeof stories[number]) => {
    setSelectedStory(story);
    setViewingStory(story);
    sessionStorage.setItem('selectedStoryId', story.id.toString());
    sessionStorage.setItem('isViewingStory', 'true');
    router.push(`/story/${story.id}`, { scroll: false });
    window.scrollTo(0, 0);
  };

  // ================= EFFECTS =================
  // Track scroll position for milestones
  useEffect(() => {
    const handleScroll = () => {
      if (!selectedStory || !contentRef.current) return;
      const milestones = selectedStory.milestones || [];
      const contentTop = contentRef.current.offsetTop;
      const contentHeight = contentRef.current.offsetHeight;
      const scrollPosition = window.scrollY - contentTop;

      const milestonePositions = milestones.map(
        (_, index) => (contentHeight / milestones.length) * index
      );

      let active = milestonePositions.findIndex((pos) => scrollPosition < pos) - 1;
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        active = milestones.length - 1;
      }
      setActiveMilestone(Math.max(0, active));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedStory]);

  // Animate progress line
  useEffect(() => {
    if (!selectedStory || !milestonesRef.current) return;
    const progressLine = milestonesRef.current.querySelector('.progress-line');
    if (progressLine) {
      const progress = ((activeMilestone + 1) / selectedStory.milestones.length) * 100;
      (progressLine as HTMLElement).style.height = `${progress}%`;
    }
  }, [activeMilestone, selectedStory]);

  // ================= RENDER =================
  if (!selectedStory) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-slate-400">
        <svg
          className="animate-spin h-10 w-10 text-blue-400 mb-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
        <p className="text-lg">Loading story...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      {/* Mobile View */}
      <div className="lg:hidden">
        {viewingStory ? (
          <StoryDetail story={viewingStory} onBack={handleBack} />
        ) : (
          <StoryList onSelectStory={handleSelectStory} />
        )}
      </div>
      {/* Desktop View */}
      <div className="hidden lg:block">
        <main className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Milestones Sidebar */}
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
                  {selectedStory.milestones.map((milestone, index) => (
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
              {/* Story Content */}
              <article className="flex-1" ref={contentRef}>
                <header className="mb-12">
                  <div className="flex justify-between items-start mb-4">
                    <h1 className="text-4xl font-bold text-slate-100 leading-tight">{selectedStory.title}</h1>
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
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-300 px-2">Today&apos;s Story</h3>
                <StoryCard
                  story={stories[stories.length - 1]}
                  onClick={() => handleSelectStory(stories[stories.length - 1])}
                  isActive={selectedStory.id === stories[stories.length - 1].id}
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-300 px-2">Previous Stories</h3>
                {stories.slice(0, -1).reverse().map((story) => (
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
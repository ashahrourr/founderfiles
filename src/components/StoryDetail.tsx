'use client';

import Image from 'next/image';
import { Story, StorySection } from '@/data/stories';

export default function StoryDetail({ story, onBack }: { story: Story; onBack: () => void }) {
  return (
    <div className="px-4 py-6">
      <button
        onClick={onBack}
        className="text-sm text-slate-500 hover:text-slate-400 transition-colors mb-6"
      >
        ← Back to Stories
      </button>
      <div className="flex overflow-x-auto gap-4 mb-8 scrollbar-hide">
        {story.milestones.map((milestone: { year: number; title: string; description: string }, index: number) => (
          <div key={index} className="min-w-[180px] bg-slate-800 p-3 rounded-lg flex-shrink-0">
            <h4 className="text-blue-400 font-semibold">{milestone.year}</h4>
            <p className="text-slate-300 text-sm">{milestone.title}</p>
          </div>
        ))}
      </div>
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
        {story.content.map((section: StorySection, index: number) => {
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
    </div>
  );
}
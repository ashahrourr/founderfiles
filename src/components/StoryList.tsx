'use client';

import StoryCard from '@/components/StoryCard';
import { stories, Story } from '@/data/stories';

export default function StoryList({ onSelectStory }: { onSelectStory: (story: Story) => void }) {
  return (
    <div className="px-4 py-6 space-y-8">
      <div>
        <h2 className="text-xl font-bold text-slate-200 mb-4">Today's Story</h2>
        <StoryCard
          story={stories[stories.length - 1]}
          onClick={() => onSelectStory(stories[stories.length - 1])}
          isActive={false}
        />
      </div>
      <div>
        <h2 className="text-xl font-bold text-slate-200 mb-4">Previous Stories</h2>
        <div className="space-y-4">
          {stories.slice(0, -1).reverse().map((story: Story) => (
            <StoryCard
              key={story.id}
              story={story}
              onClick={() => onSelectStory(story)}
              isActive={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
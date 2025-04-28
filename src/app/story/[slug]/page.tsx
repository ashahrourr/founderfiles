import { stories } from '@/data/stories';
import StoryPage from '@/components/StoryPage'; // Import the client component

// Server component for the dynamic route
export default function StoryServerPage({ params: paramsPromise }: { params: Promise<{ slug: string }> }) {
  return <StoryPage params={paramsPromise} />;
}

// Metadata for SEO
export async function generateMetadata({ params: paramsPromise }: { params: Promise<{ slug: string }> }) {
  const params = await paramsPromise; // Unwrap params
  const story = stories.find((s) => s.id === Number(params.slug));
  if (!story) {
    return {
      title: 'Story Not Found | FounderFiles',
      description: 'Browse inspiring founder stories on FounderFiles.',
    };
  }
  return {
    title: `${story.title} | FounderFiles`,
    description: story.teaser,
    openGraph: {
      title: story.title,
      description: story.teaser,
      images: [story.image],
      url: `https://founderfiles.dev/story/${story.id}`,
    },
  };
}
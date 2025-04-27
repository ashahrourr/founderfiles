import { stories } from '@/data/stories';
import Home from '@/components/Home';

// Define metadataBase for Open Graph image resolution
export const metadataBase = new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001');

export default function HomePage() {
  return <Home />;
}

export async function generateMetadata() {
  const latestStory = stories[stories.length - 1];
  return {
    title: 'FounderFiles | Inspiring Founder Stories',
    description: 'Discover the journeys of top founders. Read inspiring stories, milestones, and insights on FounderFiles.',
    openGraph: {
      title: 'FounderFiles | Inspiring Founder Stories',
      description: 'Discover the journeys of top founders.',
      images: latestStory ? [latestStory.image] : ['/fallback-image.jpg'],
      url: '/',
    },
  };
}
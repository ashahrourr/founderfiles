import { stories } from '@/data/stories';
import StoryPage from '@/components/StoryPage'; // Import the client component

// Server component for the dynamic route
export default function StoryServerPage({ params: paramsPromise }: { params: Promise<{ slug: string }> }) {
  return <StoryPage params={paramsPromise} />;
}

// Metadata for SEO
export async function generateMetadata({ params: paramsPromise }: { params: Promise<{ slug: string }> }) {
  const params = await paramsPromise; 
  const story = stories.find((s) => s.id === Number(params.slug));

  if (!story) {
    return {
      metadataBase: new URL('https://founderfiles.dev'),
      title: 'Story Not Found | FounderFiles',
      description: 'Browse inspiring founder stories on FounderFiles.',
      openGraph: {
        title: 'Story Not Found | FounderFiles',
        description: 'Browse inspiring founder stories.',
        url: 'https://founderfiles.dev',
        images: ['/fallback-image.jpg'],
        type: 'website',
        siteName: 'FounderFiles',
      },
    };
  }

  return {
    metadataBase: new URL('https://founderfiles.dev'),
    title: `${story.title} | FounderFiles`,
    description: story.teaser,
    openGraph: {
      title: story.title,
      description: story.teaser,
      images: [story.image],
      url: `https://founderfiles.dev/story/${story.id}`,
      type: 'article',
      siteName: 'FounderFiles',
    },
    twitter: {
      card: 'summary_large_image',
      title: story.title,
      description: story.teaser,
      images: [story.image],
    },
  };
}

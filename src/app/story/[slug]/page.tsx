import { stories } from '@/data/stories';
import Link from 'next/link';

interface Params {
  params: { slug: string }
}

export default function StoryPage({ params }: Params) {
  const story = stories.find(story => story.id === Number(params.slug));

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-400">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-slate-200">Story not found</h1>
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
            </svg>
            Browse all stories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/" 
          className="mb-8 inline-flex items-center text-slate-400 hover:text-blue-400 transition-colors group"
        >
          <svg 
            className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
          </svg>
          <span className="font-medium">All Stories</span>
        </Link>

        <article className="prose prose-invert max-w-none">
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 leading-tight">
              {story.title}
            </h1>
            <p className="text-xl text-slate-400 mb-4">{story.teaser}</p>
            <div className="aspect-video rounded-2xl overflow-hidden bg-slate-800 shadow-2xl border border-slate-700">
              <img 
                src={story.image} 
                alt={story.name} 
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105" 
              />
            </div>
          </header>

          {story.content.map((block, index) => {
            if (block.type === 'text') {
              return (
                <p key={index} className="text-slate-300 leading-relaxed mb-6 text-lg">
                  {block.text}
                </p>
              );
            }
            if (block.type === 'quote') {
              return (
                <blockquote 
                  key={index} 
                  className="border-l-4 border-blue-600 pl-6 my-12 bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm"
                >
                  <p className="text-2xl font-light text-slate-200 italic mb-4">
                    "{block.text}"
                  </p>
                  <cite className="not-italic font-medium text-slate-400 flex items-center gap-2">
                    <span className="w-8 h-px bg-slate-500" />
                    {story.name}
                  </cite>
                </blockquote>
              );
            }
            if (block.type === 'lifestyle' && block.items) {
              return (
                <div key={index} className="my-12">
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">{block.title}</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-300">
                    {block.items.map((item, idx) => (
                      <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                </div>
              );
            }            
            return null;
          })}
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-blue-400 mb-8">Key Milestones</h2>
            <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-blue-600">
              {story.milestones.map((milestone, index) => (
                <div key={index} className="relative pl-8 mb-8 last:mb-0 group">
                  <div className="absolute left-0 top-2 -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                    {index + 1}
                  </div>
                  <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500/30 transition-colors">
                    <h4 className="text-lg font-semibold text-slate-100 mb-2">
                      <span className="text-blue-400">{milestone.year}</span>: {milestone.title}
                    </h4>
                    <p className="text-slate-400 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
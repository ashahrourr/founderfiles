# FounderFiles

**Founder stories, told as timelines.**

A story a day about how a company actually got built — not the press-release version. Each one runs
as a milestone timeline beside the narrative, so the shape of the path is visible before you read a
word of it.

🔗 **[founderfiles.vercel.app](https://founderfiles.vercel.app)**

![FounderFiles](docs/img/story.jpg)

---

## The content model

Stories are typed, not free-form HTML. `src/data/stories.ts` defines a discriminated union for the
sections a story can contain:

```ts
export type StorySection =
  | { type: 'text';      text: string }
  | { type: 'quote';     text: string }
  | { type: 'lifestyle'; title: string; items: string[] };

export type Story = {
  id: number;
  name: string;
  image: string;
  title: string;
  teaser: string;
  content: StorySection[];
  milestones: { year: number; title: string; description: string }[];
};
```

That is the whole reason the layout works. A quote cannot be rendered as a paragraph by accident,
the milestone rail is a first-class field rather than markup scraped out of prose, and adding a new
section type is a compiler error everywhere it needs handling rather than a silent gap.

**23 stories** currently — Ryan Hoover, Pieter Levels, Alexis Ohanian, Patrick Collison, Guillermo
Rauch, Derrick Reimer, Sahil Lavingia and others.

---

## Layout

```
src/
  data/stories.ts        the typed corpus
  components/
    Home.tsx             three-column reader, restores position from sessionStorage
    StoryDetail.tsx      narrative + milestone rail
    StoryList.tsx        today's story, then previous
    StoryCard.tsx
    Navbar.tsx
    SupabaseProvider.tsx
  app/
    story/[id]/          per-story route
    suggest/             submit a founder to cover
    login/  logout/      Supabase auth
```

Next.js App Router, Supabase for auth and suggestions, `marked` for rendering, `react-icons`.

---

## Running it

```bash
npm install
npm run dev
```

`.env.local` needs `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`. The stories
themselves are static, so the reader works without Supabase — only auth and story suggestions need it.

---

## Status

Deployed and building cleanly. The original custom domain, `founderfiles.dev`, has lapsed — it no
longer has DNS records — so the `.vercel.app` address is the live one.

Auth runs on **`@supabase/ssr`**. The original build used `@supabase/auth-helpers-react`, which
Supabase has deprecated and which broke on any Next.js newer than 15.3.1 — leaving the project stuck
on a release Vercel refuses to build ("vulnerable version of Next.js detected"). The provider was
rewritten to expose the same `useSupabaseClient()` and `useUser()` hooks, so the six components that
consume them only changed an import.

**Images fall back to initials.** All 23 stories name an image; only three of those files are in the
repo. The old `src={image || '/fallback-image.jpg'}` never fired — the path was always truthy, it
just 404'd into an empty frame. `FounderImage` catches the load failure and draws the founder's
initials on a colour derived from their name, so a missing file degrades instead of leaving a hole.
Dropping real images into `public/images/` still takes precedence.

## Stack

Next.js · TypeScript · Tailwind · Supabase · marked · react-icons

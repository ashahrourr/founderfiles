# FounderFiles

**Founder stories, told as timelines.**

A story a day about how a company actually got built — not the press-release version. Each one runs
as a milestone timeline beside the narrative, so the shape of the path is visible before you read a
word of it.

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

**15 stories** currently — Ryan Hoover, Pieter Levels, Alexis Ohanian, Patrick Collison, Guillermo
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

Not currently deployed. `founderfiles.dev` no longer resolves, and Vercel refuses to build the
project: **"Vulnerable version of Next.js detected."**

The bind is that the two fixes conflict. Next 15.3.1 builds cleanly but is the version Vercel
blocks. Anything newer builds *until* it reaches `/login` and `/logout`, which fail with
`Cannot find module for page` — those pages use **`@supabase/auth-helpers-react`**, which Supabase
has deprecated in favour of `@supabase/ssr` and which does not survive the upgrade.

**To bring it back:** migrate `SupabaseProvider.tsx`, `login/page.tsx`, `logout/page.tsx` and the
`useUser()` call in `Home.tsx` from `auth-helpers` to `@supabase/ssr`, then take the current Next 15.
The stories are static, so the reader itself has no such dependency.

⚠️ **12 of the 15 story images are missing from the repo** — `src/data/stories.ts` references
`/images/<name>.jpg` for every founder, but only three are committed. Those stories render with an
empty frame. Either the images need adding to `public/images/`, or the component needs a fallback.

## Stack

Next.js · TypeScript · Tailwind · Supabase · marked · react-icons

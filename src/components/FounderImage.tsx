'use client';

import { useState } from 'react';
import Image from 'next/image';

// Every story in the corpus names an image, but most of those files are not in
// the repo. `src={image || fallback}` never fired, because the path was always
// truthy — it just 404'd, leaving an empty frame. This catches the load failure
// and draws initials instead.

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

/** Deterministic hue per person, so a founder keeps the same colour everywhere. */
function hue(name: string): number {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) % 360;
  return h;
}

export default function FounderImage({
  src,
  name,
  className = '',
  sizes,
  priority,
}: {
  src?: string;
  name: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    const h = hue(name);
    return (
      <div
        className={`flex h-full w-full items-center justify-center ${className}`}
        style={{
          background: `linear-gradient(135deg, hsl(${h} 45% 26%), hsl(${(h + 40) % 360} 45% 16%))`,
        }}
        aria-label={name}
        role="img"
      >
        <span className="select-none font-semibold tracking-wide text-white/85">
          {initials(name)}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={name}
      fill
      sizes={sizes}
      priority={priority}
      className={`object-cover ${className}`}
      onError={() => setFailed(true)}
    />
  );
}

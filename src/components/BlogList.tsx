'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Post } from '@/content/blog';

export function BlogList({ posts, locale }: { posts: Post[]; locale: string }) {
  const [query, setQuery] = useState('');
  const filtered = posts.filter(p =>
    p.metadata.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <input
        type="search"
        placeholder="Search posts"
        className="mb-4 w-full rounded border p-2"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <div className="space-y-6">
        {filtered.map(post => (
          <article key={post.slug}>
            <h2 className="text-xl font-semibold">
              <Link href={`/${locale}/blog/${post.slug}`}>{post.metadata.title}</Link>
            </h2>
            <p className="text-sm text-gray-500">{post.metadata.date}</p>
            <p>{post.metadata.summary}</p>
          </article>
        ))}
      </div>
    </>
  );
}

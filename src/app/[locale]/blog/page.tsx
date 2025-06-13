import Link from 'next/link';
import { unstable_setRequestLocale } from 'next-intl/server';

import { posts } from '@/content/blog';

export const metadata = {
  title: 'Blog',
};

export default function BlogIndex(props: { params: { locale: string } }) {
  unstable_setRequestLocale(props.params.locale);

  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="mb-4 text-3xl font-bold">Blog</h1>
      <input
        type="search"
        placeholder="Search posts"
        className="mb-4 w-full rounded border p-2"
        onChange={e => {
          const q = e.target.value.toLowerCase();
          document
            .querySelectorAll<HTMLAnchorElement>('article')
            .forEach(article => {
              article.style.display = article.dataset.title?.includes(q)
                ? ''
                : 'none';
            });
        }}
      />
      <div className="space-y-6">
        {posts.map(post => (
          <article key={post.slug} data-title={post.metadata.title.toLowerCase()}>
            <h2 className="text-xl font-semibold">
              <Link href={`/${props.params.locale}/blog/${post.slug}`}>{post.metadata.title}</Link>
            </h2>
            <p className="text-sm text-gray-500">{post.metadata.date}</p>
            <p>{post.metadata.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

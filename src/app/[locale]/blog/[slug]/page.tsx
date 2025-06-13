import { notFound } from 'next/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';

import { posts } from '@/content/blog';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

export async function generateStaticParams() {
  return posts.map(post => ({ slug: post.slug }));
}

export default function BlogPostPage(props: { params: { slug: string; locale: string } }) {
  unstable_setRequestLocale(props.params.locale);
  const post = posts.find(p => p.slug === props.params.slug);
  if (!post) return notFound();
  const Post = post.component;
  return (
    <div className="mx-auto max-w-3xl p-6 prose dark:prose-invert">
      <div className="flex justify-end"><ThemeSwitcher /></div>
      <Post />
    </div>
  );
}

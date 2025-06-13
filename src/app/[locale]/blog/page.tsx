import { unstable_setRequestLocale } from 'next-intl/server';

import { posts } from '@/content/blog';
import { BlogList } from '@/components/BlogList';

export const metadata = {
  title: 'Blog',
};

export default function BlogIndex(props: { params: { locale: string } }) {
  unstable_setRequestLocale(props.params.locale);

  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="mb-4 text-3xl font-bold">Blog</h1>
      <BlogList posts={posts} locale={props.params.locale} />
    </div>
  );
}

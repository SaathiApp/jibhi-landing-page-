import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { getBlogBySlug, getBlogFiles } from '@/utils/mdx';

export async function generateStaticParams() {
  const posts = getBlogFiles();
  return posts.map(post => ({
    slug: post.replace(/\.mdx$/, ''),
  }));
}

export default function BlogPost({ params }: { params: { slug: string; locale: string } }) {
  const { frontmatter, content } = getBlogBySlug(params.slug);

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href={`/${params.locale}/blog`}
        className="mb-8 inline-block text-blue-600 hover:text-blue-800"
      >
        ← Back to Blog List
      </Link>

      <article className="prose lg:prose-xl mx-auto">
        <h1 className="mb-4 text-4xl font-bold">{frontmatter.title}</h1>
        <div className="mb-8 flex gap-4 text-gray-600">
          <span>
            By
            {frontmatter.author}
          </span>
          <time dateTime={frontmatter.date}>
            {new Date(frontmatter.date).toLocaleDateString()}
          </time>
        </div>
        <div className="mb-8">
          <MDXRemote source={content} />
        </div>
      </article>
    </div>
  );
}

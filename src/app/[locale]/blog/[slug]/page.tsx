import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import TableOfContents from '@/components/blog/TableOfContents';
import PostFAQ from '@/components/blog/PostFAQ';
import { slugify } from '@/utils/mdx';

import { getBlogBySlug, getBlogFiles } from '@/utils/mdx';

export async function generateStaticParams() {
  const posts = getBlogFiles();
  return posts.map(post => ({
    slug: post.replace(/\.mdx$/, ''),
  }));
}

export default function BlogPost({ params }: { params: { slug: string; locale: string } }) {
  const { frontmatter, content, headings } = getBlogBySlug(params.slug);
  const mdxComponents = {
    h2: (props: any) => {
      const text = String(props.children);
      return <h2 id={slugify(text)} {...props} />;
    },
    h3: (props: any) => {
      const text = String(props.children);
      return <h3 id={slugify(text)} {...props} />;
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href={`/${params.locale}/blog`}
        className="mb-8 inline-block font-semibold text-brand-dark hover:text-brand-accent"
      >
        ← Back to Blog List
      </Link>

      <article className="prose lg:prose-xl mx-auto">
        <img src={frontmatter.image} alt="" className="mb-6 w-full rounded-lg" />
        <h1 className="mb-4 text-4xl font-bold text-brand-dark">{frontmatter.title}</h1>
        <div className="mb-8 flex gap-4 text-gray-600">
          <span>
            By
            {frontmatter.author}
          </span>
          <time dateTime={frontmatter.date}>
            {new Date(frontmatter.date).toLocaleDateString()}
          </time>
        </div>
        <TableOfContents headings={headings} />
        <div className="mb-8">
          {
            (() => {
              try {
                return <MDXRemote source={content} components={mdxComponents} />;
              } catch {
                return <p className="text-red-500">Failed to load content.</p>;
              }
            })()
          }
        </div>
        <PostFAQ faqs={frontmatter.faqs} />
      </article>
    </div>
  );
}

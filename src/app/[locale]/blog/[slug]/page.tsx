import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import TableOfContents from '@/components/blog/TableOfContents';
import PostFAQ from '@/components/blog/PostFAQ';
import { slugify } from '@/utils/mdx';
import Image from 'next/image';

import { getBlogBySlug, getBlogFiles } from '@/utils/mdx';

export async function generateStaticParams() {
  const posts = getBlogFiles();
  return posts.map(post => ({
    slug: post.replace(/\.mdx$/, ''),
  }));
}

export default function BlogPost({ params }: { params: { slug: string; locale: string } }) {
  const { frontmatter, content, headings } = getBlogBySlug(params.slug);

  // Define MDX components inline to avoid serialization issues
  const mdxComponents = {
    h1: (props: any) => {
      const text = String(props.children);
      const id = slugify(text);
      return (
        <h1
          id={id}
          className="scroll-mt-20 text-3xl font-bold text-brand-dark mb-6 pb-2 border-b border-gray-200"
          {...props}
        />
      );
    },
    h2: (props: any) => {
      const text = String(props.children);
      const id = slugify(text);
      return (
        <h2
          id={id}
          className="scroll-mt-20 text-2xl font-semibold text-brand-dark mt-8 mb-4 pb-2 border-b border-gray-200"
          {...props}
        />
      );
    },
    h3: (props: any) => {
      const text = String(props.children);
      const id = slugify(text);
      return (
        <h3
          id={id}
          className="scroll-mt-20 text-xl font-semibold text-brand-dark mt-6 mb-3"
          {...props}
        />
      );
    },
    h4: (props: any) => {
      const text = String(props.children);
      const id = slugify(text);
      return (
        <h4
          id={id}
          className="scroll-mt-20 text-lg font-semibold text-brand-dark mt-5 mb-2"
          {...props}
        />
      );
    },
    h5: (props: any) => {
      const text = String(props.children);
      const id = slugify(text);
      return (
        <h5
          id={id}
          className="scroll-mt-20 text-base font-semibold text-brand-dark mt-4 mb-2"
          {...props}
        />
      );
    },
    h6: (props: any) => {
      const text = String(props.children);
      const id = slugify(text);
      return (
        <h6
          id={id}
          className="scroll-mt-20 text-sm font-semibold text-brand-dark mt-3 mb-2"
          {...props}
        />
      );
    },
    p: (props: any) => (
      <p className="text-gray-700 leading-6 sm:leading-7 mb-3 sm:mb-4 text-sm sm:text-base" {...props} />
    ),
    a: (props: any) => {
      const isExternal = props.href?.startsWith('http');
      if (isExternal) {
        return (
          <a
            className="text-brand-accent hover:text-brand-dark underline font-medium transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          />
        );
      }
      return (
        <Link
          href={props.href}
          className="text-brand-accent hover:text-brand-dark underline font-medium transition-colors"
          {...props}
        />
      );
    },
    ul: (props: any) => (
      <ul className="list-disc list-inside mb-3 sm:mb-4 space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base" {...props} />
    ),
    ol: (props: any) => (
      <ol className="list-decimal list-inside mb-3 sm:mb-4 space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base" {...props} />
    ),
    li: (props: any) => (
      <li className="leading-6 sm:leading-7" {...props} />
    ),
    code: (props: any) => {
      if (props.className) {
        const language = props.className.replace('language-', '');
        return (
          <div className="relative mb-4 sm:mb-6 group">
            <div className="flex items-center justify-between bg-gray-100 px-3 py-2 sm:px-4 border-b border-gray-200 rounded-t-lg">
              <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                {language}
              </span>
              <span className="text-xs text-gray-500">
                Code
              </span>
            </div>
            <pre className="bg-gray-50 border border-gray-200 border-t-0 rounded-b-lg overflow-x-auto">
              <code
                className={`block p-3 sm:p-4 text-xs sm:text-sm font-mono text-gray-800 hljs ${props.className}`}
                {...props}
              />
            </pre>
          </div>
        );
      }
      return (
        <code
          className="bg-gray-100 text-gray-800 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-xs sm:text-sm font-mono border"
          {...props}
        />
      );
    },
    pre: (props: any) => {
      if (props.children?.props?.className) {
        return <>{props.children}</>;
      }
      return (
        <pre className="bg-gray-50 border border-gray-200 p-4 rounded-lg overflow-x-auto mb-6 text-sm font-mono text-gray-800" {...props} />
      );
    },
    blockquote: (props: any) => (
      <blockquote className="border-l-4 border-gray-300 bg-gray-50 pl-6 py-3 mb-6 text-gray-600 italic rounded-r-lg" {...props} />
    ),
    img: (props: any) => (
      <div className="my-8">
        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <Image
            src={props.src}
            alt={props.alt || ''}
            width={800}
            height={400}
            className="w-full h-auto"
            {...props}
          />
        </div>
        {props.alt && (
          <p className="text-center text-sm text-gray-500 mt-3 italic">{props.alt}</p>
        )}
      </div>
    ),
    table: (props: any) => (
      <div className="my-6 sm:my-8">
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
          <table className="min-w-full border-collapse bg-white text-sm" {...props} />
        </div>
      </div>
    ),
    thead: (props: any) => (
      <thead className="bg-gray-50" {...props} />
    ),
    tbody: (props: any) => (
      <tbody className="bg-white divide-y divide-gray-200" {...props} />
    ),
    tr: (props: any) => (
      <tr className="hover:bg-gray-50 transition-colors" {...props} />
    ),
    th: (props: any) => (
      <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-900 border-b border-gray-200" {...props} />
    ),
    td: (props: any) => (
      <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700" {...props} />
    ),
    hr: (props: any) => (
      <hr className="my-8 border-gray-200" {...props} />
    ),
    strong: (props: any) => (
      <strong className="font-semibold text-brand-dark" {...props} />
    ),
    em: (props: any) => (
      <em className="italic text-gray-700" {...props} />
    ),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="relative h-[50vh] min-h-[300px] sm:h-[60vh] sm:min-h-[400px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${frontmatter.image})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Header Content */}
        <div className="relative z-10 flex h-full flex-col justify-between">
          {/* Navigation */}
          <div className="container mx-auto px-4 pt-4 sm:pt-8">
            <Link
              href={`/${params.locale}/blog`}
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm sm:px-4 sm:text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="hidden sm:inline">Back to Blog List</span>
              <span className="sm:hidden">Back</span>
            </Link>
          </div>

          {/* Title and Meta */}
          <div className="container mx-auto px-4 pb-6 sm:pb-12">
            <div className="max-w-4xl">
              <h1 className="mb-4 text-2xl font-bold text-white sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
                {frontmatter.title}
              </h1>
              <p className="mb-4 text-base text-gray-200 sm:mb-6 sm:text-lg md:text-xl">
                {frontmatter.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/90 sm:gap-6 sm:text-base">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-brand-accent flex items-center justify-center">
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {frontmatter.author.charAt(0)}
                    </span>
                  </div>
                  <span className="font-medium">{frontmatter.author}</span>
                </div>
                <time dateTime={frontmatter.date} className="flex items-center gap-2">
                  <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="hidden sm:inline">
                    {new Date(frontmatter.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <span className="sm:hidden">
                    {new Date(frontmatter.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </time>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 sm:py-12">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
          {/* Table of Contents - Left Sidebar */}
          <aside className="hidden lg:block lg:w-1/4 lg:flex-shrink-0">
            <div className="sticky top-8">
              <TableOfContents headings={headings} />
            </div>
          </aside>

          {/* Article Content */}
          <article className="flex-1 min-w-0">
            {/* Mobile Table of Contents */}
            <div className="mb-6 lg:hidden">
              <TableOfContents headings={headings} />
            </div>

            {/* Article Body */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
              {
                (() => {
                  try {
                    return <MDXRemote
                      source={content}
                      components={mdxComponents}
                      options={{
                        mdxOptions: {
                          remarkPlugins: [remarkGfm],
                        },
                      }}
                    />;
                  } catch {
                    return <p className="text-red-500">Failed to load content.</p>;
                  }
                })()
              }
            </div>

            {/* FAQ Section */}
            <PostFAQ faqs={frontmatter.faqs} />
          </article>
        </div>
      </main>
    </div>
  );
}

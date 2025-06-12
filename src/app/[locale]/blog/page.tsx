import Link from 'next/link';

import { getAllBlogs } from '@/utils/mdx';

export default function BlogList({ params }: { params: { locale: string } }) {
  const blogs = getAllBlogs();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">Blog Posts</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map(blog => (
          <Link
            key={blog.slug}
            href={`/${params.locale}/blog/${blog.slug}`}
            className="block rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
          >
            <article>
              <h2 className="mb-2 text-2xl font-semibold">{blog.title}</h2>
              <p className="mb-4 text-gray-600">{blog.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{blog.author}</span>
                <time dateTime={blog.date}>
                  {new Date(blog.date).toLocaleDateString()}
                </time>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}

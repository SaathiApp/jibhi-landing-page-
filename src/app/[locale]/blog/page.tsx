import Link from 'next/link';

import { getAllBlogs } from '@/utils/mdx';

export default function BlogList({ params }: { params: { locale: string } }) {
  const blogs = getAllBlogs();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold text-brand-dark">Blog Posts</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map(blog => (
          <Link
            key={blog.slug}
            href={`/${params.locale}/blog/${blog.slug}`}
            className="overflow-hidden rounded-lg bg-white shadow-sm transition hover:shadow-md"
          >
            <article>
              <img src={blog.image} alt="" className="h-48 w-full object-cover" />
              <div className="p-6">
                <h2 className="mb-2 text-2xl font-semibold text-brand-dark">{blog.title}</h2>
                <p className="mb-4 text-gray-600">{blog.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{blog.author}</span>
                  <time dateTime={blog.date}>
                    {new Date(blog.date).toLocaleDateString()}
                  </time>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}

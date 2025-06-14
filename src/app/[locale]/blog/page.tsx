import { getAllBlogs } from '@/utils/mdx';
import type { BlogFrontmatter } from '@/utils/mdx';
import BlogListClient from './BlogListClient';

interface BlogPageProps {
  params: {
    locale: string;
  };
}

export default function BlogList({ params }: BlogPageProps) {
  const blogs = getAllBlogs();

  // Extract unique categories
  const categories = ['All', ...new Set(blogs.map(blog => blog.category || 'Uncategorized'))];

  return (
    <BlogListClient
      blogs={blogs}
      categories={categories}
      locale={params.locale}
    />
  );
}

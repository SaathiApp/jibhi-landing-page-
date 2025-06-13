import fs from 'node:fs';
import path from 'node:path';

import matter from 'gray-matter';

const BLOGS_PATH = path.join(process.cwd(), 'src/content/blogs');

export type BlogFrontmatter = {
  title: string;
  date: string;
  description: string;
  author: string;
  image: string;
  slug: string;
};

export function getBlogFiles() {
  return fs.readdirSync(BLOGS_PATH);
}

export function getBlogBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(BLOGS_PATH, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    frontmatter: data as BlogFrontmatter,
    content,
  };
}

export function getAllBlogs() {
  const files = getBlogFiles();
  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '');
    const { frontmatter } = getBlogBySlug(slug);

    return {
      ...frontmatter,
      slug,
    };
  });

  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}

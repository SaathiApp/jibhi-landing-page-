import fs from 'node:fs';
import path from 'node:path';

import matter from 'gray-matter';

const BLOGS_PATH = path.join(process.cwd(), 'src/content/blogs');

export type FAQ = {
  question: string;
  answer: string;
};

export type Heading = {
  text: string;
  id: string;
  level: number;
};

export type BlogFrontmatter = {
  title: string;
  date: string;
  description: string;
  author: string;
  image: string;
  faqs?: FAQ[];
  slug: string;
};

export function getBlogFiles() {
  return fs.readdirSync(BLOGS_PATH);
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function extractHeadings(content: string): Heading[] {
  return content
    .split('\n')
    .filter(line => /^#{1,6}\s/.test(line))
    .map((line) => {
      const match = line.match(/^(#{1,6})\s+(.*)/);
      if (!match) {
        return null;
      }
      const level = match[1]?.length;
      const text = match[2]?.trim();
      const id = slugify(text ?? '');
      return { text, id, level } as Heading;
    })
    .filter(Boolean) as Heading[];
}

export function getBlogBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(BLOGS_PATH, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const headings = extractHeadings(content);

  return {
    slug: realSlug,
    frontmatter: data as BlogFrontmatter,
    content,
    headings,
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

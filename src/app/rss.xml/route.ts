import { posts } from '@/content/blog';
import { getBaseUrl } from '@/utils/Helpers';

export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = getBaseUrl();
  const items = posts
    .map(p => `<item><title>${p.metadata.title}</title><link>${baseUrl}/blog/${p.slug}</link><description>${p.metadata.summary}</description><pubDate>${p.metadata.date}</pubDate></item>`)  
    .join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel><title>Jibhi.ai Blog</title><link>${baseUrl}/blog</link>${items}</channel></rss>`;
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml',
    },
  });
}

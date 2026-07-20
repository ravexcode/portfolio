import type { APIRoute } from 'astro';

export const prerender = true;

const siteUrl = 'https://ravexcode.com';

export const GET: APIRoute = async () => {
  const pages = [''];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((path) => {
      const url = `${siteUrl}${path}`;
      return `<url><loc>${url}</loc></url>`;
    })
    .join('')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};

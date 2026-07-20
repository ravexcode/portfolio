import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = async () => {
  const body = `User-agent: *\nAllow: /\nSitemap: https://ravexcode.com/sitemap-index.xml\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};

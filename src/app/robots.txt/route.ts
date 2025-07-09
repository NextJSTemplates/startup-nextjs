import { type NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const baseUrl = `${req.nextUrl.protocol}//${req.headers.get('host')}`;

  const content = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}

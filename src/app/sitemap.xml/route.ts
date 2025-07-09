import { type NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const baseUrl = `${req.nextUrl.protocol}//${req.headers.get("host")}`;

  const routes = ["/", "/about-us", "/features", "/solutions", "/pricing", "/blogs", "/guide", "/faqs"];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap-style.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => `<url><loc>${baseUrl}${route}</loc></url>`)
  .join('\n')}
</urlset>`;


  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

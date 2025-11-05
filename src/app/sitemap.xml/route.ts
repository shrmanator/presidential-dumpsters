const baseUrl =
  (process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "") as string) ||
  "https://presidentialdumpsters.xyz";

const pages = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/faq", changefreq: "monthly", priority: "0.8" },
  { path: "/sizing-guide", changefreq: "monthly", priority: "0.9" },
  { path: "/new-haven", changefreq: "monthly", priority: "0.9" },
  { path: "/hartford", changefreq: "monthly", priority: "0.9" },
  { path: "/oakville", changefreq: "monthly", priority: "0.85" },
  { path: "/wolcott", changefreq: "monthly", priority: "0.85" },
];

const formatDate = (date: Date) => date.toISOString().split("T")[0];

export function GET() {
  const lastMod = formatDate(new Date());
  const urls = pages
    .map(
      ({ path, changefreq, priority }) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

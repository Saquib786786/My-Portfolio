import { NextResponse } from "next/server";

export async function GET(request) {
  const host = request?.headers?.get("host");
  const protocol = request?.headers?.get("x-forwarded-proto") || "https";
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (host && !host.includes("localhost")
      ? `${protocol}://${host}`
      : "https://saquib-portfolio-dev.vercel.app");

  // Portfolio sections for Mohd Saquib (QA & SDET in Mumbai)
  const urls = [
    { path: "", lastmod: "2025-02-15" },
    { path: "aboutus", lastmod: "2025-02-15" },
    { path: "projects", lastmod: "2025-02-15" },
    { path: "testing-lab", lastmod: "2025-02-15" },
    { path: "skills", lastmod: "2025-02-15" },
    { path: "contactus", lastmod: "2025-02-15" },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ path, lastmod }) => `  <url>
    <loc>${baseUrl}${path ? `/${path}` : ""}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}

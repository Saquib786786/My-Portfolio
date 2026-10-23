import { NextResponse } from "next/server";

export async function GET(request) {
  const host = request?.headers?.get("host");
  const protocol = request?.headers?.get("x-forwarded-proto") || "https";
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (host && !host.includes("localhost")
      ? `${protocol}://${host}`
      : "https://saquib-portfolio-dev.vercel.app");

  // Portfolio sections & project routes for Mohd Saquib (QA / SDET Portfolio)
  const urls = [
    // Main Sections
    { path: "", priority: "1.0", changefreq: "weekly" }, // homepage
    { path: "aboutus", priority: "0.9", changefreq: "monthly" },
    { path: "contactus", priority: "0.9", changefreq: "monthly" },
    { path: "projects", priority: "0.9", changefreq: "weekly" },
    { path: "testing-lab", priority: "0.9", changefreq: "weekly" },
    { path: "skills", priority: "0.8", changefreq: "monthly" },

    // Featured QA Projects & Lab Explorers
    { path: "projects/playwright-automation-lab", priority: "0.7", changefreq: "monthly" },
    { path: "projects/workflow", priority: "0.7", changefreq: "monthly" },
    { path: "projects/mandi-rate-tracker", priority: "0.7", changefreq: "monthly" },
    { path: "lab/bug-explorer", priority: "0.7", changefreq: "monthly" },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ path, priority, changefreq = "monthly" }) => `  <url>
    <loc>${baseUrl}${path ? `/${path}` : ""}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
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

import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = "https://fborges.dev";
const articlesDir = join(__dirname, "../src/data/articles");
const outFile = join(__dirname, "../public/sitemap.xml");

function parseDate(raw) {
  const match = raw.match(/^date:\s*"?(\d{2})\/(\d{2})\/(\d{4})"?/m);
  if (!match) return null;
  const [, day, month, year] = match;
  return `${year}-${month}-${day}`;
}

function getArticles() {
  return readdirSync(articlesDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const raw = readFileSync(join(articlesDir, file), "utf-8");
      return {
        slug: file.replace(/\.md$/, ""),
        lastmod: parseDate(raw),
      };
    });
}

function buildUrl(loc, lastmod, priority) {
  return [
    "  <url>",
    `    <loc>${SITE_URL}${loc}</loc>`,
    lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
    `    <priority>${priority}</priority>`,
    "  </url>",
  ]
    .filter(Boolean)
    .join("\n");
}

const staticRoutes = [
  { loc: "/", priority: "1.0" },
  { loc: "/projects", priority: "0.8" },
  { loc: "/articles", priority: "0.8" },
  { loc: "/books", priority: "0.5" },
];

const articleUrls = getArticles().map((article) =>
  buildUrl(`/articles/${article.slug}`, article.lastmod, "0.6")
);

const urls = [
  ...staticRoutes.map((route) => buildUrl(route.loc, null, route.priority)),
  ...articleUrls,
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

writeFileSync(outFile, xml);
console.log(`Sitemap written to ${outFile} (${urls.length} URLs)`);

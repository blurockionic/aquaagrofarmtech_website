const fs = require("fs");
const path = require("path");

const BASE_URL = "https://www.aquaagrofarmtech.com";

const routes = [
  "/",           
  "/about",      
  "/contact",    
  "/achievements", 
  "/gallery",
  "/irrigation",
  "/lanscaping",
  "/poluhouse",
  "/projects",
  "/services",
  "/testimonials"

];

const sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map((route) => `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>${route === "/" ? 1.0 : 0.8}</priority>
  </url>`)
    .join("")}
</urlset>
`;

// Write the sitemap to the public folder
const outputPath = path.resolve(__dirname, "public", "sitemap.xml");
fs.writeFileSync(outputPath, sitemap.trim());
console.log("Sitemap generated at:", outputPath);

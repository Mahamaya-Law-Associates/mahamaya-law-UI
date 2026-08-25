export default function sitemap() {
  const baseUrl = "https://mahamayalaw.in";

  const routes = ["", "/aboutus", "/contactus", "/careers", "/blogs"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}

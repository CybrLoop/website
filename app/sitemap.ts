import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://cybrloop.com", changeFrequency: "monthly", priority: 1 }];
}

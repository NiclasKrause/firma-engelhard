import type { MetadataRoute } from "next";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/projekte",
    "/unternehmen",
    "/ansprechpartner",
    "/karriere",
    "/kontakt",
  ];

  const serviceRoutes = services.map((s) => `/leistungen/${s.slug}`);
  const projectRoutes = projects.map((p) => `/projekte/${p.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes].map((path) => ({
    url: `${company.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}

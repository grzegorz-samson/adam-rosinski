import { defineCollection, z } from "astro:content";

const publications = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    year: z.number(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    href: z.string().url(),
    featured: z.boolean().default(false),
  }),
});

const researchAreas = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

export const collections = {
  publications,
  "research-areas": researchAreas,
};

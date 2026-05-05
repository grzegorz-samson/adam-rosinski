import { defineCollection, z } from "astro:content";

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
  "research-areas": researchAreas,
};

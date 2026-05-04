import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const recipes = defineCollection({
  loader: glob({ base: "./src/content/recipes", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    tags: z.array(z.string()).default([]),
    time: z.string().optional(),
    difficulty: z.string().optional(),
    servings: z.string().optional(),
    summary: z.string().optional()
  })
});

export const collections = { recipes };

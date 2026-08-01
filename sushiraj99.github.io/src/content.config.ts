import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const gifts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/gifts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    images: z.array(z.string()).optional(),
    date: z.coerce.date().optional(),
    tools: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    images: z.array(z.string()).optional(),
    date: z.coerce.date().optional(),
    tools: z.array(z.string()).optional(),
  }),
});

const cooking = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cooking' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date().optional(),
    time: z.string().optional(),
    servings: z.number().optional(),
    tags: z.array(z.string()).optional(),
    images: z.array(z.string()).optional(),
    calories: z.number().optional(),
    protein: z.number().optional(),
  }),
});

export const collections = { gifts, projects, cooking };

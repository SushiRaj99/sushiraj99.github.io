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

export const collections = { gifts };

import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    image: image().refine((img) => img.width >= 1080, {
      message: "Cover image must be at least 1080 pixels wide!",
    }),
    color: z.string().regex(/^[A-Fa-f0-9]+$/),
    date: z.string().datetime(),
    type: z.array(z.enum(["Design", "Development"])).nonempty(),
    technology: z.array(z.enum(["Figma", "Astro", "Tailwind"])).nonempty(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};

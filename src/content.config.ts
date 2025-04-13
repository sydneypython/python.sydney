// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `loader` and `schema` for each collection
const events = defineCollection({
    loader: glob({ pattern: '**/*.md', base: "./events" }),
    schema: z.object({
      title: z.string(),
      eventDate: z.string().datetime({ offset: true }),
      description: z.string(),
      rsvp_link: z.string().url().optional(),
      show_common_info: z.boolean().optional().default(true),
      // author: z.string(),
      // image: z.object({
      //   url: z.string(),
      //   alt: z.string()
      // }),
      // tags: z.array(z.string())
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = { events };
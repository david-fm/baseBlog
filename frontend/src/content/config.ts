// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';
// 2. Define your collection(s)
const blogCollection = defineCollection({ 
    type: 'content',
    schema: z.object({
        title: z.string(),
        image: z.object({
            src: z.string(),
            alt: z.string(),
        }),
        category: z.string(),
        tags: z.array(z.string()),
        author: z.string(),
        publishDate: z.string().transform(str => new Date(str))
    })
 });
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
};
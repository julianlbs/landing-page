import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { Article, Articles } from '../../core/blogTypes';
import { fetchBlogAPI } from '../../lib/blog/api';

export const t = initTRPC.create();

export const appRouter = t.router({
  getArticles: t.procedure
    .query(async () => {
      const response: Articles = await fetchBlogAPI("/articles", { populate: ["image", "category", "author"] });
      return response.data;
    }),

  getOneArticle: t.procedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      const response: { data: Article, meta: {}; } = await fetchBlogAPI(`/articles`, { filters: { slug: { $eq: input.slug } }, populate: ["image", "category", "author"] }, { encodeValuesOnly: true });
      return response.data;
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;

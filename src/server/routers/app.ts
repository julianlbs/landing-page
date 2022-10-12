import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { Articles } from '../../core/blogTypes';
import { fetchBlogAPI } from '../../lib/blog/api';

export const t = initTRPC.create();
export const appRouter = t.router({
  articles: t.procedure
    .query(async () => {
      const response: Articles = await fetchBlogAPI("/articles", { populate: ["image", "category", "author"] });
      return response.data;
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;

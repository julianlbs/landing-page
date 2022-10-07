import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { StrapiResponse } from '../../core/strapiResponse';

export const t = initTRPC.create();
export const appRouter = t.router({
  restaurantList: t.procedure
    .query(async () => {
      const response = await fetch("http://localhost:1337/api/restaurants");
      const responseData: StrapiResponse = await response.json();
      return responseData.data;
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;

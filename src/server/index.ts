import {eq} from "drizzle-orm";
import {sqliteDrizzle as db} from "@/server/data/dbManager/sqliteDrizzle";
import {z} from "zod";

import {publicProcedure, router} from "./trpc";

import {todoSchema} from "@/db/schema";
import {serviceContainer} from "@/server/services/serviceContainer";

const todoService = serviceContainer.cradle.todoService;
export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    return await todoService.fetchAll()
  }),
  getTodo: publicProcedure.input(z.number()).query(async ({ input }) => {
    const id = input;
    const value = await todoService.fetchById(id)
    return value
  }),
  addTodo: publicProcedure.input(z.string()).mutation(async (opts) => {
    await todoService.createEntity({ content: opts.input, done: 0 })
    return true;
  }),
  setDone: publicProcedure
    .input(
      z.object({
        id: z.number(),
        done: z.number(),
      })
    )
    .mutation(async (opts) => {
      const id = opts.input.id;
      const payload = { done: opts.input.done };
      return await todoService.updateEntityById(id, payload)
    }),
});

export type AppRouter = typeof appRouter;

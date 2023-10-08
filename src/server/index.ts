import {eq, sql} from "drizzle-orm";
import {sqliteDrizzle as db} from "@/server/data/dbManager/sqliteDrizzle";
import {z} from "zod";

import {publicProcedure, router} from "./trpc";

import {todos} from "@/db/schema";
import {serviceContainer} from "@/server/services/serviceContainer";
import {logAppDirError} from "next/dist/server/dev/log-app-dir-error";

const todoService = serviceContainer.cradle.todoService;
export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    return await db.select().from(todos).all();
  }),
  getTodo: publicProcedure.input(z.number()).query(async ({ input }) => {
    const id = input;
    const value = await todoService.fetchById(id)
    return value
  }),
  addTodo: publicProcedure.input(z.string()).mutation(async (opts) => {
    await db.insert(todos).values({ content: opts.input, done: 0 }).run();
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
       await db
        .update(todos)
        .set({ done: opts.input.done })
        .where(eq(todos.id, opts.input.id))
        .run();
      return true;
    }),
});

export type AppRouter = typeof appRouter;

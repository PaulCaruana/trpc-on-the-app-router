import {z} from "zod";

import {publicProcedure, createTRPCRouter} from "@/server/api/trpc";
import {serviceContainer} from "@/server/services/serviceContainer";

const todoService = serviceContainer.cradle.todoService;
export const todoRouter = createTRPCRouter({
  fetchAll: publicProcedure.query(async () => {
    return await todoService.fetchAll()
  }),
  fetchById: publicProcedure.input(z.number()).query(async ({ input }) => {
    const id = input;
    const value = await todoService.fetchById(id)
    return value
  }),
  create: publicProcedure.input(z.string()).mutation(async (opts) => {
    await todoService.createEntity({ content: opts.input, done: 0 })
    return true;
  }),
  markAsDone: publicProcedure
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



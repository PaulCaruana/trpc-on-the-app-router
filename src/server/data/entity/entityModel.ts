import { z } from 'zod';

export const IdSchema = z.object({
  id: z.string().or(z.number()),
});
export type Id = z.infer<typeof IdSchema>;

import { createTRPCReact } from "@trpc/react-query";

import { type AppRouter } from "@/server/api/trpc/routers/root";

export const trpc = createTRPCReact<AppRouter>({});

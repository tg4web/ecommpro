import { publicProcedure, router } from "../trpc";

export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    return [
      { id: 1, text: "Hello" },
      { id: 2, text: "World" },
    ];
  }),
});

import { publicProcedure, router } from "../trpc";
import * as z from "zod";
import type { User } from "@clerk/nextjs/api";
import prisma from "../prisma/client";
import { currentUser } from "@clerk/nextjs";

export const appRouter = router({
  findUserStore: publicProcedure.input(z.string()).query(async (req) => {
    const store = await prisma.store.findUnique({
      where: {
        ownerId: req.input,
      },
    });

    if (!store) {
      return null;
    }
    return store;
  }),
  createUserStore: publicProcedure
    .input(z.object({ storeName: z.string().min(1) }))
    .mutation(async (req) => {
      const user = await currentUser();

      if (!user) {
        return null;
      }

      const store = await prisma.store
        .create({
          data: {
            name: req.input.storeName,
            ownerId: user.id,
            storeId: req.input.storeName + "-?" + user.id,
          },
        })
        .then((store) => {
          return store;
        });
        return store;
    }),
});

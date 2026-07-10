import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../prisma/generated/prisma/client";
import { env } from "@/env";

export const prisma = new PrismaClient({
    adapter: new PrismaPg({
        connectionString: env.DATABASE_URL,
    }),
    log: env.NODE_ENV === "dev" ? ["query"] : [],
})

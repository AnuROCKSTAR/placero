import { PrismaClient } from '@prisma/client';

const prisma = globalThis.prismaGlobal ?? new PrismaClient();

declare global {
  var prismaGlobal: PrismaClient | undefined;
}

if (process.env.NODE_ENV !== 'production') {
  globalThis.prismaGlobal = prisma;
}

export { prisma };

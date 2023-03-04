import { PrismaClient as PrismaClient1 } from "../../prisma/generated/client1/index.js";
import { PrismaClient as PrismaClient2 } from "../../prisma/generated/client2/index.js";

const prisma = new PrismaClient1();
const prismaMongo = new PrismaClient2();

export { prisma, prismaMongo };

import { PrismaClient } from "@prisma/client";

//make connection with bd
export const prisma = new PrismaClient()
import { PrismaClient } from "@prisma/client"

declare global {
  // eslint-disable-next-line no-unused-vars
  var cachePrisma: PrismaClient
}

let prisma: PrismaClient
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient()
} else {
  if (!global.cachePrisma) {
    global.cachePrisma = new PrismaClient()
  }
  prisma = global.cachePrisma
}

export const db = prisma

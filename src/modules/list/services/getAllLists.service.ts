import { prisma } from "@/shared/infra/prisma/client";

export async function getAllLists() {
  const lists = await prisma.list.findMany({
    orderBy: { createdAt: "desc" },
  });

  return lists;
}

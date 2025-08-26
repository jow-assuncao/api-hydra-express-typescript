import { prisma } from "@/shared/infra/prisma/client";

export async function deleteListItem(id: string) {
  const hasItem = await prisma.listItem.findUnique({
    where: {
      id,
    },
  });

  if (!hasItem) return false;

  await prisma.listItem.delete({
    where: {
      id,
    },
  });

  return true;
}

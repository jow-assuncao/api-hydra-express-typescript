import { prisma } from "@/shared/infra/prisma/client";

export async function getAllListItemsFromList(listId: string) {
  const listItems = await prisma.listItem.findMany({
    where: {
      listId,
    },
  });

  return listItems;
}

import { prisma } from "@/shared/infra/prisma/client";
import { CreateListItemInput } from "../schemas/listItem.schema";

export async function createListItem(data: CreateListItemInput) {
  const listItem = await prisma.listItem.create({
    data,
  });

  return listItem;
}

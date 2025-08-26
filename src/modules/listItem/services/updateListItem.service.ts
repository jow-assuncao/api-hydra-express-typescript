import { prisma } from "@/shared/infra/prisma/client";
import { UpdateListItemInput } from "../schemas/listItem.schema";

export async function updateListItem(id: string, data: UpdateListItemInput) {
  const exists = await prisma.listItem.findUnique({
    where: {
      id,
    },
  });

  if (!exists) return null;

  const updated = await prisma.listItem.update({
    where: {
      id,
    },
    data,
  });

  return updated;
}

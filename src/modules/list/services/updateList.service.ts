import { UpdateListInput } from "../schemas/list.schema";
import { prisma } from "@/shared/infra/prisma/client";

export async function updateList(id: string, data: UpdateListInput) {
  const exists = await prisma.list.findUnique({ where: { id } });
  if (!exists) return null;

  const updatedList = await prisma.list.update({
    where: { id },
    data,
  });

  return updatedList;
}

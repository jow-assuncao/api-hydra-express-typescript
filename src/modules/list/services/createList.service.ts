import { prisma } from "@/shared/infra/prisma/client";
import { CreateListInput } from "../schemas/list.schema";

export async function createList(data: CreateListInput) {
  const list = await prisma.list.create({
    data,
  });

  return list;
}

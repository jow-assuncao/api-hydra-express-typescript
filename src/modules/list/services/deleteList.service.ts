import { prisma } from "@/shared/infra/prisma/client";

export async function deleteList(id: string) {
  const hasList = await prisma.list.findUnique({
    where: { id },
  });

  if (!hasList) return false;

  await prisma.list.delete({
    where: { id },
  });

  return true;
}

import { prisma } from "@/shared/infra/prisma/client";

export async function getListById(id: string) {
  const list = await prisma.list.findUnique({
    where: { id },
    include: {
      ListItem: true,
    },
  });

  return list;
}

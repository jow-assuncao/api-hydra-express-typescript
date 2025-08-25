import { Request, Response } from "express";
import { updateListSchema } from "../schemas/list.schema";
import { updateList } from "../services/updateList.service";

export async function updateListController(req: Request, res: Response) {
  const { id } = req.params;
  const data = updateListSchema.parse(req.body);

  const updatedList = await updateList(id, data);

  if (!updateList)
    return res.status(404).json({ message: "Lista não encontrada" });

  return res.json(updatedList);
}

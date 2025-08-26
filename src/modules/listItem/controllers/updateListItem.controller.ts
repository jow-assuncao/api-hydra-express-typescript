import { Request, Response } from "express";
import { updateListItemSchema } from "../schemas/listItem.schema";
import { updateListItem } from "../services/updateListItem.service";

export async function updateListItemController(req: Request, res: Response) {
  const { id } = req.params;

  const data = updateListItemSchema.parse(req.body);

  const updated = await updateListItem(id, data);

  if (!updated) return res.status(404).json({ message: "Item não encontrado" });

  return res.json(updated);
}

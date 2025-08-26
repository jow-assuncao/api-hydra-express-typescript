import { Request, Response } from "express";
import { deleteListItem } from "../services/deleteListItem.service";

export async function deleteListItemController(req: Request, res: Response) {
  const { id } = req.params;

  const deleted = await deleteListItem(id);

  if (!deleted) return res.status(404).json({ message: "Item não encontrado" });

  return res.status(204).send();
}

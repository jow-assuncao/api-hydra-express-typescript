import { Request, Response } from "express";
import { deleteList } from "../services/deleteList.service";

export async function deleteListController(req: Request, res: Response) {
  const { id } = req.params;

  const deletedList = await deleteList(id);

  if (!deletedList)
    return res.status(404).json({ message: "Lista não encontrada" });

  return res.status(204).send();
}

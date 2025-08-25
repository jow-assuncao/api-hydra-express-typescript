import { Response, Request } from "express";
import { getListById } from "../services/getListById.service";

export async function getListByIdController(req: Request, res: Response) {
  const { id } = req.params;

  const list = await getListById(id);

  if (!list) return res.status(404).json({ message: "Lista não encontrada" });

  return res.status(200).json(list);
}

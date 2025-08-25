import { Request, Response } from "express";
import { createList } from "../services/createList.service";
import { createListSchema } from "../schemas/list.schema";

export async function createListController(req: Request, res: Response) {
  const body = createListSchema.parse(req.body);

  const list = await createList(body);

  return res.status(201).json(list);
}

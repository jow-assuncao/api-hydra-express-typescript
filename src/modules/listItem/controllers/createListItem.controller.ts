import { Request, Response } from "express";
import { createListItemSchema } from "../schemas/listItem.schema";
import { createListItem } from "../services/createListItem.service";

export async function createListItemController(req: Request, res: Response) {
  const body = createListItemSchema.parse(req.body);

  const listItem = await createListItem(body);

  return res.status(201).json(listItem);
}

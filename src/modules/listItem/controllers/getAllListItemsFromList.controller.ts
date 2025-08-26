import { Request, Response } from "express";
import { getAllListItemsFromList } from "../services/getAllListItemsFromList.service";

export async function getAllListItemsFromListController(
  req: Request,
  res: Response
) {
  const { listId } = req.params;

  const listItems = await getAllListItemsFromList(listId);

  return res.status(200).json(listItems);
}

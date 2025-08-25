import { Request, Response } from "express";
import { getAllLists } from "../services/getAllLists.service";

export async function getAllListsController(req: Request, res: Response) {
  const lists = await getAllLists();

  return res.status(200).json(lists);
}

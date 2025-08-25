import { Router } from "express";
import { createListController } from "./controllers/createList.controller";
import { getAllListsController } from "./controllers/getAllLists.controller";
import { getListByIdController } from "./controllers/getListById.controller";
import { deleteListController } from "./controllers/deleteList.controller";
import { updateListController } from "./controllers/updateList.controller";

const listRoutes = Router();

listRoutes.post("/", createListController);
listRoutes.get("/", getAllListsController);
listRoutes.get("/:id", getListByIdController);
listRoutes.delete("/:id", deleteListController);
listRoutes.put("/:id", updateListController);

export { listRoutes };

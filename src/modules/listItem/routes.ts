import { Router } from "express";
import { createListItemController } from "./controllers/createListItem.controller";
import { getAllListItemsFromListController } from "./controllers/getAllListItemsFromList.controller";
import { deleteListItemController } from "./controllers/deleteListItem.controller";
import { updateListItemController } from "./controllers/updateListItem.controller";

const listItemRoutes = Router();

listItemRoutes.post("/", createListItemController);
listItemRoutes.get("/:listId", getAllListItemsFromListController);
listItemRoutes.delete("/:id", deleteListItemController);
listItemRoutes.put("/:id", updateListItemController);

export { listItemRoutes };

import { Socket } from "socket.io";
import { WsServer } from ".";
import { z } from "zod";
import {
  createListItemSchema,
  updateListItemSchema,
} from "@/modules/listItem/schemas/listItem.schema";
import { createListItem } from "@/modules/listItem/services/createListItem.service";
import { updateListItem } from "@/modules/listItem/services/updateListItem.service";
import { deleteListItem } from "@/modules/listItem/services/deleteListItem.service";

const joinSchema = z.object({ listId: z.uuid() });
const leaveSchema = z.object({ listId: z.uuid() });

export function registerListItemHandlers(io: WsServer, socket: Socket) {
  socket.on("list:join", async (payload) => {
    const { listId } = joinSchema.parse(payload);

    console.log("joined");

    const room = `list:${listId}`;

    await socket.join(room);
    io.to(room).emit("list:joined", { listId });
  });

  socket.on("list:leave", async (payload) => {
    const { listId } = leaveSchema.parse(payload);

    const room = `list:${listId}`;

    await socket.leave(room);
    io.to(room).emit("list:leaved", { listId });
  });

  socket.on("list:item:create", async (payload) => {
    const listItem = createListItemSchema.parse(payload);

    const created = await createListItem(listItem);

    const room = `list:${listItem.listId}`;

    io.to(room).emit("list:item:created", created);
  });

  socket.on("list:item:update", async (payload) => {
    console.log("in:update");
    const listItem = updateListItemSchema.parse(payload);

    const updated = await updateListItem(payload.id!, listItem);

    const room = `list:${listItem.listId}`;

    io.to(room).emit("list:item:updated", updated);
  });

  socket.on("list:item:delete", async ({ listId, listItemId }) => {
    console.log("in:delete");
    await deleteListItem(listItemId);

    const room = `list:${listId}`;

    io.to(room).emit("list:item:deleted", { listItemId });
  });
}

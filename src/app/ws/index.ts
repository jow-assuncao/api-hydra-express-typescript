import { Server as HttpServer } from "http";
import { Server } from "socket.io";
import { registerListItemHandlers } from "./list-item.handlers";

export type WsServer = Server;

export function startWsServer(server: HttpServer) {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`Socket connected: ${socket.id}`);

    registerListItemHandlers(io, socket);

    socket.on("disconnect", () => {
      console.log(`Socket disconnected: ${socket.id}`);
    });

    socket.emit("hello", "world");
  });

  return io;
}

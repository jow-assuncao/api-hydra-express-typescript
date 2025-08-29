import { env } from "@/config/env";
import express from "express";
import cors from "cors";

import { listRoutes } from "@/modules/list/routes";
import { listItemRoutes } from "@/modules/listItem/routes";

export async function startHttpServer() {
  const app = express();

  app.use(express.json());
  app.use(cors({ origin: "http://localhost:5173" }));
  app.use("/list", listRoutes);
  app.use("/list-item", listItemRoutes);

  const PORT = env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(
      `Hydra server is running... Port: ${PORT}/Environment: ${env.NODE_ENV}`
    );
  });
}

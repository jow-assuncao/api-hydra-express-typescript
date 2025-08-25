import { env } from "@/config/env";
import express, { Request, Response } from "express";

import { listRoutes } from "@/modules/list/routes";

export async function startHttpServer() {
  const app = express();

  app.use(express.json());
  app.use("/list", listRoutes);

  const PORT = env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(
      `Hydra server is running... Port: ${PORT}/Environment: ${env.NODE_ENV}`
    );
  });
}

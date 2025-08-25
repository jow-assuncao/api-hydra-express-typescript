import { startHttpServer } from "@/app/http";
import { prisma } from "@/shared/infra/prisma/client";

export async function bootstrap() {
  try {
    await prisma.$connect();
    console.log("Supabase DB connection estabilished");

    await startHttpServer();
  } catch (err) {
    console.error("Error on connecting with Supabase DB");
    process.exit(1);
  }
}

process.on("SIGINT", async () => {
  await prisma.$disconnect();
  console.log("Supabase DB connection ended");
  process.exit(0);
});

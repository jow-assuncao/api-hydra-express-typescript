import { z } from "zod";

export const createListSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  description: z.string(),
});

export const updateListSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
});

export type CreateListInput = z.infer<typeof createListSchema>;
export type UpdateListInput = z.infer<typeof updateListSchema>;

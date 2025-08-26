import { z } from "zod";

export const createListItemSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  description: z.string(),
  quantity: z.number().default(1),
  checked: z.boolean().default(false),
  listId: z.string(),
});

export const updateListItemSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  quantity: z.number().optional(),
  checked: z.boolean().optional(),
  listId: z.string().optional(),
});

export type CreateListItemInput = z.infer<typeof createListItemSchema>;
export type UpdateListItemInput = z.infer<typeof updateListItemSchema>;

import { z } from "zod"

export const createBookSagaSchema = z.object({
  name: z.string().trim().min(1, "El nombre es requerido"),
})
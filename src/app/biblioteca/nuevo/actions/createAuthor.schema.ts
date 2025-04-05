import { z } from "zod"

export const createAuthorSchema = z.object({
  name: z.string().trim().min(1, "El nombre es requerido"),
})
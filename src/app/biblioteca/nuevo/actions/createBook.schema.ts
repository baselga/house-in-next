import { z } from "zod"

export const createBookSchema = z.object({
  title: z.string().trim().min(1, "El título es requerido"),
  url: z.union([z.literal(""), z.string().trim().url("La url no es correcta").optional()])    
})
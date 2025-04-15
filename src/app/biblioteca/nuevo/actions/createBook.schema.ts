import { z } from "zod"

export const createBookSchema = z.object({
  title: z.string().trim().min(1, "El título es requerido"),  
  urlImage: z.string().trim().url("La url no es correcta").or(z.literal("")),
  authorId: z.string().uuid({message: "El valor no es correcto"}),  
  sagaBookId: z.string().trim().uuid().or(z.literal("")),
  order: z.coerce.number().optional(),
}).refine((data) => !(data.sagaBookId && !data.order), {
  message: "El campo orden es requerido",
  path: ["order"],
})


import * as z from "zod";

const schema = {
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 carácteres",
  }),
  stock: z.coerce.number(),
  minStock: z.coerce.number().min(1),
  optimalStock: z.coerce.number().min(1),
};

export const EdibleValidatorSchema = z
  .object({
    id: z.string(),
    ...schema,
    trash: z.boolean(),
  })
  .refine((data) => data.optimalStock >= data.minStock, {
    message: "El stock óptimo debe ser mayor al mínimo.",
    path: ["optimalStock"],
  });

export const EdibleCreateValidatorSchema = z
  .object(schema)
  .refine((data) => data.optimalStock >= data.minStock, {
    message: "El stock óptimo debe ser mayor al mínimo.",
    path: ["optimalStock"],
  });

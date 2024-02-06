import * as z from "zod";

const schema = {
  name: z
    .string()
    .min(2, {
      message: "El nombre debe tener al menos 2 carácteres",
    })
    .max(255, {
      message: "El nombre debe tener un máximo de 255 carácteres",
    }),
  order: z.coerce.number().min(0),
  parentId: z.nullable(z.string()),
};

export const EdibleCategoryValidatorSchema = z.object({
  id: z.string(),
  ...schema,  
});

export const EdibleCategoryCreateValidatorSchema = z.object(schema);

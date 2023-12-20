import { Edible } from "../../domain/Edible";
import { EdibleRepository } from "../../domain/EdibleRepository";
import { EdibleValidatorSchema } from "../../domain/EdibleValidators";

export const updateEdible = (
  repository: EdibleRepository,
  data: Edible
) => {
  const values = EdibleValidatorSchema.parse(data)
  return repository.updateEdible(values);
};

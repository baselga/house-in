import { uuid } from "@/modules/shared/infraestructure/uuid";
import { Edible, EdibleCreate } from "../../domain/Edible";
import { EdibleRepository } from "../../domain/EdibleRepository";
import { EdibleValidatorSchema } from "../../domain/EdibleValidators";

export const createEdible = (
  repository: EdibleRepository,
  data: EdibleCreate
) => {
  const body: Edible = {
    id: uuid.get(),
    trash: false,
    ...data,
  };

  const values = EdibleValidatorSchema.parse(body)    
  return repository.createEdible(values);
};

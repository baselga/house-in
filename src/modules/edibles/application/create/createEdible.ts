import { uuid } from "@/modules/shared/infraestructure/uuid";
import { Edible, EdibleCreate } from "../../domain/Edible";
import { EdibleRepository } from "../../domain/EdibleRepository";

export const createEdible = (
  repository: EdibleRepository,
  data: EdibleCreate
) => {
  const body: Edible = {
    id: uuid.get(),
    trash: false,
    ...data,
  };
  return repository.createEdible(body);
};

import { EdibleId } from "../../domain/Edible";
import { EdibleRepository } from "../../domain/EdibleRepository";

export const deleteEdible = (repository: EdibleRepository, id: EdibleId) => {
  return repository.deleteEdible(id);
};

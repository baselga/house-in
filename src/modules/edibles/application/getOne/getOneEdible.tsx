import { EdibleId } from "../../domain/Edible";
import { EdibleRepository } from "../../domain/EdibleRepository";

const getOneEdible = (repository: EdibleRepository, id: EdibleId) => {
  return repository.getOne(id);
};

export default getOneEdible;

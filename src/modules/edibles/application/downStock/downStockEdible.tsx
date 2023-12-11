import { EdibleId } from "../../domain/Edible";
import { EdibleRepository } from "../../domain/EdibleRepository";

const downStockEdible = async (repository: EdibleRepository, id: EdibleId) => {
  const edible = await repository.getOne(id);
  if(edible.stock === 0) {
    throw "El stock ya es 0."
  }
  edible.stock--;
  return repository.updateEdible(edible);
};

export default downStockEdible;

import { EdibleId } from "../../domain/Edible";
import { EdibleRepository } from "../../domain/EdibleRepository";

const upStockEdible = async (repository: EdibleRepository, id: EdibleId) => {
  const edible = await repository.getOne(id);
  edible.stock++;
  return repository.updateEdible(edible);
};

export default upStockEdible;

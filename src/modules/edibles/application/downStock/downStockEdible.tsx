import { EdibleId } from "../../domain/Edible";
import { EdibleRepository } from "../../domain/EdibleRepository";
import { EdibleValidatorSchema } from "../../domain/EdibleValidators";

const downStockEdible = async (repository: EdibleRepository, id: EdibleId) => {
  const edible = await repository.getOne(id);
  if(edible.stock === 0) {
    throw "El stock ya es 0."
  }
  edible.stock--;

  const values = EdibleValidatorSchema.parse(edible)  
  return repository.updateEdible(values);
};

export default downStockEdible;

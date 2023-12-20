import { EdibleId } from "../../domain/Edible";
import { EdibleRepository } from "../../domain/EdibleRepository";
import { EdibleValidatorSchema } from "../../domain/EdibleValidators";

const upStockEdible = async (repository: EdibleRepository, id: EdibleId) => {
  const edible = await repository.getOne(id);
  edible.stock++;

  const values = EdibleValidatorSchema.parse(edible)
  return repository.updateEdible(values);
};

export default upStockEdible;

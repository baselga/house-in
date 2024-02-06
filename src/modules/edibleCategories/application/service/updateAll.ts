import { uuid } from "@/modules/shared/infraestructure/uuid";
import {
  EdibleCategory,
  EdibleCategoryCreate,
} from "../../domain/EdibleCategory";
import { EdibleCategoryRepository } from "../../domain/EdibleCategoryRepository";
import {
  EdibleCategoryCreateValidatorSchema,
  EdibleCategoryValidatorSchema,
} from "../../domain/EdibleCategoryValidator";

export const updateAllEdibleCategories = async (
  repository: EdibleCategoryRepository,
  data: (EdibleCategoryCreate | EdibleCategory)[]
) => {
  const values = data.map((each) => {
    if (!each.id) {
      return EdibleCategoryCreateValidatorSchema.parse(each);
    }
    return EdibleCategoryValidatorSchema.parse(each);
  }) as (EdibleCategory | EdibleCategoryCreate)[];

  const originals = await repository.getList({});
  const deleteItems = originals.data.filter((each: EdibleCategory) => {
    return !values.find((category) => category?.id === each.id);
  });

  await Promise.all(deleteItems.map((each) => repository.delete(each.id)));

  return Promise.all(
    values.map((each, index) => {
      if (!each.id) {
        return repository.create({
          ...each,
          id: uuid.get(),
          order: index,
        });
      }
      return repository.update(each);
    })
  );
};

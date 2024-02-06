import { EdibleCategory, EdibleCategoryCreate } from "../../domain/EdibleCategory";
import { EdibleCategoryRepository } from "../../domain/EdibleCategoryRepository";
import { EdibleCategoryQueryParams, getListEdibleCategories } from "./getList";
import { updateAllEdibleCategories } from "./updateAll";

export const EdibleCategoryService = (
  repository: EdibleCategoryRepository
) => ({
  getList: (queryParams: EdibleCategoryQueryParams) =>
    getListEdibleCategories(repository, queryParams),

  updateAll: (data: Array<EdibleCategory | EdibleCategoryCreate>) => 
    updateAllEdibleCategories(repository, data)
});

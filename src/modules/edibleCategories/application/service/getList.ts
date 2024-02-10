import { QueryParams } from "@/modules/shared/domain/QueryParams";
import { EdibleCategoryRepository } from "../../domain/EdibleCategoryRepository";

export type EdibleCategoryQueryParams = QueryParams & {
  sort?: {
    field?: "name" | "order";
  };
};

export const getListEdibleCategories = (
  repository: EdibleCategoryRepository,
  queryParams: EdibleCategoryQueryParams,
) => {
  const { sort, ...rest } = queryParams;
  const field = sort?.field ?? "order";
  const order = sort?.order ?? "ASC";

  return repository.getList({
    sort: { field, order },
    ...rest,
  });
};

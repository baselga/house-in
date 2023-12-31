import { QueryParams } from "@/modules/shared/domain/QueryParams";
import { EdibleRepository } from "../../domain/EdibleRepository";

export type EdibleQueryParamsPerPage = 5 | 10 | 20
export type EdibleQueryParams = QueryParams & {
  pagination?: {
    perPage?: EdibleQueryParamsPerPage;
  };
  sort?: {
    field?: "name" | "stock" | "minStock" | "optimalStock"
  }
};

export const  getEdibles = (repository: EdibleRepository, queryParams: EdibleQueryParams) => {
  const { pagination = {}, ...rest } = queryParams;
  const { page = 1, perPage = 20 } = pagination;

  return repository.getEdibles({
    pagination: { page, perPage },
    ...rest
  });
}
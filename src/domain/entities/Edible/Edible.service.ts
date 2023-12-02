import { queryType } from "@/domain/types/query";
import { edibleRepository } from "@/infrastructure/entities/Edible/edible.repository";

export type edibleQueryTypePerPage = 5 | 10 | 20
export type edibleQueryType = queryType & {
  pagination?: {
    perPage?: edibleQueryTypePerPage;
  };
  sort?: {
    field?: "name" | "stock" | "minStock" | "optimalStock"
  }
};

export const edibleService = {
  getEdibles: (props: edibleQueryType = {}) => {
    const { pagination = {}, ...rest } = props;
    const { page = 1, perPage = 20 } = pagination;

    return edibleRepository.getEdibles({
      pagination: { page, perPage },
      ...rest
    });
  },
};

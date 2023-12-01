import { queryType } from "@/domain/types/query";
import { edibleRepository } from "@/infrastructure/entities/Edible/edible.repository";

export const edibleService = {
  getEdibles: (props: queryType = {}) => {
    const { pagination = {} } = props;
    const { page = 1, perPage = 20 } = pagination;

    return edibleRepository.getEdibles({
      pagination: { page, perPage },
    });
  }  
};

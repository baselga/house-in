import { edibleRepository } from "../../infrastructure/repositories/edible.repository";
import { Edible, EdibleStockLevel } from "../models/Edible";
import { QueryType } from "../types/query";

export const edibleService = {
  getEdibles: (props: QueryType = {}) => {
    const { pagination = {} } = props;
    const { page = 1, perPage = 20 } = pagination;

    return edibleRepository.getEdibles({
      pagination: { page, perPage },
    });
  },
  getStockLevel: (edible: Edible): EdibleStockLevel => {
    if (edible.stock < edible.minStock) {
      return "low";
    } else if (
      edible.stock >= edible.minStock &&
      edible.stock < edible.optimalStock
    ) {
      return "medium";
    } else {
      return "high";
    }
  },
};

import { stockLevel } from "@/domain/types/commons";
import { Edible } from "./Edible.model";

export const edibleUserCase = {
  getStockLevel: (edible: Edible): stockLevel => {
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

import { StockLevel } from "@/modules/shared/domain/StockLevel";
import { Edible } from "../../domain/Edible";

export const edibleUseCases = { 
  getStockLevel: (edible: Edible): StockLevel => {
    if(edible.stock >= edible.optimalStock) {
      return "high"
    }
    if(edible.stock >= edible.minStock) {
      return "medium"
    }
    return "low"
  }
}
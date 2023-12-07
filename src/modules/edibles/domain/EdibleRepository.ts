import { QueryParams } from "@/modules/shared/domain/QueryParams";
import { Edible } from "./Edible";

export interface EdibleRepository {
  getEdibles: (queryParams: QueryParams) => Promise<{
    data: Edible[];
    total: number;
  }>;
  createEdible: (data: Edible) => Promise<Edible>
}

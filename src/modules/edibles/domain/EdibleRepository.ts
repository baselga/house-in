import { QueryParams } from "@/modules/shared/domain/QueryParams";
import { Edible, EdibleId } from "./Edible";

export interface EdibleRepository {
  getOne: (id: EdibleId) => Promise<Edible>
  getEdibles: (queryParams: QueryParams) => Promise<{
    data: Edible[];
    total: number;
  }>;
  createEdible: (data: Edible) => Promise<Edible>;
  updateEdible: (data: Edible) => Promise<Edible>;
  deleteEdible: (id: EdibleId) => Promise<void>;
}

import { Edible } from "@/domain/entities/Edible/Edible.model";
import { EdibleDTO } from "./edible.dto";
import { QueryParams } from "@/infrastructure/http/formatQuery";
import { http } from "@/infrastructure/http/http";

export const edibleRepository = {
  getEdibles: async (queryParams: QueryParams) => {
    const edibles = await http.get<EdibleDTO[]>(
      "http://localhost:3001/edibles",
      queryParams
    );

    return edibles.map(
      (edibleDto): Edible => ({
        id: edibleDto.id,
        name: edibleDto.name,
        stock: edibleDto.stock,
        minStock: edibleDto.minStock,
        optimalStock: edibleDto.optimalStock,
        trash: edibleDto.trash,
      })
    );
  },
};

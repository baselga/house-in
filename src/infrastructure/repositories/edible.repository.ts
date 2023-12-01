import { Edible } from "../../domain/models/Edible";
import { EdibleDTO } from "../http/dto/EdibleDTO";
import { QueryParams } from "../http/formatQuery";
import { http } from "../http/http";

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

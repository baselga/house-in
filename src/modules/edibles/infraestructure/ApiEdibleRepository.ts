import { QueryParams } from "@/modules/shared/domain/QueryParams";
import { http } from "@/modules/shared/infraestructure/http/http";
import { EdibleRepository } from "../domain/EdibleRepository";
import { Edible } from "../domain/Edible";

type EdibleDTO = {
  id: string,
  name: string,
  stock: number,
  minStock: number,
  optimalStock: number,
  trash: boolean
}

export const ApiEdibleRepository: EdibleRepository = {
  getEdibles: async (queryParams: QueryParams) => {
    const { data, total } = await http.get<EdibleDTO[]>(
      "http://localhost:3001/edibles",
      queryParams
    );

    return {
      data: data.map(
        (edibleDto): Edible => ({
          id: edibleDto.id,
          name: edibleDto.name,
          stock: edibleDto.stock,
          minStock: edibleDto.minStock,
          optimalStock: edibleDto.optimalStock,
          trash: edibleDto.trash,
        })
      ),
      total,
    };
  },

  createEdible: async (data: Edible) => {
    const body: EdibleDTO = {
      id: data.id,
      name: data.name,
      stock: data.stock,
      minStock: data.minStock,
      optimalStock: data.optimalStock,
      trash: data.trash,
    };

    const edible = await http.post<Edible>("http://localhost:3001/edibles", body);    
    return edible
  },
}
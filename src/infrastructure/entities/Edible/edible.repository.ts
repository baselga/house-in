import { Edible, EdibleCreate } from "@/domain/entities/Edible/Edible.model";
import { EdibleDTO } from "./edible.dto";
import { QueryParams } from "@/infrastructure/http/formatQuery";
import { http } from "@/infrastructure/http/http";
import { uuid } from "@/infrastructure/uuid";

export const edibleRepository = {
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

  createEdible: async (data: EdibleCreate) => {
    const body: EdibleDTO = {
      id: uuid.get(),
      name: data.name,
      stock: data.stock,
      minStock: data.minStock,
      optimalStock: data.optimalStock,
      trash: false,
    };

    const edible = await http.post<Edible>("http://localhost:3001/edibles", body);    
    return edible
  },
};

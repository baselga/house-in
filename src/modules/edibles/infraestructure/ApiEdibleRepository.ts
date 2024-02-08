import { QueryParams } from "@/modules/shared/domain/QueryParams";
import { http } from "@/modules/shared/infraestructure/http/http";
import { EdibleRepository } from "../domain/EdibleRepository";
import { Edible, EdibleId } from "../domain/Edible";

type EdibleDTO = {
  id: string,
  name: string,
  stock: number,
  minStock: number,
  optimalStock: number,
  categoryIds?: string[],
  trash: boolean
}

function dtoToEdible(edibleDto: EdibleDTO): Edible {
  return {
    id: edibleDto.id,
    name: edibleDto.name,
    stock: edibleDto.stock,
    minStock: edibleDto.minStock,
    optimalStock: edibleDto.optimalStock,
    categoryIds: edibleDto.categoryIds,
    trash: edibleDto.trash,
  }
}

export const ApiEdibleRepository: EdibleRepository = {
  getOne: async (id: EdibleId) => {
    const edibleDto = await http.getOne<EdibleDTO>(`http://localhost:3001/edibles/${id}`)
    return dtoToEdible(edibleDto)
  },

  getEdibles: async (queryParams: QueryParams) => {
    const { data, total } = await http.get<EdibleDTO[]>(
      "http://localhost:3001/edibles",
      queryParams
    );

    return {
      data: data.map(
        (edibleDto) => dtoToEdible(edibleDto)
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
      categoryIds: data.categoryIds,
      trash: data.trash,
    };

    const edible = await http.post<Edible>("http://localhost:3001/edibles", body);    
    return edible
  },

  updateEdible:async (data: Edible) => {
    const edibleDto = await http.put<EdibleDTO>(`http://localhost:3001/edibles/${data.id}`, data)
    return dtoToEdible(edibleDto)
  },

  deleteEdible: async (id: EdibleId) => {
    return await http.delete<void>(`http://localhost:3001/edibles/${id}`)
  }
}
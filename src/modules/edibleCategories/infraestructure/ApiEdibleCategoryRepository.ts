import { QueryParams } from "@/modules/shared/domain/QueryParams";
import { EdibleCategoryRepository } from "../domain/EdibleCategoryRepository";
import { EdibleCategory, EdibleCategoryId } from "../domain/EdibleCategory";
import { http } from "@/modules/shared/infraestructure/http/http";

type EdibleCategoryDTO = {
  id: string;
  name: string;
  order: number;
  parentId: string | null;
};

function dtoToEdibleCategory(
  edibleCategoryDto: EdibleCategoryDTO,
): EdibleCategory {
  return {
    id: edibleCategoryDto.id,
    name: edibleCategoryDto.name,
    order: edibleCategoryDto.order,
    parentId: edibleCategoryDto.parentId,
  };
}

export const ApiEdibleCategoryRepository: EdibleCategoryRepository = {
  getList: async (queryParams: QueryParams) => {
    const { data, total } = await http.get<EdibleCategoryDTO[]>(
      "http://localhost:3001/edible-categories",
      queryParams,
    );

    return {
      data: data.map((dto) => dtoToEdibleCategory(dto)),
      total,
    };
  },
  create: async (data: EdibleCategory) => {
    const body: EdibleCategoryDTO = {
      id: data.id,
      name: data.name,
      order: data.order,
      parentId: data.parentId,
    };

    const edibleCategory = await http.post<EdibleCategory>(
      "http://localhost:3001/edible-categories",
      body,
    );
    return edibleCategory;
  },
  update: async (data: EdibleCategory) => {
    const edibleDto = await http.put<EdibleCategoryDTO>(
      `http://localhost:3001/edible-categories/${data.id}`,
      data,
    );
    return dtoToEdibleCategory(edibleDto);
  },

  delete: async (id: EdibleCategoryId) => {
    return await http.delete<void>(
      `http://localhost:3001/edible-categories/${id}`,
    );
  },
};

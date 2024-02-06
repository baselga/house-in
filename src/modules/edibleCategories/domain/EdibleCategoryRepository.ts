import { QueryParams } from "@/modules/shared/domain/QueryParams";
import { EdibleCategory, EdibleCategoryId } from "./EdibleCategory";

export interface EdibleCategoryRepository {
  getList: (queryParams: QueryParams) => Promise<{
    data: EdibleCategory[];
    total: number;
  }>;
  create: (data: EdibleCategory) => Promise<EdibleCategory>;
  update: (data: EdibleCategory) => Promise<EdibleCategory>;
  delete: (id: EdibleCategoryId) => Promise<void>;
}

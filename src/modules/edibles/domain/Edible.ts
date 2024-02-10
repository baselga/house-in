import { EdibleCategoryId } from "@/modules/edibleCategories/domain/EdibleCategory";

export type EdibleId = string;

export type Edible = {
  id: EdibleId;
  name: string;
  stock: number;
  minStock: number;
  optimalStock: number;
  categoryIds?: EdibleCategoryId[];
  trash: boolean;
};

export type EdibleCreate = Omit<Edible, "id" | "trash">;

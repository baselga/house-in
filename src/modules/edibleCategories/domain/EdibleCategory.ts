export type EdibleCategoryId = string;

export type EdibleCategory = {
  id: EdibleCategoryId;
  name: string;
  order: number;
  parentId: EdibleCategoryId | null;
};

export type EdibleCategoryCreate = EdibleCategory & {
  id?: EdibleCategoryId;
}

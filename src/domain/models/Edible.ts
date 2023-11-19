import { EdibleCategoryId } from "./EdibleCategory"

export type EdibleId = string

export type Edible = {
  id: EdibleId,
  name: string,
  stock: number,
  categorires?: Array<EdibleCategoryId>
  trash: boolean
}
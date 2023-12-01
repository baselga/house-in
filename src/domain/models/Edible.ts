import { EdibleCategoryId } from "./EdibleCategory"

export type EdibleId = string

export type Edible = {
  id: EdibleId,
  name: string,
  stock: number,
  minStock: number,
  optimalStock: number,
  categorires?: Array<EdibleCategoryId>  
  trash: boolean
}

export type EdibleStockLevel = "low" | "medium" | "high"

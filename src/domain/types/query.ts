
export interface queryType {
  pagination?: {
    page?: number
    perPage?: number
  },
  sort?: {
    field: string;
    order: "ASC" | "DESC"
  }
}
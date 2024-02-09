export type QueryParams = {
  pagination?: {
    page?: number;
    perPage?: number;
  };
  sort?: {
    field: string;
    order: "ASC" | "DESC";
  };
  filter?: Record<string, string | number>;
};

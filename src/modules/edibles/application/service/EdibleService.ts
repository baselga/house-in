import { EdibleCreate } from "../../domain/Edible";
import { EdibleRepository } from "../../domain/EdibleRepository";
import { createEdible } from "../create/createEdible";
import { EdibleQueryParams, getEdibles } from "../get/getEdibles";

export const EdibleService = (repository: EdibleRepository) => ({
  getEdibles: (queryParams: EdibleQueryParams) =>
    getEdibles(repository, queryParams),
  createEdible: (data: EdibleCreate) => createEdible(repository, data),
});

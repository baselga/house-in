import { Edible, EdibleCreate, EdibleId } from "../../domain/Edible";
import { EdibleRepository } from "../../domain/EdibleRepository";
import { createEdible } from "../create/createEdible";
import { deleteEdible } from "../delete/deleteEdible";
import downStockEdible from "../downStock/downStockEdible";
import { EdibleQueryParams, getEdibles } from "../get/getEdibles";
import getOneEdible from "../getOne/getOneEdible";
import upStockEdible from "../upStock/upStockEdible";
import { updateEdible } from "../update/updateEdible";

export const EdibleService = (repository: EdibleRepository) => ({
  getEdibles: (queryParams: EdibleQueryParams) =>
    getEdibles(repository, queryParams),
  getOneEdible: (id: EdibleId) => getOneEdible(repository, id),
  createEdible: (data: EdibleCreate) => createEdible(repository, data),
  updateEdible: (data: Edible) => updateEdible(repository, data),
  deleteEdible: (id: EdibleId) => deleteEdible(repository, id),
  upEdibleStock: (id: EdibleId) => upStockEdible(repository, id),
  downEdibleStock: (id: EdibleId) => downStockEdible(repository, id),
});

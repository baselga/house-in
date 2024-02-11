import { QueryParams } from "@/modules/shared/domain/QueryParams";
import getQueryConstraints from "@/modules/shared/infraestructure/firebase/getQueryConstraints";
import {
  createCollection,
  createDoc,
} from "@/modules/shared/infraestructure/firebase/helpers";
import {
  deleteDoc,
  getCountFromServer,
  getDoc,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore";
import { Edible, EdibleId } from "../domain/Edible";
import { EdibleRepository } from "../domain/EdibleRepository";

type FireBaseEdibleDTO = {
  name: string;
  stock: number;
  minStock: number;
  optimalStock: number;
  categoryIds?: string[];
};

function fbDtoToEdible(id: string, edibleDto: FireBaseEdibleDTO): Edible {
  return {
    id: id,
    name: edibleDto.name,
    stock: edibleDto.stock,
    minStock: edibleDto.minStock,
    optimalStock: edibleDto.optimalStock,
    categoryIds: edibleDto.categoryIds,
    trash: false,
  };
}

function edibleToFbDto(data: Edible): FireBaseEdibleDTO {
  return {
    name: data.name,
    stock: data.stock,
    minStock: data.minStock,
    optimalStock: data.optimalStock,
    // categoryIds: data.categoryIds,
  };
}

export const FirebaseEdibleRepository: EdibleRepository = {
  getOne: async (id: EdibleId) => {
    const docRef = createDoc<FireBaseEdibleDTO>("edibles", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return fbDtoToEdible(docSnap.id, docSnap.data());
    } else {
      throw new Error("El elemento no existe");
    }
  },

  getEdibles: async (queryParams: QueryParams) => {
    const constraints = getQueryConstraints(queryParams);

    const q = query(
      createCollection<FireBaseEdibleDTO>("edibles"),
      ...constraints,
    );

    let querySnapshot, countSnapshot;
    try {
      [querySnapshot, countSnapshot] = await Promise.all([
        getDocs(q),
        getCountFromServer(query(createCollection("edibles"))),
      ]);
    } catch (error) {
      console.error(error);
      throw new Error(
        "FirebaseEdibleRepository: Error al contectar con firebase en getEdibles().",
      );
    }

    let data: Edible[] = [];
    querySnapshot.forEach((doc) => {
      data.push(fbDtoToEdible(doc.id, doc.data()));
    });

    if (queryParams.pagination) {
      const { page = 1, perPage = 20 } = queryParams.pagination;
      data = data.splice((page - 1) * perPage, perPage);
    }

    return {
      data: data,
      total: countSnapshot.data().count,
    };
  },

  createEdible: async (data: Edible) => {
    const body = edibleToFbDto(data);

    try {
      await setDoc(createDoc("edibles", data.id), body);
    } catch (error) {
      console.error(error);
      throw new Error(
        "FirebaseEdibleRepository: Error al contectar con firebase en createEdible().",
      );
    }

    return data;
  },

  updateEdible: async (data: Edible) => {
    const body = edibleToFbDto(data);

    try {
      await setDoc(createDoc("edibles", data.id), body);
    } catch (error) {
      console.error(error);
      throw new Error(
        "FirebaseEdibleRepository: Error al contectar con firebase en updateEdible().",
      );
    }

    return data;
  },

  deleteEdible: async (id: EdibleId) => {
    return await deleteDoc(createDoc("edibles", id));
  },
};

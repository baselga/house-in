import {
  CollectionReference,
  DocumentData,
  DocumentReference,
  collection,
  doc,
} from "firebase/firestore";
import { db } from "./config";

export const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(db, collectionName) as CollectionReference<T>;
};

export const createDoc = <T = DocumentData>(
  collectionName: string,
  id: string,
) => {
  return doc(db, collectionName, id) as DocumentReference<T>;
};

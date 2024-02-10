import { v4 as uuidv4 } from "uuid";

function get(): string {
  return uuidv4();
}

export const uuid = {
  get,
};

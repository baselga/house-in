import { edibleRepository } from "../../infrastructure/repositories/edible.repository"


export const edibleService = {
  getEdibles: () => {
    return edibleRepository.getEdibles()
  }
}
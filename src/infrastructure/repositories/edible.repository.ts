import { Edible } from "../../domain/models/Edible"
import { EdibleDTO } from "../http/dto/EdibleDTO"
import { http } from "../http/http"


export const edibleRepository = {
  getEdibles:async () => {
    const edibles = await http.get<EdibleDTO[]>('http://localhost:3001/edibles')

    return edibles.map((edibleDto): Edible => ({
      id: edibleDto.id,
      name: edibleDto.name,
      stock: edibleDto.stock,
      trash: edibleDto.trash
    }))
  }
}
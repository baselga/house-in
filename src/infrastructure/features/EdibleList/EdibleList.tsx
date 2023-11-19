import { useCallback, useEffect, useState } from "react"
import { Edible } from "../../../domain/models/Edible"
import { edibleService } from "../../../domain/services/Edible.service"

const EdibleList: React.FC = () => {
  const [edibles, setEdibles] = useState<Edible[]>([])

  const getEdibles = useCallback(
    () => {
      edibleService.getEdibles().then(setEdibles).catch((e) => {
        console.warn(e?.message)
      })
    },
    [],
  )
    
  useEffect(() => {
    getEdibles()
  }, [getEdibles])

  return (
    <section>
      <h2>Despensa</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {edibles.map((edible) => (
            <tr key={edible.id}>
              <td>{edible.name}</td>
              <td>{edible.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default EdibleList
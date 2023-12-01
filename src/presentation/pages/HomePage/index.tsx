import LayoutPage from "@/presentation/components/templates/LayoutPage"
import EdibleList from "./componentes/EdibleList"

const HomePage = () => {
  return (
    <LayoutPage>
      <div className="grid grid-cols-2">
        <EdibleList />
      </div>
    </LayoutPage>    
  )
}

export default HomePage
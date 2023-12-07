import LayoutPage from "@/presentation/components/templates/LayoutPage"
import CardEdiblesHome from "./components/CardEdiblesHome"

const HomePage = () => {
  return (
    <LayoutPage>
      <div className="grid grid-cols-2">
        <CardEdiblesHome />
      </div>
    </LayoutPage>    
  )
}

export default HomePage
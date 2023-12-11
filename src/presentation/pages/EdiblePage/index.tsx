import LayoutPage from "@/presentation/components/templates/LayoutPage";
import CardAddEdible from "./components/CardAddEdible";
import CardListEdibles from "./components/CardListEdibles";
import { EdiblePageProvider } from "./context";
import { ApiEdibleRepository } from "@/modules/edibles/infraestructure/ApiEdibleRepository";

const EdiblePage = () => {
  return (
    <EdiblePageProvider repository={ApiEdibleRepository}>
      <LayoutPage>
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold">Despensa</h1>
          <CardAddEdible />
          <CardListEdibles />
        </div>
      </LayoutPage>
    </EdiblePageProvider>
  );
};

export default EdiblePage;

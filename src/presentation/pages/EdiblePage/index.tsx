import { ApiEdibleRepository } from "@/modules/edibles/infraestructure/ApiEdibleRepository";
import LayoutPage from "@/presentation/components/templates/LayoutPage";
import CardAddEdible from "./components/CardAddEdible";
import CardListEdibles from "./components/CardListEdibles";
import { EdiblePageProvider } from "./context";
import { RepositoryProvider } from "@/presentation/helpers/repositoryContext";
import FormModalEdible from "./components/FormModalEdible";
import { EdibleRepository } from "@/modules/edibles/domain/EdibleRepository";

const EdiblePage = () => {
  return (
    <RepositoryProvider<EdibleRepository> repository={ApiEdibleRepository}>
      <EdiblePageProvider>
        <LayoutPage>
          <div className="flex flex-col gap-6 pb-6">
            <h1 className="text-3xl font-bold">Despensa</h1>
            <CardAddEdible />
            <CardListEdibles />
          </div>
          <FormModalEdible /> 
        </LayoutPage>
      </EdiblePageProvider>
    </RepositoryProvider>
  );
};

export default EdiblePage;

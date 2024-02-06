import { ApiEdibleRepository } from "@/modules/edibles/infraestructure/ApiEdibleRepository";
import LayoutPage from "@/presentation/components/templates/LayoutPage";
import CardAddEdible from "./components/CardAddEdible";
import CardListEdibles from "./components/CardListEdibles";
import { EdiblePageProvider } from "./context";
import { RepositoryProvider } from "@/presentation/helpers/repositoryContext";
import FormModalEdible from "./components/FormModalEdible";
import { EdibleRepository } from "@/modules/edibles/domain/EdibleRepository";
import CategoryMenu from "./components/CategoryMenu";

const EdiblePage = () => {
  return (
    <RepositoryProvider<EdibleRepository> repository={ApiEdibleRepository}>
      <EdiblePageProvider>
        <LayoutPage>
          <h1 className="text-3xl font-bold pb-6">Despensa</h1>
          <section className="pb-6">
            <CardAddEdible />
          </section>
          <div className="flex flex-row gap-6 w-full">
            <CategoryMenu />
            <div className="flex flex-col gap-6 pb-6 flex-1">
              <CardListEdibles />
            </div>
          </div>
          <FormModalEdible />
        </LayoutPage>
      </EdiblePageProvider>
    </RepositoryProvider>
  );
};

export default EdiblePage;

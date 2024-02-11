import { ApiEdibleCategoryRepository } from "@/modules/edibleCategories/infraestructure/ApiEdibleCategoryRepository";
import { FirebaseEdibleRepository } from "@/modules/edibles/infraestructure/FirebaseEdibleRepository";
import LayoutPage from "@/presentation/components/templates/LayoutPage";
import { RepositoryProvider } from "@/presentation/helpers/repositoryContext";
import CardAddEdible from "./components/CardAddEdible";
import CardListEdibles from "./components/CardListEdibles";
import CategoryMenu from "./components/CategoryMenu";
import FormModalEdible from "./components/FormModalEdible";
import { EdiblePageProvider } from "./context";

const EdiblePage = () => {
  return (
    <RepositoryProvider
      repository={{
        edible: FirebaseEdibleRepository,
        edibleCategory: ApiEdibleCategoryRepository,
      }}
    >
      <EdiblePageProvider>
        <LayoutPage>
          <h1 className="text-3xl font-bold pb-6 text-stone-800">Despensa</h1>
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

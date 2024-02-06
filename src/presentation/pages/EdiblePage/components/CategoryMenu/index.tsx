import { EdibleCategoryRepository } from "@/modules/edibleCategories/domain/EdibleCategoryRepository";
import { ApiEdibleCategoryRepository } from "@/modules/edibleCategories/infraestructure/ApiEdibleCategoryRepository";
import { RepositoryProvider } from "@/presentation/helpers/repositoryContext";
import CategoryMenuView from "./View";
import { CategoryMenuContextProvider } from "./context";

const CategoryMenu = () => {
  return (
    <RepositoryProvider<EdibleCategoryRepository>
      repository={ApiEdibleCategoryRepository}
    >
      <CategoryMenuContextProvider>
        <CategoryMenuView />
      </CategoryMenuContextProvider>
    </RepositoryProvider>
  );
};

export default CategoryMenu;

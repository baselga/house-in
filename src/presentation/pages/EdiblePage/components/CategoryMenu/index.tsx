import CategoryMenuView from "./View";
import { CategoryMenuContextProvider } from "./context";

const CategoryMenu = () => {
  return (
    <CategoryMenuContextProvider>
      <CategoryMenuView />
    </CategoryMenuContextProvider>
  );
};

export default CategoryMenu;

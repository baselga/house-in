import React, { createContext, useCallback, useContext } from "react";
import { UseQueryResult, useMutation, useQuery } from "react-query";
import { EdibleCategory, EdibleCategoryCreate } from "@/modules/edibleCategories/domain/EdibleCategory";
import useRepositoryContext from "@/presentation/helpers/repositoryContext";
import { EdibleCategoryRepository } from "@/modules/edibleCategories/domain/EdibleCategoryRepository";
import { EdibleCategoryService } from "@/modules/edibleCategories/application/service/EdibleCategoryService";

type CategoryMenuContextType = {
  menuItems:
    | UseQueryResult<
        {
          data: EdibleCategory[];
          total: number;
        },
        unknown
      >
    | Record<string, never>;
  updateMenu: (values: (EdibleCategory | EdibleCategoryCreate)[]) => Promise<EdibleCategory[]>;
  isUpdating: boolean
};

export const CategoryMenuContext =
  createContext<CategoryMenuContextType | null>(null);

export const CategoryMenuContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const repository = useRepositoryContext<EdibleCategoryRepository>();
  const service = EdibleCategoryService(repository);
  const mutation = useMutation(service.updateAll);

  const menuItems = useQuery(["edible-menu"], () =>
    service.getList({
      sort: {
        field: "order",
        order: "ASC",
      },
    })
  );

  const updateMenu = useCallback(
    (values: (EdibleCategory | EdibleCategoryCreate)[]) => {
      return mutation.mutateAsync(values);
    },
    [mutation]
  );

  return (
    <CategoryMenuContext.Provider
      value={{
        menuItems,
        updateMenu,
        isUpdating: mutation.isLoading
      }}
    >
      {children}
    </CategoryMenuContext.Provider>
  );
};

const useCategoryMenuContext = () => {
  const context = useContext(CategoryMenuContext);

  if (!context) {
    throw new Error(
      "useCategoryMenuContext must be used inside the CategoryMenuContextProvider"
    );
  }

  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export default useCategoryMenuContext;

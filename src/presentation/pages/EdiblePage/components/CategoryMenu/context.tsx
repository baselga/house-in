import { EdibleCategoryService } from "@/modules/edibleCategories/application/service/EdibleCategoryService";
import { EdibleCategory, EdibleCategoryCreate } from "@/modules/edibleCategories/domain/EdibleCategory";
import { EdibleCategoryRepository } from "@/modules/edibleCategories/domain/EdibleCategoryRepository";
import useRepositoryContext from "@/presentation/helpers/repositoryContext";
import useGetAllEdibleCategories from "@/presentation/queryHooks/useGetAllEdibleCategories";
import React, { createContext, useCallback, useContext } from "react";
import { UseQueryResult, useMutation } from "react-query";

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
  const menuItems = useGetAllEdibleCategories(repository)
  const service = EdibleCategoryService(repository);
  const mutation = useMutation(service.updateAll);

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

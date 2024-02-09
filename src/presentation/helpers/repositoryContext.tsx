import { EdibleCategoryRepository } from "@/modules/edibleCategories/domain/EdibleCategoryRepository";
import { EdibleRepository } from "@/modules/edibles/domain/EdibleRepository";
import { createContext, useContext } from "react";

type RepositoryType = {
  edible?: EdibleRepository;
  edibleCategory?: EdibleCategoryRepository;
};

export const RepositoryContext = createContext<RepositoryType | null>(null);

export function RepositoryProvider({
  children,
  repository,
}: {
  children: React.ReactNode;
  repository: RepositoryType;
}) {
  return (
    <RepositoryContext.Provider value={repository}>
      {children}
    </RepositoryContext.Provider>
  );
}

function useRepositoryContext<T>(type: keyof RepositoryType): T {
  const context = useContext(RepositoryContext);

  if (!context) {
    throw new Error(
      "useRepositoryContext must be used inside the RepositoryProvider"
    );
  }

  if (!context[type]) {
    throw new Error(
      `RepositoryContext does not contains a tepository of type ${type}.`
    );
  }

  return context[type] as T;
}

// eslint-disable-next-line react-refresh/only-export-components
export default useRepositoryContext;

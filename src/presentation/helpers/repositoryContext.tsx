import { createContext, useContext } from "react";

export const RepositoryContext = createContext<unknown>(null);

export function RepositoryProvider<T>({
  children,
  repository,
}: {
  children: React.ReactNode;
  repository: T;
}) {
  return (
    <RepositoryContext.Provider value={repository}>
      {children}
    </RepositoryContext.Provider>
  );
}

function useRepositoryContext<T>(): T {
  const context = useContext(RepositoryContext);

  if (!context) {
    throw new Error('useRepositoryContext must be used inside the RepositoryProvider');
  }

  return context as T;
}

// eslint-disable-next-line react-refresh/only-export-components
export default useRepositoryContext;

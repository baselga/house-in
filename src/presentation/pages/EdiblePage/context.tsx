import { EdibleService } from "@/modules/edibles/application/service/EdibleService";
import { Edible, EdibleId } from "@/modules/edibles/domain/Edible";
import { EdibleRepository } from "@/modules/edibles/domain/EdibleRepository";
import { ApiEdibleRepository } from "@/modules/edibles/infraestructure/ApiEdibleRepository";
import useGetEdibleQuery from "@/presentation/queryHooks/useGetEdibleQuery";
import React, { createContext, useCallback, useContext, useState } from "react";
import { UseQueryResult, useMutation } from "react-query";

const PER_PAGE = 20;

type EdiblePageContextType = {
  page: number;
  perPage: number;
  edibleList:
    | UseQueryResult<
        {
          data: Edible[];
          total: number;
        },
        unknown
      >
    | Record<string, never>;
  isUpdating: boolean;
  onPageChange: (page: number) => void;
  onUpStock: (id: EdibleId) => void;
  onDownStock: (id: EdibleId) => void;
  onDelete: (id: EdibleId) => void;
};

export const EdiblePageContext = createContext<EdiblePageContextType>({
  page: 1,
  perPage: PER_PAGE,
  isUpdating: false,
  edibleList: {},
  onPageChange: () => {},
  onUpStock: () => {},
  onDownStock: () => {},
  onDelete: () => {},
});

export const EdiblePageProvider = ({
  children,
  repository = ApiEdibleRepository,
}: {
  children: React.ReactNode;
  repository?: EdibleRepository;
}) => {
  const service = EdibleService(repository);
  const upStockMutation = useMutation(service.upEdibleStock);
  const downStockMutation = useMutation(service.downEdibleStock);
  const deleteMutation = useMutation(service.deleteEdible);
  const [page, setPage] = useState<number>(1);

  const edibleList = useGetEdibleQuery(
    {
      pagination: {
        page,
        perPage: PER_PAGE,
      },
      sort: {
        field: "name",
        order: "ASC",
      },
    },
    repository
  );

  const onUpStock = useCallback(
    (id: EdibleId) => {      
      upStockMutation.mutate(id, {
        onSuccess: () => {
          edibleList.refetch();
        },
      });
    },
    [edibleList, upStockMutation]
  );

  const onDownStock = useCallback(
    (id: EdibleId) => {
      downStockMutation.mutate(id, {
        onSuccess: () => {
          edibleList.refetch();
        },
      });
    },
    [downStockMutation, edibleList]
  );

  const onDelete = useCallback((id: EdibleId) => {
    deleteMutation.mutate(id, {
      onSuccess: () => {
        edibleList.refetch();
      },
    });
  }, [deleteMutation, edibleList]);

  return (
    <EdiblePageContext.Provider
      value={{
        page,
        perPage: PER_PAGE,
        edibleList,
        isUpdating: upStockMutation.isLoading || downStockMutation.isLoading || deleteMutation.isLoading,
        onPageChange: setPage,
        onUpStock,
        onDownStock,
        onDelete
      }}
    >
      {children}
    </EdiblePageContext.Provider>
  );
};

const useEdiblePageContext = () => {
  const context = useContext(EdiblePageContext);
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export default useEdiblePageContext;

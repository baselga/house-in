import { EdibleCategoryId } from "@/modules/edibleCategories/domain/EdibleCategory";
import { EdibleService } from "@/modules/edibles/application/service/EdibleService";
import { Edible, EdibleId } from "@/modules/edibles/domain/Edible";
import { EdibleRepository } from "@/modules/edibles/domain/EdibleRepository";
import useRepositoryContext from "@/presentation/helpers/repositoryContext";
import useGetEdibleQuery from "@/presentation/queryHooks/useGetEdibleQuery";
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { UseQueryResult, useMutation } from "react-query";

const PER_PAGE = 15;

type EdiblePageFilterType = {
  categoryId: EdibleCategoryId | false;
};

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
  idEdit: EdibleId | false;
  filter: EdiblePageFilterType;
  onPageChange: (page: number) => void;
  onUpStock: (id: EdibleId) => void;
  onDownStock: (id: EdibleId) => void;
  openEditModal: (id: EdibleId) => void;
  closeEditModal: () => void;
  changeFilter: (newFilter: Partial<EdiblePageFilterType>) => void;
};

export const EdiblePageContext = createContext<EdiblePageContextType | null>(
  null
);

export const EdiblePageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const edibleRepository = useRepositoryContext<EdibleRepository>("edible");
  const service = EdibleService(edibleRepository);
  const upStockMutation = useMutation(service.upEdibleStock);
  const downStockMutation = useMutation(service.downEdibleStock);
  const [page, setPage] = useState<number>(1);
  const [idEdit, setIdEdit] = useState<EdibleId | false>(false);
  const [filter, setFilter] = useState<EdiblePageFilterType>({
    categoryId: false,
  });

  const queryFilter = useMemo(() => {
    const finalFilters: Record<string, string | number> = {};
    if (filter.categoryId) {
      finalFilters.categoryId = filter.categoryId;
    }
    return finalFilters;
  }, [filter.categoryId]);

  const edibleList = useGetEdibleQuery({
    pagination: {
      page,
      perPage: PER_PAGE,
    },
    sort: {
      field: "name",
      order: "ASC",
    },
    filter: queryFilter,
  });

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

  const openEditModal = useCallback((id: EdibleId) => {
    setIdEdit(id);
  }, []);

  const closeEditModal = useCallback(() => {
    setIdEdit(false);
  }, []);

  const changeFilter = useCallback(
    (newFilter: Partial<EdiblePageFilterType>) => {
      setFilter({
        ...filter,
        ...newFilter,
      });
    },
    [filter]
  );

  return (
    <EdiblePageContext.Provider
      value={{
        page,
        perPage: PER_PAGE,
        edibleList,
        isUpdating: upStockMutation.isLoading || downStockMutation.isLoading,
        idEdit,
        filter,
        onPageChange: setPage,
        onUpStock,
        onDownStock,
        openEditModal,
        closeEditModal,
        changeFilter,
      }}
    >
      {children}
    </EdiblePageContext.Provider>
  );
};

const useEdiblePageContext = () => {
  const context = useContext(EdiblePageContext);

  if (!context) {
    throw new Error(
      "useEdiblePageContext must be used inside the EdiblePageProvider"
    );
  }

  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export default useEdiblePageContext;

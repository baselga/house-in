import useRepositoryContext from "@/presentation/helpers/repositoryContext";
import useEdiblePageContext from "../../context";
import { EdibleRepository } from "@/modules/edibles/domain/EdibleRepository";
import useGetOneEdibleQuery from "@/presentation/queryHooks/useGetOneEdibleQuery";
import { useCallback } from "react";
import { Edible } from "@/modules/edibles/domain/Edible";
import useUpdateEdibleMutation from "@/presentation/queryHooks/useUpdateEdibleMutation";

function useFormModalEdible() {
  const { idEdit, closeEditModal, edibleList } = useEdiblePageContext();
  const { mutate: updateEdible } = useUpdateEdibleMutation();
  const repository = useRepositoryContext<EdibleRepository>();

  const { data: edible, isLoading, isFetched } = useGetOneEdibleQuery(idEdit, repository);

  const onSubmit = useCallback(
    (values: Edible) => {
      updateEdible(values, {
        onSuccess: () => {
          closeEditModal();
          edibleList.refetch();
        },
      });
    },
    [closeEditModal, edibleList, updateEdible]
  );

  return {
    isOpen: !!idEdit,
    isLoading,
    isFetched,
    edible,
    close: closeEditModal,
    onSubmit,
  };
}

export default useFormModalEdible;

import { Edible } from "@/modules/edibles/domain/Edible";
import useGetOneEdibleQuery from "@/presentation/queryHooks/useGetOneEdibleQuery";
import useUpdateEdibleMutation from "@/presentation/queryHooks/useUpdateEdibleMutation";
import { useCallback } from "react";
import useEdiblePageContext from "../../context";

function useFormModalEdible() {
  const { idEdit, closeEditModal, edibleList } = useEdiblePageContext();
  const { mutate: updateEdible } = useUpdateEdibleMutation();
  const { data: edible, isLoading, isFetched } = useGetOneEdibleQuery(idEdit);

  const onSubmit = useCallback(
    (values: Edible) => {
      updateEdible(values, {
        onSuccess: () => {
          closeEditModal();
          edibleList.refetch();
        },
      });
    },
    [closeEditModal, edibleList, updateEdible],
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

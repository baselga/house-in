import { EdibleService } from "@/modules/edibles/application/service/EdibleService";
import { Edible } from "@/modules/edibles/domain/Edible";
import { EdibleRepository } from "@/modules/edibles/domain/EdibleRepository";
import useRepositoryContext from "@/presentation/helpers/repositoryContext";
import useEdiblePageContext from "@/presentation/pages/EdiblePage/context";
import { useCallback, useState } from "react";
import { useMutation } from "react-query";

const useDeleteAction = (edible: Edible) => {
  const repository = useRepositoryContext<EdibleRepository>("edible");
  const { edibleList } = useEdiblePageContext();
  const service = EdibleService(repository);
  const deleteMutation = useMutation(service.deleteEdible);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onDelete = useCallback(() => {
    deleteMutation.mutate(edible.id, {
      onSuccess: () => {
        close();
        edibleList.refetch();
      },
    });
  }, [close, deleteMutation, edible.id, edibleList]);

  return {
    isOpen,
    close,
    open,
    onDelete,
    isDeleting: deleteMutation.isLoading,
  };
};

export default useDeleteAction;

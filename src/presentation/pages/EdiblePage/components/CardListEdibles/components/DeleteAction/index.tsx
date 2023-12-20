import { Edible } from "@/modules/edibles/domain/Edible";
import ButtonIcon from "@/presentation/components/atoms/ButtonIcon";
import Modal from "@/presentation/components/templates/Modal";
import useEdiblePageContext from "@/presentation/pages/EdiblePage/context";
import useDeleteAction from "./useDeleteAction";
import { Button } from "@/presentation/components/ui/button";

const DeleteAction = ({
  edible,
  className,
}: {
  edible: Edible;
  className?: string;
}) => {
  const { isUpdating } = useEdiblePageContext();
  const { isOpen, isDeleting, open, close, onDelete } = useDeleteAction(edible);

  return (
    <>
      <ButtonIcon
        variant="destructive"
        icon="Trash"
        isLoading={isUpdating}
        onClick={open}
        className={className}
      />
      <Modal
        isOpen={isOpen}
        title="Eliminar producto"
        size="sm"
        close={close}
        actions={
          <>
            <Button variant="outline" disabled={isDeleting} onClick={close}>
              Cancelar
            </Button>
            <Button
              variant="destructive"
              disabled={isDeleting}
              onClick={onDelete}
            >
              Eliminar
            </Button>
          </>
        }
      >
        <p className="text-center text-2xl">{`¿Eliminar ${edible.name} de la despensa?`}</p>
      </Modal>
    </>
  );
};

export default DeleteAction;

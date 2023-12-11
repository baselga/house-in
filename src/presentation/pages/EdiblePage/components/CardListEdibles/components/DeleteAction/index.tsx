import { Edible } from "@/modules/edibles/domain/Edible";
import ButtonIcon from "@/presentation/components/atoms/ButtonIcon";
import useEdiblePageContext from "@/presentation/pages/EdiblePage/context";

const DeleteAction = ({ edible }: { edible: Edible }) => {
  const { isUpdating, onDelete } = useEdiblePageContext();
  return (
    <ButtonIcon
      variant="destructive"
      icon="Trash"
      isLoading={isUpdating}
      onClick={() => onDelete(edible.id)}
    />
  );
};

export default DeleteAction;

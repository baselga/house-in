import { Edible } from "@/modules/edibles/domain/Edible";
import ButtonIcon from "@/presentation/components/atoms/ButtonIcon";
import useEdiblePageContext from "@/presentation/pages/EdiblePage/context";

const EditAction = ({
  edible,
  className,
}: {
  edible: Edible;
  className?: string;
}) => {
  const { openEditModal } = useEdiblePageContext();
  return (
    <ButtonIcon
      icon="Edit"
      variant="default"
      className={className}
      onClick={() =>  {        
        openEditModal(edible.id)
      }}
    />
  );
};

export default EditAction;

import { Edible } from "@/modules/edibles/domain/Edible";
import ButtonIcon from "@/presentation/components/atoms/ButtonIcon";
import useEdiblePageContext from "@/presentation/pages/EdiblePage/context";

const DownStockAction = ({ edible }: { edible: Edible }) => {
  const {onDownStock, isUpdating} = useEdiblePageContext()

  return (
    <ButtonIcon
      variant="outline"
      icon="ChevronDown"
      disabled={edible.stock === 0}
      onClick={() => onDownStock(edible.id)}
      isLoading={isUpdating}
    />
  );
};

export default DownStockAction;

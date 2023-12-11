import { Edible } from "@/modules/edibles/domain/Edible";
import ButtonIcon from "@/presentation/components/atoms/ButtonIcon";
import useEdiblePageContext from "@/presentation/pages/EdiblePage/context";

const UpStockAction = ({ edible }: { edible: Edible }) => {
  const { onUpStock, isUpdating } = useEdiblePageContext();
  return (
    <ButtonIcon
      variant="outline"
      icon="ChevronUp"
      onClick={() => onUpStock(edible.id)}
      isLoading={isUpdating}
    />
  );
};

export default UpStockAction;

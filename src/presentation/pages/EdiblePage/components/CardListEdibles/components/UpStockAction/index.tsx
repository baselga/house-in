import { Edible } from "@/modules/edibles/domain/Edible";
import ButtonIcon from "@/presentation/components/atoms/ButtonIcon";
import useEdiblePageContext from "@/presentation/pages/EdiblePage/context";

const UpStockAction = ({
  edible,
  className,
}: {
  edible: Edible;
  className?: string;
}) => {
  const { onUpStock, isUpdating } = useEdiblePageContext();
  return (
    <ButtonIcon
      variant="outline"
      icon="ChevronUp"
      onClick={() => onUpStock(edible.id)}
      isLoading={isUpdating}
      className={className}
    />
  );
};

export default UpStockAction;

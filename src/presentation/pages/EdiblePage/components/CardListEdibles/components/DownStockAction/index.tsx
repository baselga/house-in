import { Edible } from "@/modules/edibles/domain/Edible";
import ButtonIcon from "@/presentation/components/atoms/ButtonIcon";
import useEdiblePageContext from "@/presentation/pages/EdiblePage/context";

const DownStockAction = ({
  edible,
  className,
}: {
  edible: Edible;
  className?: string;
}) => {
  const { onDownStock, isUpdating } = useEdiblePageContext();

  return (
    <ButtonIcon
      variant="outline"
      icon="ChevronDown"
      disabled={edible.stock === 0}
      onClick={() => onDownStock(edible.id)}
      isLoading={isUpdating}
      className={className}
    />
  );
};

export default DownStockAction;

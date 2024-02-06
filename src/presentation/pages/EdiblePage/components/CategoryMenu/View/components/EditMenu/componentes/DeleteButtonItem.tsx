import ButtonIcon from "@/presentation/components/atoms/ButtonIcon";
import { useCallback } from "react";
import { useFormContext } from "react-hook-form";

const DeleteButtonItem = ({ index = 0 }: { index?: number }) => {
  const { getValues, setValue } = useFormContext();

  const handleClick = useCallback(() => {
    const menuItems = getValues("menuItems");
    menuItems.splice(index, 1);
    setValue("menuItems", menuItems);
  }, [getValues, index, setValue]);

  return (
    <ButtonIcon
      type="button"
      className="rounded-tl-none rounded-bl-none"
      icon="Trash"
      variant="destructive"
      onClick={handleClick}
    />
  );
};

export default DeleteButtonItem;

import { Button } from "@/presentation/components/ui/button";
import { useCallback } from "react";
import { useFormContext } from "react-hook-form";

const AddItemButton = () => {
  const { getValues, setValue } = useFormContext();

  const onClick = useCallback(() => {
    const menuItems = getValues("menuItems");

    menuItems.push({
      name: "",
      order: menuItems.length,
      parentId: null,
    });
    setValue("menuItems", menuItems);
  }, [getValues, setValue]);

  return (
    <Button type="button" variant="ghost" onClick={onClick}>
      Añadir +
    </Button>
  );
};

export default AddItemButton;

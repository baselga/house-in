import {
  EdibleCategory,
  EdibleCategoryCreate,
} from "@/modules/edibleCategories/domain/EdibleCategory";
import {
  EdibleCategoryCreateValidatorSchema,
  EdibleCategoryValidatorSchema,
} from "@/modules/edibleCategories/domain/EdibleCategoryValidator";
import ButtonIcon from "@/presentation/components/atoms/ButtonIcon";
import FormModal from "@/presentation/components/templates/FormModal";
import { Button } from "@/presentation/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useState } from "react";
import * as z from "zod";
import useCategoryMenuContext from "../../../context";
import AddItemButton from "./componentes/AddItemButton";
import ListItems from "./componentes/ListItems";

export type EditMenuFormType = {
  menuItems: Array<EdibleCategory | EdibleCategoryCreate>;
};

const EditMenuFormValidatorSchema = z.object({
  menuItems: z.array(
    EdibleCategoryValidatorSchema.or(EdibleCategoryCreateValidatorSchema),
  ),
});

const EditMenu = () => {
  const { menuItems, updateMenu, isUpdating } = useCategoryMenuContext();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onSubmit = useCallback(
    (values: EditMenuFormType) => {
      updateMenu(values.menuItems)
        .then(() => {
          close();
          menuItems.refetch();
        })
        .catch((e: unknown) => {
          console.error("ERROR", e);
        });
    },
    [close, menuItems, updateMenu],
  );

  return (
    <>
      <ButtonIcon
        onClick={open}
        variant="ghost"
        icon="Edit"
        disabled={!menuItems.isFetched}
      />
      {menuItems?.isFetched && (
        <FormModal<EditMenuFormType>
          title="Editar menú de categorías"
          isOpen={isOpen}
          close={close}
          actions={
            <Button type="submit" disabled={isUpdating}>
              Guardar
            </Button>
          }
          onSubmit={onSubmit}
          formProps={{
            resolver: zodResolver(EditMenuFormValidatorSchema),
            defaultValues: {
              menuItems: menuItems?.data?.data,
            },
          }}
        >
          <section className="flex flex-col gap-4 ">
            <div className="flex flex-row-reverse">
              <AddItemButton />
            </div>
            <ListItems />
          </section>
        </FormModal>
      )}
    </>
  );
};

export default EditMenu;

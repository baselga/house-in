import TextFormInput from "@/presentation/components/atoms/form/TextFormInput";
import { DragHandleDots2Icon } from "@radix-ui/react-icons";
import { useCallback } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { List, OnChangeMeta, arrayMove } from "react-movable";
import { EditMenuFormType } from "..";
import DeleteButtonItem from "./DeleteButtonItem";
import {
  EdibleCategory,
  EdibleCategoryCreate,
} from "@/modules/edibleCategories/domain/EdibleCategory";

const ListItems = () => {
  const { getValues, setValue } = useFormContext();
  const menuItems = useWatch<EditMenuFormType, "menuItems">({
    name: "menuItems",
  });

  const handleChange = useCallback(
    (meta: OnChangeMeta) => {
      const { oldIndex, newIndex } = meta;
      const items = getValues("menuItems");
      setValue(
        "menuItems",
        arrayMove<EdibleCategory | EdibleCategoryCreate>(
          items,
          oldIndex,
          newIndex
        ).map((value, index) => ({
          ...value,
          order: index,
        }))
      );
    },
    [getValues, setValue]
  );

  return (
    <List
      lockVertically
      values={menuItems}
      onChange={handleChange}
      renderList={({ children, props }) => (
        <ul className="flex flex-col gap-2" {...props}>
          {children}
        </ul>
      )}
      renderItem={({ props, index, isDragged }) => (
        <div className="flex items-start gap-0 z-50 bg-white" {...props}>
          <DragHandleDots2Icon
            className={`pt-2 h-7 w-7 ${
              isDragged ? "cursor-grabbing" : "cursor-grab"
            }`}
          />
          <TextFormInput source={`menuItems.${index}.name`} />
          <DeleteButtonItem index={index} />
        </div>
      )}
    />
  );
};

export default ListItems;

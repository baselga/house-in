import { EdibleCategory } from "@/modules/edibleCategories/domain/EdibleCategory";
import useEdiblePageContext from "@/presentation/pages/EdiblePage/context";
import { TriangleRightIcon } from "@radix-ui/react-icons";
import { useCallback } from "react";

const CategoryMenuItem = ({ item }: { item: EdibleCategory }) => {
  const { filter, changeFilter } = useEdiblePageContext();
  const active = filter.categoryId === item.id;
  const textColor = active ? "text-black" : "text-gray-400";

  const handleClick = useCallback(() => {
    if (filter.categoryId === item.id) {
      changeFilter({
        categoryId: false,
      });
    } else {
      changeFilter({
        categoryId: item.id,
      });
    }
  }, [changeFilter, filter.categoryId, item.id]);

  return (
    <li
      className={`flex gap-1 items-center font-semibold ${textColor} cursor-pointer hover:text-gray-800`}
      onClick={handleClick}
    >
      <TriangleRightIcon className="h-6 w-6" />
      <span className="text-xl uppercase">{item.name}</span>
    </li>
  );
};

export default CategoryMenuItem;
